appendScene(APP, 's4', `
  <div class="bg">
    <div class="red" style="color: var(--red)"></div>
    <div class="blue" style="color: var(--blue)"></div>
    <div class="left" style="color: var(--red)"></div>
    <div class="right" style="color: var(--blue)"></div>
  </div>
  <div class="text-box" style="color: var(--black); writing-mode: vertical-lr;">
    <div class="top">
      <span>夢</span>
      <span>中</span>
      <span>に</span>
    </div>
    <div class="bottom">
      <span>な</span>
      <span>っ</span>
      <span>て</span>
      <span>い</span>
      <span>た</span>
      <span>よ</span>
    </div>
  </div>
  <div class="frame">
    <div class="left" style="color: var(--black); font-size: 1.6875rem; writing-mode: vertical-lr;">
      <span>ASAKI</span>
    </div>
    <div class="right" style="color: var(--black); font-size: 1.6875rem;">
      <span>0604</span>
    </div>
  </div>
`)

const s4_begin = s3_end
s`.s4`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
s`.s4 .bg`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
s`.s4 .bg .red`.align().size(150, 150).round().fill('currentColor')
               .animate('scale_from_0_0_to_1_1', { begin: s4_begin + 0.1, dur: 0.35, fill: 'backwards', easing: '<' }, 's4_bg_red_in')
s`.s4 .bg .blue`.align().size(150, 150).round().fill('currentColor')
                .animate('scale_from_0_0_to_1_1', { begin: a.s4_bg_red_in.begin + 0.25, dur: a.s4_bg_red_in.dur, fill: 'backwards', easing: '<' }, 's4_bg_blue_in')
                .animate(FADE_OUT, { begin: a.s4_bg_blue_in.end, dur: 0, fill: 'both' }, 's4_bg_blue_out')
s`.s4 .bg .red`.animate(FADE_OUT, { begin: a.s4_bg_blue_out.begin + 0.3, dur: 0, fill: 'both' }, 's4_bg_red_out')
s`.s4 .bg .right`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
                 .animate('translate_from_-5p_5p_to_0p_0p', { begin: a.s4_bg_blue_out.begin + 0.3, dur: 0.6, easing: 'cubic-bezier(0, 0.55, 0.45, 1)', fill: 'both' })
                 .before.align().size(29, 29).round().fill('currentColor').origin('60%', '40%').translate(41, -16)
                 .animate(FADE_IN, { begin: a.s4_bg_blue_out.begin, dur: 0, fill: 'both' }, 's4_bg_right_in')
                 .animate('scale_from_8_8_to_1_1', { begin: a.s4_bg_right_in.begin + 0.2, dur: 0.7, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'both' }, 's4_bg_right_scale')
                 .after.align().size(25, 25).round().fill(WHITE).origin('150%', '-50%').translate(32, -10)
                 .animate(FADE_IN, { begin: a.s4_bg_right_scale.end - 0.55, dur: 0.1, fill: 'both' }, 's4_bg_right_mask_in')
                 .animate([{ scale: [0.4, 0.4], rotate: 120 }, { scale: [1, 1], rotate: 0 }], { begin: a.s4_bg_right_mask_in.begin, dur: 2, fill: 'both', easing: 'cubic-bezier(0, 0.55, 0.45, 1)' }, 's4_bg_right_mask_rotate')
s`.s4 .bg .left`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
                .before.align().size(36, 36).round().fill('currentColor').translate(-44, 17)
                .animate(FADE_IN, { begin: a.s4_bg_red_out.begin, dur: 0, fill: 'both' }, 's4_bg_left_in')
                .animate('scale_from_8_8_to_1_1', { begin: a.s4_bg_left_in.begin + 0.1, dur: 0.9, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'both' }, 's4_bg_left_scale')
                .after.align().size(25, 25).round().fill(WHITE).origin('-50%', '150%').translate(-34, 7)
                .animate(FADE_IN, { begin: a.s4_bg_left_scale.end - 0.65, dur: 0.1, fill: 'both' }, 's4_bg_left_mask_in')
                .animate([{ scale: [0.4, 0.4], rotate: 90 }, { scale: [1, 1], rotate: 0 }], { begin: a.s4_bg_left_mask_in.begin, dur: 2.1, fill: 'both', easing: 'cubic-bezier(0, 0.55, 0.45, 1)' }, 's4_bg_left_mask_rotate')
