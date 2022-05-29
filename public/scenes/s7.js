appendScene(APP, 's7', `
  <div class="bg-1"></div>
  <div class="bg-shape-1">
    <div class="left"></div>
    <div class="right"></div>
  </div>
  <div class="text-box-1" style="letter-spacing: 0; color: var(--white); text-shadow: 0 0 5px rgba(255, 255, 255, 0.75); font-size: 4.5rem">
    <span>久</span>
    <span>し</span>
    <span>ぶ</span>
    <span>り</span>
    <span>に</span>
    <span>手</span>
    <span>を</span>
  </div>
  <div class="text-box-1-rfl" style="letter-spacing: 0; color: var(--white); text-shadow: 0 0 5px rgba(255, 255, 255, 0.75); font-size: 4.5rem">
    <span>久</span>
    <span>し</span>
    <span>ぶ</span>
    <span>り</span>
    <span>に</span>
    <span>手</span>
    <span>を</span>
  </div>
  <div class="bg-2"></div>
  <div class="bg-shape-2">
    <div class="left"></div>
    <div class="right"></div>
  </div>
  <div class="text-box-2" style="letter-spacing: 0; color: var(--white); text-shadow: 0 0 5px rgba(255, 255, 255, 0.75); font-size: 4.5rem">
    <span>伸</span>
    <span>ば</span>
    <span>し</span>
    <span>て</span>
    <span>い</span>
    <span>つ</span>
    <span>か</span>
  </div>
  <div class="text-box-2-rfl" style="letter-spacing: 0; color: var(--white); text-shadow: 0 0 5px rgba(255, 255, 255, 0.75); font-size: 4.5rem">
    <span>伸</span>
    <span>ば</span>
    <span>し</span>
    <span>て</span>
    <span>い</span>
    <span>つ</span>
    <span>か</span>
  </div>
  <div class="mask-box">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="frame" style="font-family: Lyra, serif; font-size: 2.25rem; color: var(--white);">
    <div class="text chapter-ja relative" style="letter-spacing: 0.5rem">第2章</div>
    <div class="text chapter-en relative" style="letter-spacing: 0.5rem">Chapter 2</div>
  </div>
`)

const s7_begin = s6_end + 0.2
s`.s7 .bg-1`.align(TOP, BOTTOM, LEFT, RIGHT).origin(BOTTOM, CENTER).scale(3, 2).rotate(-45).fill(RED)
            .animate('translate_from_210p_to_50p', { begin: s7_begin, dur: 0.2, fill: 'both', easing: '<' }, 's7_bg_1_in')
s`.s7 .frame`.align(4, 4, 4, 4)
             .animate(FADE_IN, { begin: a.s7_bg_1_in.end - 0.1, dur: 0.2, fill: 'both' }, 's5_frame_in')
             .after.align({ [BOTTOM]: -3.2, [RIGHT]: -3.2 }).size(0, 0).stroke('transparent', 3.2).rotate(-45).css({ 'border-top-color': 'var(--white)' })
s`.s7 .frame .chapter-ja`.align(LEFT, TOP)
s`.s7 .frame .chapter-en`.align(RIGHT, TOP)
s`.s7 .mask-box`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
                .animate(FADE_IN, { begin: a.s5_frame_in.begin, dur: 0.2, fill: 'both' }, 's7_mask_box_in_1')
                .animate(FADE_OUT, { begin: a.s7_mask_box_in_1.begin + 1.0, dur: 0, fill: 'forwards' }, 's7_mask_box_out_1')
s`.s7 .mask-box span`.size(4, 4.5).forEach((ele, index) => {
  index !== 0 && ele.css({ 'margin-left': '5rem' })
  ele.before.align(LEFT, RIGHT, TOP, BOTTOM).round(1).fill(WHITE)
     .animate([{ scale: [1, 1] }, { scale: [1, 1.8 + 0.4 * Math.random()] }, { scale: [1, 1] }], { begin: a.s7_mask_box_in_1.begin - 0.1 - 0.1 * index, dur: 0.5, iterations: 'infinite' })
})
s`.s7 .text-box-1`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
                  .animate(FADE_IN, { begin: a.s7_mask_box_out_1.begin, dur: 0, fill: 'both' }, 's7_text_box_1_in')
s`.s7 .text-box-1 span`.size(4, 4.5).forEach((ele, index) => {
  index !== 0 && ele.css({ 'margin-left': '5rem' })
  ele.animate(index => ([[{ opacity: 1, translate_x: 0 }, { opacity: 1 - Math.abs(3 - index) * 0.25, translate_x: (3 - index) * -2 }], { begin: a.s7_text_box_1_in.begin, dur: 1.8, fill: 'both', easing: '>' }, 's7_text_box_1_span_in']))
})
s`.s7 .text-box-1-rfl`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
                  .animate(FADE_IN, { begin: a.s7_mask_box_out_1.begin, dur: 0, fill: 'both' })
