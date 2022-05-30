appendScene(APP, 's0', `
  <div class="bg"></div>
  <div class="text-box" style="font-family: Yuruka, sans-serif; font-size: 5rem; color: var(--red); letter-spacing: 1.2rem;">
    <svg viewBox="0 0 58.54 58.54" style="margin-right: 5.53rem; height: 3.65rem; width: 3.65rem; fill: var(--red);">
      <circle cx="29.27" cy="29.27" r="29.27"/>
    </svg>
    <span>L</span>
    <span>O</span>
    <span>A</span>
    <span>D</span>
    <span>I</span>
    <span>N</span>
    <span>G</span>
    <svg viewBox="0 0 58.54 58.54" style="margin-left: 5.53rem; height: 3.65rem; width: 3.65rem; fill: var(--red);">
      <circle cx="29.27" cy="29.27" r="29.27"/>
    </svg>
  </div>
  <div class="hat-box">
    <img src="r/0-2.svg" />
    <img src="r/0-2.svg" style="margin-left: 3rem" />
    <img src="r/0-2.svg" style="margin-left: 3rem" />
  </div>
  <div class="frame-top"></div>
  <div class="frame-bottom"></div>
`)

const s0_begin = 0.5 - GLOBAL_BEGIN
s`body`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER).fill('#666')
s`#asaki-bd-2022`.css([['overflow', 'hidden']]).fill(WHITE)
s`.s0 .bg`.align(TOP, LEFT).size('200%', '200%').css({ background: 'url("r/0-1.svg") left top/18rem' })
          .animate(FADE_IN, { begin: s0_begin, dur: 0.5, fill: 'both', easing: '<' })
          .animate('translate_from_-18rem_0rem_to_0rem_-18rem', { begin: s0_begin, dur: 5, fill: 'both', easing: '-', iterations: 'infinite' })
s`.s0 .hat-box`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
s`.s0 .hat-box img`.size({ height: '5rem' }).origin('50%', '90%')
                   .animate((index) => ([[{ opacity: 0, scale: [0, 0] }, { scale: [1.1, 1.15], offset: 0.85 }, { opacity: 1, scale: [1, 1] }], { begin: s0_begin + 0.5 + index * 0.5, dur: 0.3, fill: 'both', easing: '>' }, `s0_hat_${index}_appear`]))
s`.s0 .hat-box img`[2].animate(
  [{ rotate: 0 }, { rotate: 180 * 0.1089, offset: 0.12 }, { rotate: 180 * 0.4356, offset: 0.24 }, { rotate: 180 * 0.9801, offset: 0.36 }, { rotate: 180 * 0.7502, offset: 0.54 }, { rotate: 180 * 0.9837, offset: 0.74 }, { rotate: 180 * 0.9375, offset: 0.82 }, { rotate: 180 * 0.9934, offset: 0.92 }, { rotate: 180 }],
  { begin: a.s0_hat_2_appear.end + 0.7, keep: Infinity, dur: 0.9, easing: '>' }, 's0_hat_2_drop',
)
s`.s0 .hat-box img`.animate((index) => ([[{ opacity: 1, translate_y: '0rem' }, { opacity: 0, translate_y: '-5rem' }], { begin: a.s0_hat_2_drop.end + 0 + index * 0.1, dur: 0.2, fill: 'forwards', easing: '>' }, `s0_hat_${index}_disappear`]))
s`.s0 .text-box`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
s`.s0 .text-box > *`.animate((index) => ([[{ opacity: 0, translate_y: '5rem' }, { translate_y: '-2rem', offset: 0.4 }, { opacity: 1, translate_y: '0rem' }], { begin: a.s0_hat_2_drop.end - 0.1 + index * 0.07, dur: 0.8, fill: 'both', easing: '>' }, `s0_text_${index}_appear`]))
s`.s0 .frame-top`.align(LEFT, TOP).size('200%', '5rem')
                 .animate([{ translate_y: '-5rem' }, { translate_y: '0rem', offset: 0.7 }, { translate_y: '-0.3rem' }], { begin: s0_begin, dur: 0.3, fill: 'both', easing: '<>' }, 's0_frame_top_y')
                 .after.align(TOP, BOTTOM, LEFT, RIGHT).css({ background: 'url("r/0-0.svg") 0 1px' })
                 .animate('translate_from_0rem_to_-75rem', { begin: s0_begin, dur: 20, fill: 'both', easing: '-', iterations: 'infinite' })
s`.s0 .frame-bottom`.align(RIGHT, BOTTOM).size('200%', '5rem')
                    .animate([{ translate_y: '5rem' }, { translate_y: '0rem', offset: 0.7 }, { translate_y: '0.3rem' }], { begin: a.s0_frame_top_y.begin, dur: a.s0_frame_top_y.dur, fill: 'both', easing: '<>' })
                    .after.align(TOP, BOTTOM, LEFT, RIGHT).css({ background: 'url("r/0-0.svg") 0 1px' }).rotate(180)
                    .animate('translate_from_0rem_to_75rem', { begin: s0_begin, dur: 20, fill: 'both', easing: '-', iterations: 'infinite' })
const s0_end = a.s0_text_8_appear.end + 0.6
console.log(s0_end)
