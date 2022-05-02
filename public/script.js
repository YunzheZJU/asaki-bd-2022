const dur_line = 0.2

// s`#asaki-bd-2022`.css(`
// position: absolute;
// `)
//
// s`#asaki-bd-2022`.align('right bottom')
// s`#asaki-bd-2022`.size('full full')
//
// s`.line-2`.align({top: 40, right: 40, bottom: 40})
// s`.line-2`.size(8, 'full')
//
// const line_1_after = s`.line-1:after`
// const line_1_before = s`.line-1:before`
// line_1_after.absolute.h_full.w_full
// line_1_after.bg_white
//
// line_1_after.translate_to_left_0p   ({dur: dur_line, start: 0})
// line_1_after.animate   ({to: {left: '0%'}, dur: dur_line, start: 0})
// line_1_before.tranlate_to_left_100p  ({dur: dur_line, start: line_1_after.end})

const TOP = 'top'
const RIGHT = 'right'
const BOTTOM = 'bottom'
const LEFT = 'left'
const CENTER = 'center'
const AUTO = 'auto'
const TRANSLATE = 'translate'
const ROTATE = 'rotate'
const SCALE = 'scale'
const SKEW = 'skew'
const X = 'x'
const Y = 'y'
const Z = 'z'
const FULL = '100%'
let counter = 0

const isBlank = value => value === undefined || value === null

const isPresent = value => !isBlank(value)

const difference = (array1, array2) => array1.filter(item => !array2.includes(item))

const intersection = (array1, array2) => difference(array1, difference(array1, array2))

const assert = (trusy, message, ...objs) => {
  if (!trusy) {
    alert(`${message}\n${objs.map(JSON.stringify).join('\n')}`)
    debugger
  }
}

const wrapValue = (value) => {
  if (typeof value === 'number') {
    return `${value}px`
  }
  return value
}

const smartParams = (params, value_on_hit_key) => {
  const allocation = []
  return new Proxy(params, {
    has(target, p) {
      return true
    },
    get: function (target, propKey) {
      const firstParam = Reflect.get(target, 0)
      if (typeof firstParam === 'object') return firstParam[propKey]
      const index = allocation.findIndex(key => key === propKey)
      if (index === -1) {
        allocation.push(propKey)
      }
      if (params.includes(propKey)) {
        return value_on_hit_key
      }
      if (index === -1) {
        return Reflect.get(target, allocation.length - 1)
      } else {
        return Reflect.get(target, index)
      }
    },
  })
}

const registry = new Map

const dynamic_methods = [
  'css', 'align', 'align_children', 'size', 'fill', 'stroke', 'translate', 'rotate', 'skew', 'scale', 'animate',
]

const merge_declarations = (declarations) => {
  const valueByProterty = Object.fromEntries(declarations)
  const transform = Array.from([
    '--translate-x', '--translate-y', '--translate-z', '--rotate', '--skew-x', '--skew-y', '--scale-x', '--scale-y',
  ]).map(property => {
    const func = property.slice(2).replace(/-[xyz]/, str => str.slice(1).toUpperCase())
    const value = valueByProterty[property]
    return value ? `${func}(${value})` : ''
  }).join(' ')
  return [...declarations, ['transform', transform]].map(([property, value]) => `${property}: ${value};`).join('\n')
}

