appendScene(APP, 's13', `
  <div class="bg">
    <div style="color: var(--green);"></div>
    <div style="color: var(--yellow);"></div>
    <div style="color: var(--white);"></div>
    <div style="color: var(--blue);"></div>
  </div>
  <div class="text-box" style="color: var(--white); font-size: 5rem; text-shadow: 0 0 5px rgba(255, 255, 255, 0.75); letter-spacing: 1rem;">
    <span>こ</span>
    <span>れ</span>
    <span>か</span>
    <span>ら</span>
    <span>も</span>
  </div>
`)

const s13_begin = s12_end
s`.s13 .bg`.align(TOP, BOTTOM, LEFT, RIGHT)
s`.s13 .bg div`.align(TOP, BOTTOM, LEFT, RIGHT).fill('currentColor')
               .animate(index => [[{ translate_y: '100p' }, { css: { 'border-radius': '16rem 16rem 0 0' }, offset: 0.5 }, { translate_y: '0p', css: { 'border-radius': '0 0 0 0' } }], { begin: s13_begin + index * 0.15, dur: 1.0, fill: 'both', easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }, `s13_bg_in`])
s`.s13 .bg div`[3].after.align(TOP, BOTTOM, LEFT, RIGHT).opacity(0.25).css({ background: 'url("r/6-1.svg") currentColor left top/8.3125rem 9.3125rem' })
s`.s13 .text-box`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
s`.s13 .text-box span`.animate(index => [{translate_y: [4, 0], opacity: [0, 1]}, {begin: a.s13_bg_in.end - 0.9 + index * 0.06, dur: 0.6, fill: 'both', easing: '>'}, 's13_text_box_in'])
const s13_end = a.s13_text_box_in.end
console.log(s13_end)

setTimeout(() => document.querySelector('.s12').style.display = 'none', Math.max(0, Math.ceil(s13_end * 1000)))
