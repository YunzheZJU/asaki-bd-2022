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
const a = {}

const isBlank = value => value === undefined || value === null

const isPresent = value => !isBlank(value)

const isArray = value => value instanceof Array

const isPlainObject = value => {
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false
  }

  const prototype = Object.getPrototypeOf(value)
  return prototype === null || prototype === Object.prototype
}

const isEven = number => number % 2 === 0

const isOdd = number => number % 2 === 1

Array.prototype.difference = function (other) {
  return this.filter(item => !other.includes(item))
}

Array.prototype.intersection = function (other) {
  return this.difference(this.difference(other))
}

Array.prototype.even = function () {
  return this.filter((_, index) => index % 2 === 1)
}

Array.prototype.odd = function () {
  return this.filter((_, index) => index % 2 === 0)
}

const num2str = number => number.toPrecision(4).replace(/(\.)([^0]*)0*$/, (_, p1, p2) => p2 ? p1 + p2 : '')

const assert = (trusy, message, ...objs) => {
  if (!trusy) {
    alert(`${message}\n${objs.map(JSON.stringify).join('\n')}`)
    debugger
  }
}

const wrapValue = (value, unit = 'rem') => {
  if (typeof value === 'number') {
    return value.toString() + unit
  }
  if (typeof value === 'string') {
    return value.replace(/p$/, '%')
  }
  return value
}

const fillOffset = (keyframes) => {
  keyframes = [...keyframes]
  let end_offset_value = 1
  let end_offset_index = keyframes.length - 1
  keyframes.forEach((_, _index) => {
    const index = keyframes.length - 1 - _index
    const keyframe = keyframes[index]
    if (isPresent(keyframe.offset)) {
      end_offset_value = keyframe.offset
      end_offset_index = index
    } else {
      if (index === keyframes.length - 1) keyframe.offset = 1
      if (index === 0) keyframe.offset = 0
    }
    keyframe.end_offset = { value: end_offset_value, index: end_offset_index } // Count
  })
  let begin_offset_value = 0
  let begin_offset_index = 0
  keyframes.forEach((keyframe, index) => {
    if (isPresent(keyframe.offset)) {
      begin_offset_value = keyframe.offset
      begin_offset_index = index
    } else {
      keyframe.offset = (keyframe.end_offset.value - begin_offset_value) / (keyframe.end_offset.index - begin_offset_index) * (index - begin_offset_index) + begin_offset_value
    }
    delete keyframe.end_offset
  })
  return keyframes
}