const regist = (element, pseudo, selector, ...fnParams) => {
  const wrap = (fn, paramConfig) => (...params) => {
    if (typeof params[0] === 'function') {
      return fn(...[params[0](...fnParams)].flat(1))
    } else {
      return fn(...params)
    }
  }

  if (!registry.get(element)) {
    registry.set(element, new Map())
  }
  if (!registry.get(element).get(pseudo)) {
    if (pseudo === 'before') console.log('creating')
    const info = {
      element,
      selector,
      declarations: [],
      extra_styles: [],
      animations: [],
      keyframesByName: {},
    }

    if (['before', 'after'].includes(pseudo)) {
      console.log('content')
      info.declarations.push(['content', '\'\''])
    }
    info._css = (declarations) => {
      const output = { declarations: [], extra_styles: [], animations: [], keyframesByName: {} }
      output.declarations.push(...declarations)
      return output
    }
    info._align = (...params) => {
      const output = { declarations: [], extra_styles: [], animations: [], keyframesByName: {} }
      const { top, right, bottom, left } = smartParams(params, 0)
      output.declarations.push(['position', 'absolute'])
      Object.entries({ top, right, bottom, left }).forEach(([side, value]) => {
        output.declarations.push([side, wrapValue(value)])
      })
      return output
    }
    info._align_children = (...params) => {
      const output = { declarations: [], extra_styles: [], animations: [], keyframesByName: {} }
      let alignBySideEntries
      if (typeof params[0] === 'object') {
        alignBySideEntries = Object.entries(params[0])
      } else {
        alignBySideEntries = params.map(side => [side, 0])
      }
      assert(alignBySideEntries.length <= 2, 'Too many params are specified when aligning children', params)

      const sidesSpecified = alignBySideEntries.map(([side]) => side)
      alignBySideEntries.filter(([side]) => side !== CENTER).forEach(([side, value]) => {
        assert([TOP, RIGHT, BOTTOM, LEFT].includes(side), 'Param is not recognized when aligning', params, side)
        if (side === 'top') output.declarations.push(['align-items', 'flex-start'])
        if (side === 'right') output.declarations.push(['justify-content', 'flex-end'])
        if (side === 'bottom') output.declarations.push(['align-items', 'flex-end'])
        if (side === 'left') output.declarations.push(['justify-content', 'flex-start'])
      })
      alignBySideEntries.filter(([side]) => side === CENTER).forEach(() => {
        if (intersection(sidesSpecified, [TOP, BOTTOM]).length === 0) {
          sidesSpecified.push(TOP)
          return output.declarations.push(['align-items', 'center'])
        }
        if (intersection(sidesSpecified, [LEFT, RIGHT]).length === 0) {
          sidesSpecified.push(LEFT)
          return output.declarations.push(['justify-content', 'center'])
        }
        assert(false, 'Params conflicts when aligning children', params)
      })

      output.extra_styles.push(`${selector} > * { position: relative; }`)

      return output
    }
    info._size = (...params) => {
      const output = { declarations: [], extra_styles: [], animations: [], keyframesByName: {} }
      const { width, height } = smartParams(params)
      Object.entries({ width, height }).forEach(([dimension, value]) => {
        isPresent(value) && output.declarations.push([dimension, wrapValue(value)])
      })
      return output
    }
    info._fill = (...params) => {
      const output = { declarations: [], extra_styles: [], animations: [], keyframesByName: {} }
      const { color } = smartParams(params)
      output.declarations.push(['background', color])
      output.declarations.push(['fill', color])
      return output
    }
    info._stroke = (...params) => {
      const output = { declarations: [], extra_styles: [], animations: [], keyframesByName: {} }
      const { color, width = 1 } = smartParams(params)
      output.declarations.push(['border', `${wrapValue(width)} ${color} solid`])
      output.declarations.push(['stroke', color], ['stroke-width', wrapValue(width)])
      return output
    }
    info._translate = (...params) => {
      const output = { declarations: [], extra_styles: [], animations: [], keyframesByName: {} }
      const { x, y, z } = smartParams(params)
      Object.entries({ x, y, z }).forEach(([dimension, value]) => {
        isPresent(value) && output.declarations.push([`--${TRANSLATE}-${dimension}`, wrapValue(value)])
      })
      return output
    }
    info._rotate = (...params) => {
      const output = { declarations: [], extra_styles: [], animations: [], keyframesByName: {} }
      const { x } = smartParams(params)
      Object.entries({ x }).forEach(([dimension, value]) => {
        isPresent(value) && output.declarations.push([`--${ROTATE}-${dimension}`, wrapValue(value)])
      })
      return output
    }
    info._skew = (...params) => {
      const output = { declarations: [], extra_styles: [], animations: [], keyframesByName: {} }
      const { x, y } = smartParams(params)
      Object.entries({ x, y }).forEach(([dimension, value]) => {
        isPresent(value) && output.declarations.push([`--${SKEW}-${dimension}`, wrapValue(value)])
      })
      return output
    }
    info._scale = (...params) => {
      const output = { declarations: [], extra_styles: [], animations: [], keyframesByName: {} }
      const { x, y } = smartParams(params)
      Object.entries({ x, y }).forEach(([dimension, value]) => {
        isPresent(value) && output.declarations.push([`--${SCALE}-${dimension}`, wrapValue(value)])
      })
      return output
    }
    info._animate = ({ name, duration, begin, iterations = 1, easing, fill }) => {
      const output = { declarations: [], extra_styles: [], animations: [], keyframesByName: {} }
      const keyframe_name = (name || 'keyframe_name_placeholder') + '_' + String(counter++)
      output.animations.push(`${keyframe_name} ${duration}s ${begin}s ${iterations} ${easing} ${fill}`)
      const matched = name.match(/^([^_]+)(?:_from_(.*?))?(?:_to_(.*?))?$/)
      assert(matched, 'Fail to parse keyframe', keyframe_name)
      const [_, attribute, from, to] = matched
      assert(dynamic_methods.includes(attribute), 'Unrecognized keyframe attribute', attribute)
      const isTransform = ['translate', 'rotate', 'skew', 'scale'].includes(attribute)
      console.log(attribute)
      output.keyframesByName[keyframe_name] = Object.fromEntries(Object.entries({ from, to }).map(([keyframe, string]) => {
        if (!string) return []
        const params = string.split('_').map(param => param.replace(/p$/, '%')).map(param => param === '*' ? undefined : param)
        const declarations = info[`_${attribute}`](...params).declarations
        console.log(params)
        if (isTransform) {
          declarations.unshift(...info.declarations.filter(([property]) => property.startsWith('--')))
        }
        return [keyframe, merge_declarations(declarations)]
      }))
      console.log(output)
      return output
    }
    dynamic_methods.forEach(method => {
      info[method] = (...params) => {
        const { declarations, extra_styles, animations, keyframesByName } = wrap(info[`_${method}`])(...params)
        info.declarations.push(...declarations)
        info.extra_styles.push(...extra_styles)
        info.animations.push(...animations)
        Object.assign(info.keyframesByName, keyframesByName)
        return info
      }
    })
    const proxy = new Proxy(info, {
      get: (target, propKey) => {
        if (['before', 'after'].includes(propKey)) {
          console.log(`getting ${propKey}`)
          return regist(element, propKey, `${selector}:${propKey}`)
        }
        return Reflect.get(target, propKey)
      }
    })

    registry.get(element).set(pseudo, proxy)
  }

  return registry.get(element).get(pseudo)
}

