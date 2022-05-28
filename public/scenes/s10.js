APP.innerHTML += `
  <div class="s10">
    <div class="bg"></div>
    <div class="sakura">
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
      <div><img src="r/10-0.svg" /></div>
    </div>
    <div class="bg-shape">
      <div class="left"><img src="r/10-0.svg" /></div>
      <div class="right"><img src="r/10-0.svg" /></div>
      <div class="center"></div>
    </div>
    <div class="text-box" style="color: var(--black); writing-mode: vertical-lr;">
      <div class="top">
        <span>聴</span>
        <span>こ</span>
        <span>え</span>
        <span>る</span>
      </div>
      <div class="bottom">
        <span>の</span>
        <span>だ</span>
        <span>ろ</span>
        <span>う</span>
      </div>
    </div>
    <div class="frame">
      <div class="border-x"></div>
      <div class="border-y"></div>
      <div class="left" style="color: var(--black); font-size: 1.6875rem; writing-mode: vertical-lr;">
        <span>ASAKI</span>
      </div>
      <div class="right" style="color: var(--black); font-size: 1.6875rem;">
        <span>0604</span>
      </div>
    </div>
  </div>
`
const s10_begin = s9_end - 0.3
s`.s10`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
s`.s10 .sakura`.align(TOP, BOTTOM, LEFT, RIGHT)
s`.s10 .sakura div`.align(index => [{ [LEFT]: `${Math.random() * 160}p`, [TOP]: '-15p' }]).size(10, 10)
                   .animate(index => [{ translate_x: [0, -40 - Math.random() * 32] }, { begin: s10_begin - 0.2 + index * 0.04, dur: 1.4, fill: 'both', easing: 'cubic-bezier(0.12, 0, 0.39, 0)' }])
s`.s10 .sakura img`.animate(index => [{ translate_y: [0, 80 + Math.random() * 9], rotate: [0, 180 + Math.random() * 90], scale: [0.6 + Math.random() * 0.2, 0.9 + Math.random() * 0.2] }, { begin: s10_begin - 0.2 + index * 0.04, dur: 1.2 + Math.random() * 0.2, fill: 'both', easing: 'cubic-bezier(0.61, 1, 0.88, 1)' }, `s10_sakura_flow_${index}`])
                   .animate(index => [FADE_OUT, { begin: a[`s10_sakura_flow_${index}`].end - 0.4, dur: 0.4, fill: 'both' }])
s`.s10 .bg`.align(TOP, BOTTOM, LEFT, RIGHT).fill(WHITE).animate(FADE_IN, { begin: s10_begin + 0.5, dur: 1, fill: 'both' }, 's10_bg_in')
s`.s10 .bg-shape`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
s`.s10 .bg-shape .left`.align({ [LEFT]: -18 }).size(75, 75).round(8).origin(LEFT, BOTTOM).translate_y('-50p')
                       .animate('rotate_from_-90deg_to_180deg', { begin: a.s10_bg_in.end - 0.4, dur: 1.2, fill: 'both' }, 's10_bg_shape_left_in')
s`.s10 .bg-shape .right`.align({ [RIGHT]: -18 }).size(75, 75).round(8).origin(RIGHT, BOTTOM).translate_y('-50p')
                        .animate('rotate_from_-180deg_to_90deg', { begin: a.s10_bg_shape_left_in.begin + 0.2, dur: a.s10_bg_shape_left_in.dur, fill: 'both' })
s`.s10 .bg-shape .center`.align().size(75, 75).round(8).fill(RED).align_children(CENTER, CENTER)
                         .animate({ rotate: [0, -135], scale: [[0, 0], [1, 1]] }, { begin: a.s10_bg_shape_left_in.begin + 0.4 * a.s10_bg_shape_left_in.dur, dur: 0.8 * a.s10_bg_shape_left_in.dur, fill: 'both' }, 's10_bg_shape_center_in')
                         .after.align().size(45, 45).round(8).fill(WHITE)
                         .animate({ rotate: [0, -90], scale: [[0, 0], [1, 1]] }, { begin: a.s10_bg_shape_center_in.begin + 0.4, dur: a.s10_bg_shape_center_in.dur, fill: 'both' }, 's10_bg_shape_center_after_in')