s`.s4 .bg`.animate({ scale: [[1, 1], [1.1, 1.1]] }, { begin: a.s4_bg_left_mask_in.end, dur: 2, fill: 'both', easing: '>' })
s`.s4 .text-box`.css({ overflow: 'hidden' }).animate(FADE_IN, { begin: a.s4_bg_left_mask_in.end, dur: 0, fill: 'both' }, 's4_text_box_in')
s`.s4 .text-box .top`.css({ position: 'relative', padding: '1rem 1rem 0.25rem 1rem' })
                     .animate('translate_x_from_-100p_to_0p', { begin: a.s4_text_box_in.begin, dur: 1.4, easing: '>', fill: 'both' })
                     .after.align(TOP, BOTTOM, LEFT, RIGHT).fill(BLACK)
                     .animate('translate_x_from_-105p_to_105p', { begin: a.s4_text_box_in.begin, dur: 1, easing: '<>', fill: 'both' }, 's4_text_box_top_mask_in')
                     .before.align(TOP, BOTTOM, LEFT, RIGHT).fill(WHITE)
                     .animate('translate_x_from_0p_to_105p', { begin: a.s4_text_box_top_mask_in.begin + a.s4_text_box_top_mask_in.dur * 0.5, dur: a.s4_text_box_top_mask_in.dur * 0.5, easing: '>', fill: 'both' }, 's4_text_box_top_mask_out')
s`.s4 .text-box .bottom`.css({ position: 'relative', padding: '0.25rem 1rem 1rem 1rem' })
                        .animate('translate_x_from_100p_to_0p', { begin: a.s4_text_box_top_mask_in.begin, dur: 1.4, easing: '>', fill: 'both' })
                        .after.align(TOP, BOTTOM, LEFT, RIGHT).fill(BLACK)
                        .animate('translate_x_from_105p_to_-105p', { begin: a.s4_text_box_top_mask_in.begin + 0.2, dur: a.s4_text_box_top_mask_in.dur, easing: '<>', fill: 'both' }, 's4_text_box_bottom_mask_in')
                        .before.align(TOP, BOTTOM, LEFT, RIGHT).fill(WHITE)
                        .animate('translate_x_from_0p_to_-105p', { begin: a.s4_text_box_bottom_mask_in.begin + a.s4_text_box_bottom_mask_in.dur * 0.5, dur: a.s4_text_box_bottom_mask_in.dur * 0.5, easing: '>', fill: 'both' }, 's4_text_box_bottom_mask_out')
s`.s4 .frame`.align(4, 4, 4, 4).stroke(BLACK, 0.25).stroke(BLACK, 'max(2px, 0.25rem)')
             .animate([{ scale: [1.05, 1.05], opacity: 0 }, { scale: [1, 1], opacity: 1 }], { begin: a.s4_bg_left_scale.begin + 0.4, dur: 1.6, fill: 'both', easing: '>' }, 's4_frame_in')
             .before.align({ [TOP]: -2, [LEFT]: -2 }).size(0, 0).stroke('transparent', 3.2).rotate(-45).css({ 'border-bottom-color': 'var(--black)' })
             .after.align({ [BOTTOM]: -2, [RIGHT]: -2 }).size(0, 0).stroke('transparent', 3.2).rotate(-45).css({ 'border-top-color': 'var(--black)' })
s`.s4 .frame .left`.align(TOP, LEFT).translate(1.1, 6.2).css({ overflow: 'hidden' })
s`.s4 .frame .left span`.animate('translate_x_from_-100p_to_0p', { begin: a.s4_frame_in.end - 0.8, dur: 0.8, fill: 'both' })
s`.s4 .frame .right`.align(BOTTOM, RIGHT).translate(-6.2, -1.1).css({ overflow: 'hidden' })
s`.s4 .frame .right span`.animate('translate_y_from_100p_to_0p', { begin: a.s4_frame_in.end - 0.6, dur: 0.8, fill: 'both' })
const s4_end = a.s4_frame_in.end
console.log(s4_end)

setTimeout(() => document.querySelector('.s3').style.display = 'none', Math.max(0, Math.ceil(s4_end * 1000)))