const s = (frags, ...values) => {
  const selectorString = frags.map(
    (frag, index) => index === 0 ? frag : [values[index - 1], frag],
  ).flat().join('')
  const [_, selector, pseudo = 'self'] = selectorString.match(/^(.*?):?(before|after)?$/)
  const elements = document.querySelectorAll(selector)
  assert(elements.length, 'Cannot find element', selector, pseudo)
  if (elements.length === 1) {
    return regist(elements[0], pseudo, selector)
  } else {
    const proxy = Array.from(elements).map((element, index, array) => {
      element.dataset.index = index
      return regist(element, pseudo, `${selector}[data-index="${index}"]`, index, array)
    })
    dynamic_methods.forEach(method => {
      proxy[method] = (...params) => {
        proxy.forEach(ele => ele[method](...params))
        return proxy
      }
    })
    return proxy
  }
}

/*  DSL begin  */
s`#app`.align(LEFT, BOTTOM).size(FULL, FULL)
s`#app`.align_children(CENTER, CENTER)
s`#app > .box`.size(50, 50).fill('#6666ff').stroke('lightblue')
s`#app > .box`.translate((index) => [index * 10])
s`#app > .box`.translate((index) => ({ y: 20 * index }))
s`#app > .box`.animate((index) => ({
  name: 'scale_from_0_0_to_1_1',
  easing: 'ease-out',
  begin: index * 0.2 + 1,
  duration: dur_line,
  iterations: 1,
  fill: 'both',
}))

s`.line-container`.align(40, 40, 40, 40)
s`.line`[0].align(TOP, LEFT, RIGHT).size({height: 8})
  .fill('#D9D7F1').css([['overflow', 'hidden']])
s`.line:nth-child(1):before`.align(TOP, BOTTOM, LEFT, RIGHT)
s`.line`[0].before.fill('white')
s`.line`[0].before.animate({
  name: 'translate_to_100p',
  easing: 'ease-out',
  begin: 1,
  duration: 0.8,
  fill: 'both',
})
/*  DSL end    */

style = document.createElement('style')
style.type = 'text/css'
style.appendChild(document.createTextNode(`
  #app, #app * {
    display: flex;
  }
  ${Array.from(registry.values()).map(map => Array.from(map.entries())).flat().map(([pseudo, {
      selector,
      declarations,
      extra_styles,
      keyframesByName,
      animations,
    }]) => `
  ${Object.entries(keyframesByName).map(([name, keyframes]) => `
  @keyframes ${name} {
    ${Object.entries(keyframes).map(
      ([offset, declarations]) => declarations ? `${offset} {\n${declarations}\n}` : ''
    ).join('\n')}
  }
  `)}
  ${selector}${pseudo === 'self' ? '' : `:${pseudo}`} {
    ${merge_declarations(declarations)}
    animation: ${animations.join(',')};
  }
  ${extra_styles}
  `,
  ).join('\n')}`,
))

document.head.appendChild(style)