s`.s10 .text-box`.css({ overflow: 'hidden' }).animate(FADE_IN, { begin: a.s10_bg_shape_center_after_in.begin + 0.65, dur: 0, fill: 'both' }, 's10_text_box_in')
s`.s10 .text-box .top`.css({ position: 'relative', padding: '1rem 1rem 0.1rem 1rem' })
                      .animate('translate_x_from_-100p_to_0p', { begin: a.s10_text_box_in.begin, dur: 1.4, easing: '>', fill: 'both' })
                      .after.align(TOP, BOTTOM, LEFT, RIGHT).fill(BLACK)
                      .animate('translate_x_from_-105p_to_105p', { begin: a.s10_text_box_in.begin, dur: 1, easing: '<>', fill: 'both' }, 's10_text_box_top_mask_in')
                      .before.align(TOP, BOTTOM, LEFT, RIGHT).fill(WHITE)
                      .animate('translate_x_from_0p_to_105p', { begin: a.s10_text_box_top_mask_in.begin + a.s10_text_box_top_mask_in.dur * 0.5, dur: a.s10_text_box_top_mask_in.dur * 0.5, easing: '>', fill: 'both' }, 's10_text_box_top_mask_out')
s`.s10 .text-box .bottom`.css({ position: 'relative', padding: '0.1rem 1rem 1rem 1rem' })
                         .animate('translate_x_from_100p_to_0p', { begin: a.s10_text_box_top_mask_in.begin, dur: 1.4, easing: '>', fill: 'both' })
                         .after.align(TOP, BOTTOM, LEFT, RIGHT).fill(BLACK)
                         .animate('translate_x_from_105p_to_-105p', { begin: a.s10_text_box_top_mask_in.begin + 0.2, dur: a.s10_text_box_top_mask_in.dur, easing: '<>', fill: 'both' }, 's10_text_box_bottom_mask_in')
                         .before.align(TOP, BOTTOM, LEFT, RIGHT).fill(WHITE)
                         .animate('translate_x_from_0p_to_-105p', { begin: a.s10_text_box_bottom_mask_in.begin + a.s10_text_box_bottom_mask_in.dur * 0.5, dur: a.s10_text_box_bottom_mask_in.dur * 0.5, easing: '>', fill: 'both' }, 's10_text_box_bottom_mask_out')
s`.s10 .frame`.align(4, 4, 4, 4)
              .animate([{ scale: [1, 1], opacity: 0 }, { scale: [1, 1], opacity: 1 }], { begin: a.s10_bg_shape_center_in.begin + 0.4, dur: 0.4, fill: 'both', easing: '>' }, 's10_frame_in')
              .before.align({ [TOP]: -2, [LEFT]: -2 }).size(0, 0).stroke('transparent', 3.2).rotate(-45).css({ 'border-bottom-color': 'var(--black)' })
              .after.align({ [BOTTOM]: -2, [RIGHT]: -2 }).size(0, 0).stroke('transparent', 3.2).rotate(-45).css({ 'border-top-color': 'var(--black)' })
s`.s10 .frame .border-x`.align(TOP, BOTTOM, LEFT, RIGHT)
                        .before.align(LEFT, TOP).size(0.25, '100p').fill(BLACK).origin(LEFT, TOP)
                        .animate('scale_from_1_0_to_1_1', { begin: a.s10_frame_in.begin + 0.2, dur: 1.6, fill: 'both' }, 's10_frame_border_in')
                        .after.align(RIGHT, BOTTOM).size(0.25, '100p').fill(BLACK).origin(RIGHT, BOTTOM)
                        .animate('scale_from_1_0_to_1_1', { begin: a.s10_frame_border_in.begin, dur: a.s10_frame_border_in.dur, fill: 'both' })
s`.s10 .frame .border-y`.align(TOP, BOTTOM, LEFT, RIGHT)
                        .before.align(LEFT, TOP).size('100p', 0.25).fill(BLACK).origin(LEFT, TOP)
                        .animate('scale_from_0_1_to_1_1', { begin: a.s10_frame_border_in.begin, dur: a.s10_frame_border_in.dur, fill: 'both' })
                        .after.align(RIGHT, BOTTOM).size('100p', 0.25).fill(BLACK).origin(RIGHT, BOTTOM)
                        .animate('scale_from_0_1_to_1_1', { begin: a.s10_frame_border_in.begin, dur: a.s10_frame_border_in.dur, fill: 'both' })
s`.s10 .frame .left`.align(TOP, LEFT).translate(1.1, 6.2).css({ overflow: 'hidden' })
s`.s10 .frame .left span`.animate('translate_x_from_-100p_to_0p', { begin: a.s10_frame_border_in.end - 0.8, dur: 0.8, fill: 'both' })
s`.s10 .frame .right`.align(BOTTOM, RIGHT).translate(-6.2, -1.1).css({ overflow: 'hidden' })
s`.s10 .frame .right span`.animate('translate_y_from_100p_to_0p', { begin: a.s10_frame_border_in.end - 0.6, dur: 0.8, fill: 'both' })
const s10_end = a.s10_text_box_top_mask_out.end
console.log(s10_end)

setTimeout(() => document.querySelector('.s9').style.display = 'none', Math.max(0, Math.ceil(s10_end * 1000)))