s`.s7 .text-box-1-rfl span`.size(4, 4.5).scale(1, -1).translate_y(5).css({'-webkit-mask-image': 'linear-gradient(to top, black, transparent 50%)', 'mask-image': 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)'}).forEach((ele, index) => {
  index !== 0 && ele.css({ 'margin-left': '5rem' })
  ele.animate(index => ([[{ opacity: 1, translate_x: 0 }, { opacity: 1 - Math.abs(3 - index) * 0.25, translate_x: (3 - index) * -2 }], { begin: a.s7_text_box_1_in.begin, dur: 1.8, fill: 'both', easing: '>' }]))
})
s`.s7 .bg-shape-1`.align(LEFT, TOP).size(FULL, FULL)
s`.s7 .bg-shape-1 .left`.align({ [LEFT]: 0, [BOTTOM]: 0 }).size(25, 25).rotate(45).translate(2, 3)
                        .animate([{ opacity: 0, stroke: [BLUE, 8], scale: [0.9, 0.9] }, { opacity: 1, stroke: [BLUE, 0], scale: [1.1, 1.1] }], { begin: a.s7_text_box_1_in.begin - 0.2, dur: 0.7, fill: 'both', easing: '>' })
s`.s7 .bg-shape-1 .right`.align({ [RIGHT]: 0, [TOP]: 0 }).size(30, 30).rotate(45).translate(-4, -4)
                         .animate([{ opacity: 0, stroke: [BLUE, 6], scale: [0.8, 0.8] }, { opacity: 1, stroke: [BLUE, 0], scale: [1.2, 1.2] }], { begin: a.s7_text_box_1_in.begin + 0.35, dur: 0.6, fill: 'both', easing: '>' }, 's7_bg_shape_1_right')
s`.s7 .bg-2`.after.align(TOP, LEFT).size(50, 50).round().translate('-50p', '-50p').fill(BLUE)
            .animate('scale_from_0_0_to_7_7', { begin: a.s7_text_box_1_in.begin + 0.8, dur: 0.2, fill: 'both', easing: '<' }, 's7_bg_2_in')
s`.s7 .mask-box`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
                .animate(FADE_IN, { begin: a.s7_bg_2_in.begin + 0.1, dur: 0.2, fill: 'forwards' }, 's7_mask_box_in_2')
                .animate(FADE_OUT, { begin: a.s7_mask_box_in_2.begin + 1.0, dur: 0, fill: 'forwards' }, 's7_mask_box_out_2')
s`.s7 .text-box-2`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
                  .animate(FADE_IN, { begin: a.s7_mask_box_out_2.begin, dur: 0, fill: 'both' }, 's7_text_box_2_in')
s`.s7 .text-box-2 span`.size(4, 4.5).forEach((ele, index) => {
  index !== 0 && ele.css({ 'margin-left': '5rem' })
  ele.animate(index => ([[{ opacity: 1, translate_x: 0 }, { opacity: 1 - Math.abs(3 - index) * 0.25, translate_x: (3 - index) * -2 }], { begin: a.s7_text_box_2_in.begin, dur: 1.8, fill: 'both', easing: '>' }, 's7_text_box_2_span_in']))
})
s`.s7 .text-box-2-rfl`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
                  .animate(FADE_IN, { begin: a.s7_mask_box_out_2.begin, dur: 0, fill: 'both' })
s`.s7 .text-box-2-rfl span`.size(4, 4.5).scale(1, -1).translate_y(5).css({'-webkit-mask-image': 'linear-gradient(to top, black, transparent 50%)', 'mask-image': 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)'}).forEach((ele, index) => {
  index !== 0 && ele.css({ 'margin-left': '5rem' })
  ele.animate(index => ([[{ opacity: 1, translate_x: 0 }, { opacity: 1 - Math.abs(3 - index) * 0.25, translate_x: (3 - index) * -2 }], { begin: a.s7_text_box_2_in.begin, dur: 1.8, fill: 'both', easing: '>' }]))
})
s`.s7 .bg-shape-2`.align(LEFT, TOP).size(FULL, FULL)
s`.s7 .bg-shape-2 .left`.align({ [LEFT]: 0, [BOTTOM]: 0 }).size(35, 35).round().translate(-6, 2)
                        .animate([{ opacity: 0, stroke: [RED, 5], scale: [0.9, 0.9] }, { opacity: 1, offset: 0.3 }, { opacity: 1, stroke: [RED, 0], scale: [1.3, 1.3] }], { begin: a.s7_text_box_2_in.begin - 0.2, dur: 0.7, fill: 'both', easing: '>' })
s`.s7 .bg-shape-2 .right`.align({ [RIGHT]: 0, [TOP]: 0 }).size(40, 40).round().translate(5, -6)
                         .animate([{ opacity: 0, stroke: [RED, 6], scale: [0.9, 0.9] }, { opacity: 1, offset: 0.5 }, { opacity: 1, stroke: [RED, 0], scale: [1.2, 1.2] }], { begin: a.s7_text_box_2_in.begin + 0.5, dur: 0.7, fill: 'both', easing: '>' }, 's7_bg_shape_2_right')
const s7_end = a.s7_text_box_2_in.begin + 1.1
console.log(s7_end)

setTimeout(() => document.querySelector('.s6').style.display = 'none', Math.max(0, Math.ceil(s7_end * 1000)))
