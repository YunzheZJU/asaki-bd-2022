appendScene(APP, 's14', `
  <div class="bg">
    <div style="color: var(--purple);"></div>
    <div style="color: var(--green);"></div>
    <div style="color: var(--white);"></div>
    <div style="color: var(--red);"></div>
  </div>
  <div class="text-box-1" style="color: var(--white); font-size: 5rem; text-shadow: 0 0 5px rgba(255, 255, 255, 0.75); letter-spacing: 1rem;">
    <span>ど</span>
    <span>こ</span>
    <span>ま</span>
    <span>で</span>
    <span>も</span>
  </div>
  <div class="text-box-2" style="color: var(--white); font-size: 5rem; text-shadow: 0 0 5px rgba(255, 255, 255, 0.75); letter-spacing: 1rem;">
    <span>君</span>
    <span>の</span>
    <span>元</span>
    <span>へ</span>
  </div>
  <div class="text-box-3" style="color: var(--white); font-size: 5rem; text-shadow: 0 0 5px rgba(255, 255, 255, 0.75); letter-spacing: 1rem;">
    <span>届</span>
    <span>く</span>
    <span>よ</span>
    <span>う</span>
    <span>に</span>
  </div>
  <div class="hat">
    <svg viewBox="0 0 85.681 61.182" preserveAspectRatio="xMinYMin slice">
      <use xlink:href="#hat" width="85" />
    </svg>
  </div>
`)

const s14_begin = s13_end
s`.s14`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
s`.s14 .bg`.align(TOP, BOTTOM, LEFT, RIGHT)
s`.s14 .bg div`.align(TOP, BOTTOM, LEFT, RIGHT).fill('currentColor')
               .animate(index => [[{ translate_y: '-100p' }, { css: { 'border-radius': '0 0 16rem 16rem' }, offset: 0.5 }, { translate_y: '0p', css: { 'border-radius': '0 0 0 0' } }], { begin: s14_begin + index * 0.15, dur: 1.0, fill: 'both', easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }, `s14_bg_in`])
s`.s14 .bg div`[3].after.align(TOP, BOTTOM, LEFT, RIGHT).opacity(0.25).css({ background: 'url("r/6-1.svg") left top/8.3125rem 9.3125rem' })
s`.s14 .text-box-1`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
s`.s14 .text-box-1 span`.animate(index => [{ translate_y: [-4, 0], opacity: [0, 1] }, { begin: a.s14_bg_in.end - 0.9 + index * 0.06, dur: 0.6, fill: 'both', easing: '>' }, 's14_text_box_1_in'])
s`.s14 .hat`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
s`.s14 .hat svg`.align().size(135).css({ stroke: WHITE, 'stroke-width': '0.5', 'stroke-linejoin': 'round', fill: 'var(--blue)' }).translate('35p', 2)
                .animate({ translate_x: ['-35p', '35p'], opacity: [0, 1] }, { begin: a.s14_text_box_1_in.end, dur: 1.2, fill: 'both', easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }, 's14_hat_in_1')
s`.s14 .text-box-1`.animate(FADE_OUT, { begin: a.s14_hat_in_1.begin + 0.1, dur: 0, fill: 'both' })
s`.s14 .text-box-2`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER).translate_x(-30)
s`.s14 .text-box-2 span`.animate(index => [{ translate_x: [4, 0], opacity: [0, 1] }, { begin: a.s14_hat_in_1.begin + 0.1 + index * 0.06, dur: 0.6, fill: 'both', easing: '>' }, 's14_text_box_2_in'])
s`.s14 .hat svg`.animate({ translate_x: ['35p', '-43p'], css: [{fill: 'var(--blue)'}, {fill: 'var(--red)'}] }, { begin: a.s14_text_box_2_in.end + 0.2, dur: 1.2, fill: 'forwards', easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }, 's14_hat_in_2')
s`.s14 .text-box-2`.animate(FADE_OUT, { begin: a.s14_hat_in_2.end - 0.85, dur: 0, fill: 'forwards' })
s`.s14 .text-box-3`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER).translate_x(30)
s`.s14 .text-box-3 span`.animate(index => [{ translate_x: [-4, 0], opacity: [0, 1] }, { begin: a.s14_hat_in_2.begin + 0.1 + index * 0.06, dur: 0.6, fill: 'both', easing: '>' }, 's14_text_box_3_in'])
s`.s14 .bg div`[3].before.align(TOP, BOTTOM, LEFT, RIGHT).fill(BLUE).animate('translate_x_from_100p_to_0p', {begin: a.s14_hat_in_2.begin, dur: a.s14_hat_in_2.dur, fill: 'both', easing: a.s14_hat_in_2.easing})
const s14_end = a.s14_text_box_3_in.end
console.log(s14_end)

setTimeout(() => document.querySelector('.s13').style.display = 'none', Math.max(0, Math.ceil(s14_end * 1000)))