const smartParams = (params, value_on_hit_key) => {
  const allocation = []
  return new Proxy(params, {
    has(target, p) {
      return true
    },
    get: function (target, propKey) {
      const firstParam = Reflect.get(target, 0)
      if (Reflect.get(target, 'length') === 1 && isPlainObject(firstParam)) return firstParam[propKey]
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
  'css', 'align', 'align_children', 'size', 'fill', 'stroke', 'round', 'opacity', 'clip', 'perspective', 'origin', 'translate', 'rotate', 'skew', 'scale', 'animate',
  'translate_x', 'translate_y', 'translate_z', 'rotate_z', 'rotate_x', 'rotate_y', 'skew_x', 'skew_y', 'scale_x', 'scale_y',
]

const merge_declarations = (declarations) => {
  const valueByProterty = Object.fromEntries(declarations)
  const transform = Array.from([
    '--translate-x', '--translate-y', '--translate-z', '--rotate-z', '--rotate-x', '--rotate-y', '--skew-x', '--skew-y', '--scale-x', '--scale-y',
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
    const info = {
      element,
      selector,
      declarations: [],
      extra_styles: [],
      animations: [],
      keyframesByName: {},
    }

    if (['before', 'after'].includes(pseudo)) {
      info.declarations.push(['content', '\'\''])
    }
    info._css = (declarations) => {
      const output = { declarations: [], extra_styles: [], animations: [], keyframesByName: {} }
      const dcl = isArray(declarations) ? declarations : Object.entries(declarations)
      output.declarations.push(...dcl)
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
        if (sidesSpecified.intersection([TOP, BOTTOM]).length === 0) {
          sidesSpecified.push(TOP)
          return output.declarations.push(['align-items', 'center'])
        }
        if (sidesSpecified.intersection([LEFT, RIGHT]).length === 0) {
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
    info._round = (...params) => {
      const output = { declarations: [], extra_styles: [], animations: [], keyframesByName: {} }
      const { radius = '999px' } = smartParams(params)
      output.declarations.push(['border-radius', wrapValue(radius)])
      return output
    }
    info._opacity = (...params) => {
      const output = { declarations: [], extra_styles: [], animations: [], keyframesByName: {} }
      const { opacity } = smartParams(params)
      output.declarations.push(['opacity', wrapValue(opacity, '')])
      return output
    }
    info._clip = (...params) => {
      const output = { declarations: [], extra_styles: [], animations: [], keyframesByName: {} }
      const { clip } = smartParams(params)
      output.declarations.push(['clip-path', clip])
      return output
    }
    info._perspective = (...params) => {
      const output = { declarations: [], extra_styles: [], animations: [], keyframesByName: {} }
      const { perspective } = smartParams(params)
      output.declarations.push(['perspective', wrapValue(perspective)])
      return output
    }
    info._origin = (...params) => {
      const output = { declarations: [], extra_styles: [], animations: [], keyframesByName: {} }
      let originBySideEntries
      if (typeof params[0] === 'object') {
        originBySideEntries = Object.entries(params[0])
      } else {
        originBySideEntries = params.map(side => [side, true])
      }
      assert(originBySideEntries.length <= 2, 'Too many params are specified when setting transform origin', params)

      const sidesSpecified = originBySideEntries.map(([side]) => side)
      // const { top, right, bottom, left } = smartParams(params, true)
      // const origin = Object.entries({ top, right, bottom, left }).filter(([_, boolean]) => boolean).map(([dimension]) => dimension).join(' ')
      output.declarations.push(['transform-origin', sidesSpecified.join(' ')])
      return output
    }
    Object.entries({
      [TRANSLATE]: { dimensions: ['x', 'y', 'z'], unit: 'rem' },
      [ROTATE]: { dimensions: ['z', 'x', 'y'], unit: 'deg' },
      [SKEW]: { dimensions: ['x', 'y'], unit: 'px' },
      [SCALE]: { dimensions: ['x', 'y'], unit: '' },
    }).map(([func, { dimensions, unit }]) => {
      info[`_${func}`] = (...params) => {
        const output = { declarations: [], extra_styles: [], animations: [], keyframesByName: {} }
        const sParams = smartParams(params)
        dimensions.forEach(dimension => {
          const value = sParams[dimension]
          isPresent(value) && output.declarations.push([`--${func}-${dimension}`, wrapValue(value, unit)])
        })
        return output
      }
      dimensions.forEach(dimension => {
        info[`_${func}_${dimension}`] = (...params) => info[`_${func}`]({ [dimension]: smartParams(params)[dimension] })
      })
    })
    const makeKeyframe = (obj) => {
      Object.keys(obj).forEach(key => {
        assert(dynamic_methods.includes(key), 'Unrecognized keyframe attribute', key)
      })
      const declarations = Object.entries(obj).flatMap(([attribute, params]) => info[`_${attribute}`](...[params].flat()).declarations)
      const needTransform = Object.keys(obj).some(key => ['translate', 'rotate', 'skew', 'scale'].some(name => key.startsWith(name)))
      if (needTransform) {
        declarations.unshift(...info.declarations.filter(([property]) => property.startsWith('--')))
      }
      return declarations
    }
    info._animate = (...params) => {
      const output = { declarations: [], extra_styles: [], animations: [], keyframesByName: {} }
      const {
        keyframes: _keyframes,
        options: { dur, begin, keep, iterations = 1, easing: _easing = 'ease', fill: _fill } = {},
        tag,
      } = smartParams(params)
      const fill = (() => {
        if (_fill) return _fill
        if (keep === Infinity) return 'forwards'
        return 'none'
      })()
      const easing = {
        '<': 'ease-in',
        '>': 'ease-out',
        '<>': 'ease-in-out',
        '-': 'linear',
      }[_easing] || _easing

      let keyframes, name
      if (typeof _keyframes === 'string') {
        const matched = _keyframes.match(/^(.*?)(?:_from_(.*?))?(?:_to_(.*?))?$/)
        assert(matched, 'Fail to parse keyframe', _keyframes)
        const [_, attribute, from, to] = matched
        name = [_keyframes, String(counter++)].join('_')
        keyframes = [from, to].map((param_string) => ({ [attribute]: param_string.split('_') }))
      } else if (isArray(_keyframes)) {
        keyframes = _keyframes
        name = ['keyframes', 'in', 'array', String(counter++)].join('_')
      } else if (isPlainObject(_keyframes)) {
        assert(Object.keys(_keyframes).length === 1, 'Too many attributes', _keyframes)
        const attribute = Object.keys(_keyframes)[0]
        keyframes = Object.values(_keyframes)[0].map(param => ({ [attribute]: param }))
        name = ['keyframes', 'in', 'object', String(counter++)].join('_')
      }
      keyframes = fillOffset(keyframes)
      output.keyframesByName[name] = Object.fromEntries(keyframes.map(({ offset, ...keyframe }) => {
        return [offset, merge_declarations(makeKeyframe(keyframe))]
      }))
      const animation = { name, dur, begin, iterations, easing, fill, end: begin + dur }
      if (tag) a[tag] = animation
      output.animations.push(animation)

      if (isPresent(keep) && ![0, Infinity].includes(keep)) {
        const declarations_to = merge_declarations(keyframes.flatMap(({ offset, ...keyframe }) => {
          return makeKeyframe(keyframe)
        }))
        const name_keep = name + '_keep'
        output.keyframesByName[name_keep] = { 0: declarations_to, 1: declarations_to }
        const animation_keep = {
          name: name_keep,
          dur: keep,
          begin: animation.end,
          iterations: 1,
          easing: 'linear',
          fill: 'none',
          end: animation.end + keep,
        }
        output.animations.push(animation_keep)
      }
      return output
    }
    const proxy = new Proxy(info, {
      get: (target, propKey) => {
        if (['before', 'after', 'self'].includes(propKey)) {
          return regist(element, propKey, selector)
        }
        return Reflect.get(target, propKey)
      },
    })
    dynamic_methods.forEach(method => {
      info[method] = (...params) => {
        const {
          declarations,
          extra_styles,
          animations,
          keyframesByName,
        } = wrap(info[`_${method}`])(...params)
        info.declarations.push(...declarations)
        info.extra_styles.push(...extra_styles)
        info.animations.push(...animations)
        Object.assign(info.keyframesByName, keyframesByName)
        return proxy
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
