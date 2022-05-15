style = document.createElement('style')
style.type = 'text/css'
style.appendChild(document.createTextNode(`
  body, body > div, body > div * {
    display: flex;
  }
  body {
    margin: 0;
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
    ${Object.entries(keyframes).sort(([offset_a], [offset_b]) => offset_a - offset_b).map(
      ([offset, declarations]) => declarations ? `${num2str(Number(offset) * 100)}% {\n${declarations}\n}` : ''
    ).join('\n')}
  }
  `).join('\n')}
  ${selector}${pseudo === 'self' ? '' : `:${pseudo}`} {
    ${merge_declarations(declarations)}
    animation: ${[...animations].sort((a, b) => a.begin - b.begin).map(
      ({ name, dur, begin, iterations, easing, fill }) => `${name} ${num2str(dur)}s ${num2str(begin)}s ${iterations} ${easing} ${fill}`
    ).join(', ')};
  }
  ${extra_styles}
  `,
  ).join('\n')}`,
))

document.head.appendChild(style)
