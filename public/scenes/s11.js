appendScene(APP, 's11', `
  <div class="bg">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
  </div>
  <div class="shape">
    <div class="left">
      <div class="x">
        <div class="y">
          <svg viewBox="0 0 58.54 58.54" style="fill: var(--red)">
            <circle cx="29.27" cy="29.27" r="29.27"/>
          </svg>
          <svg viewBox="0 0 103.923 90" style="fill: var(--red); transform: translateY(-1.2rem);">
            <polygon points="51.962 0 0 90 103.923 90 51.962 0"/>
          </svg>
          <svg viewBox="0 0 90 90" style="fill: var(--red)">
            <rect width="90" height="90"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="x">
        <div class="y">
          <svg viewBox="0 0 58.54 58.54" style="fill: var(--red)">
            <circle cx="29.27" cy="29.27" r="29.27"/>
          </svg>
          <svg viewBox="0 0 103.923 90" style="fill: var(--red); transform: translateY(-1.2rem);">
            <polygon points="51.962 0 0 90 103.923 90 51.962 0"/>
          </svg>
          <svg viewBox="0 0 90 90" style="fill: var(--red)">
            <rect width="90" height="90"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="x">
        <div class="y">
          <svg viewBox="0 0 58.54 58.54" style="fill: var(--red)">
            <circle cx="29.27" cy="29.27" r="29.27"/>
          </svg>
          <svg viewBox="0 0 103.923 90" style="fill: var(--red); transform: translateY(-1.2rem);">
            <polygon points="51.962 0 0 90 103.923 90 51.962 0"/>
          </svg>
          <svg viewBox="0 0 90 90" style="fill: var(--red)">
            <rect width="90" height="90"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div class="text-box-1" style="font-size: 3.5rem; letter-spacing: 3rem; color: var(--red);">
    <span>巡</span>
    <span style="color: var(--blue);">る</span>
    <span>季</span>
    <span>節</span>
    <span>の</span>
  </div>
  <div class="text-box-2" style="font-size: 3.5rem; letter-spacing: 2rem; color: var(--red);">
    <span>隙</span>
    <span>間</span>
    <span>か</span>
    <span>ら</span>
  </div>
  <div class="frame">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="border-x"></div>
    <div class="border-y"></div>
  </div>
`)

const s11_begin = s10_end + 0.4
s`.s11`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
s`.s11 .bg`.align(TOP, BOTTOM, LEFT, RIGHT)
s`.s11 .bg div`.align(index => ({ [TOP]: 0, [LEFT]: index * 6 })).size(6.1, '100p').fill(WHITE)
               .animate(index => ['scale_from_1_0_to_1_1', { begin: s11_begin + 0.05 * index, dur: 0.6, fill: 'both', easing: 'cubic-bezier(0.39, 2, 0.41, 0.39)' }, 's11_bg_in'])
const s11_frame_line_dur = 0.4
s`.s11 .frame`.align(4, 4, 4, 4).animate(FADE_IN, { begin: a.s11_bg_in.end - 0.4, dur: 0, fill: 'both' }, 's11_frame_in')
s`.s11 .frame .line`[0].align(TOP, LEFT, RIGHT).size({ height: '4px' })
s`.s11 .frame .line`[1].align(TOP, BOTTOM, RIGHT).size({ width: '4px' })
s`.s11 .frame .line`[2].align(BOTTOM, LEFT, RIGHT).size({ height: '4px' })
s`.s11 .frame .line`[3].align(TOP, BOTTOM, LEFT).size({ width: '4px' })
s`.s11 .frame .line`.forEach(ele => {
  ele.fill(RED).css([['overflow', 'hidden']])
     .before.align(TOP, BOTTOM, LEFT, RIGHT).fill(WHITE)
     .after.align(TOP, BOTTOM, LEFT, RIGHT).fill(WHITE)
})
s`.s11 .frame .line`[0].before.translate_x('0p').after.translate_x('-100p')
s`.s11 .frame .line`[1].before.translate_y('0p').after.translate_y('-100p')
s`.s11 .frame .line`[2].before.translate_x('0p').after.translate_x('-100p')
s`.s11 .frame .line`[3].before.translate_y('0p').after.translate_y('-100p')
s`.s11 .frame .line`[0].before.animate([{ translate_x: '0p' }, { translate_x: '25p' }, { translate_x: '50p' }, { translate_x: '75p', offset: 0.75 }, { translate_x: '100p' }], {
  begin: a.s11_frame_in.begin, dur: s11_frame_line_dur, keep: s11_frame_line_dur, easing: '-',
}, 's11_frame_line_0_before')
s`.s11 .frame .line`[0].after.animate({ translate_x: ['-100p', '0p'] }, {
  begin: a.s11_frame_line_0_before.end, dur: s11_frame_line_dur, keep: 0, easing: '>',
}, 's11_frame_line_0_after')
s`.s11 .frame .line`[1].before.animate('translate_y_from_0p_to_100p', {
  begin: a.s11_frame_line_0_after.begin + s11_frame_line_dur * 0.5, dur: s11_frame_line_dur, keep: s11_frame_line_dur, easing: '-',
}, 's11_frame_line_1_before')
s`.s11 .frame .line`[1].after.animate('translate_y_from_-100p_to_0p', {
  begin: a.s11_frame_line_1_before.end, dur: s11_frame_line_dur, keep: 0, easing: '>',
}, 's11_frame_line_1_after')
s`.s11 .frame .line`[2].before.animate('translate_x_from_0p_to_-100p', {
  begin: a.s11_frame_line_1_after.begin + s11_frame_line_dur * 0.5, dur: s11_frame_line_dur, keep: s11_frame_line_dur, easing: '-',
}, 's11_frame_line_2_before')
s`.s11 .frame .line`[2].after.animate('translate_x_from_100p_to_0p', {
  begin: a.s11_frame_line_2_before.end, dur: s11_frame_line_dur, keep: 0, easing: '-',
}, 's11_frame_line_2_after')
// Alter
s`.s11 .frame .line`[2].before.animate('translate_x_from_0p_to_-100p', {
  begin: a.s11_frame_in.begin, dur: s11_frame_line_dur, keep: s11_frame_line_dur, easing: '-',
}, 's11_frame_line_2_before')
s`.s11 .frame .line`[2].after.animate('translate_x_from_100p_to_0p', {
  begin: a.s11_frame_line_2_before.end, dur: s11_frame_line_dur, keep: 0, easing: '>',
}, 's11_frame_line_2_after')
s`.s11 .frame .line`[3].before.animate('translate_y_from_0p_to_-100p', {
  begin: a.s11_frame_line_2_after.begin + s11_frame_line_dur * 0.5, dur: s11_frame_line_dur, keep: s11_frame_line_dur, easing: '-',
}, 's11_frame_line_3_before')
s`.s11 .frame .line`[3].after.animate('translate_y_from_100p_to_0p', {
  begin: a.s11_frame_line_3_before.end, dur: s11_frame_line_dur, keep: 0, easing: '>',
}, 's11_frame_line_3_after')
s`.s11 .frame .line`[0].before.animate('translate_x_from_0p_to_100p', {
  begin: a.s11_frame_line_3_after.begin + s11_frame_line_dur * 0.5, dur: s11_frame_line_dur, keep: s11_frame_line_dur, easing: '-',
}, 's11_frame_line_0_before')
s`.s11 .frame .line`[0].after.animate('translate_x_from_-100p_to_0p', {
  begin: a.s11_frame_line_0_before.end, dur: s11_frame_line_dur, keep: 0, easing: '>',
}, 's11_frame_line_0_after')
s`.s11 .frame .border-x`.align(TOP, BOTTOM, LEFT, RIGHT)
                        .before.align(LEFT, TOP).size(0.25, '100p').fill(RED).origin(LEFT, TOP)
                        .animate('scale_from_1_0_to_1_1', { begin: a.s11_frame_line_0_after.end + 0.2, dur: 1.6, fill: 'both' }, 's11_frame_border_in')
                        .after.align(RIGHT, BOTTOM).size(0.25, '100p').fill(RED).origin(RIGHT, BOTTOM)
                        .animate('scale_from_1_0_to_1_1', { begin: a.s11_frame_border_in.begin, dur: a.s11_frame_border_in.dur, fill: 'both' })
s`.s11 .frame .border-y`.align(TOP, BOTTOM, LEFT, RIGHT)
                        .before.align(LEFT, TOP).size('100p', 0.25).fill(RED).origin(LEFT, TOP)
                        .animate('scale_from_0_1_to_1_1', { begin: a.s11_frame_border_in.begin, dur: a.s11_frame_border_in.dur, fill: 'both' })
                        .after.align(RIGHT, BOTTOM).size('100p', 0.25).fill(RED).origin(RIGHT, BOTTOM)
                        .animate('scale_from_0_1_to_1_1', { begin: a.s11_frame_border_in.begin, dur: a.s11_frame_border_in.dur, fill: 'both' })
s`.s11 .frame`.after.align({ [BOTTOM]: -2, [RIGHT]: -2 }).size(0, 0).stroke('transparent', 3.2).rotate(-45).css({ 'border-top-color': 'var(--red)' })
              .animate({ clip: ['polygon(100% 50%, 0% 50%, 100% 50%, 0% 50%)', 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)'] }, { begin: a.s11_frame_border_in.begin, dur: 0.6, fill: 'both' })
s`.s11 .shape`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
              .animate(FADE_IN, { begin: a.s11_frame_in.begin - 0.1, dur: 0.5, fill: 'both' }, 's11_shape_in')
              .before.align(BOTTOM).size(7.5, 29).fill(RED).css({ filter: 'drop-shadow(0px -3px 3px rgba(0, 0, 0, 0.08))' })
              .after.align(BOTTOM).size('100p', 29).fill(WHITE)
s`.s11 .shape .y`.align_children(CENTER, CENTER)
s`.s11 .shape .y svg`.align().size({ height: 6 })
s`.s11 .shape .left .x`.animate('translate_x_from_0_to_-30rem', { begin: a.s11_shape_in.end, dur: 0.5, fill: 'both', easing: '-' }, 's11_shape_left_in')
s`.s11 .shape .left .y`.animate('translate_y_from_8rem_to_-4rem', { begin: a.s11_shape_left_in.begin, dur: a.s11_shape_left_in.dur, fill: 'both', easing: 'cubic-bezier(0.23, 1.52, 0.79, 1.78)' })
s`.s11 .shape .left`.align()
                    .animate('translate_y_from_0_to_-3rem', { begin: a.s11_shape_left_in.end + 0.4, dur: 0.8, fill: 'both', easing: 'cubic-bezier(0.33,-0.75, 0.11, 1)' }, 's11_shape_left_move_1')
                    .animate('translate_y_from_-3_to_3rem', { begin: a.s11_shape_left_move_1.end, dur: a.s11_shape_left_move_1.dur, fill: 'forwards', easing: 'cubic-bezier(0.33,-0.75, 0.11, 1)' }, 's11_shape_left_move_2')
                    .animate('translate_y_from_3_to_-3rem', { begin: a.s11_shape_left_move_2.end, dur: a.s11_shape_left_move_2.dur, fill: 'forwards', easing: 'cubic-bezier(0.33,-0.75, 0.11, 1)' }, 's11_shape_left_move_3')
s`.s11 .shape .left .y svg`[0].animate({ opacity: [1, 0], scale: [[1, 1], [0.7, 0.7]] }, { begin: a.s11_shape_left_move_2.begin + a.s11_shape_left_move_2.dur * 0.4, dur: 0.2, fill: 'both' })
s`.s11 .shape .left .y svg`[1].animate({ opacity: [0, 1], scale: [[0.7, 0.7], [1, 1]] }, { begin: a.s11_shape_left_move_2.begin + a.s11_shape_left_move_2.dur * 0.4, dur: 0.2, fill: 'both' })
s`.s11 .shape .left .y svg`[1].animate({ opacity: [1, 0], scale: [[1, 1], [0.7, 0.7]] }, { begin: a.s11_shape_left_move_3.begin + a.s11_shape_left_move_3.dur * 0.4, dur: 0.2, fill: 'forwards' })
s`.s11 .shape .left .y svg`[2].animate({ opacity: [0, 1], scale: [[0.7, 0.7], [1, 1]] }, { begin: a.s11_shape_left_move_3.begin + a.s11_shape_left_move_3.dur * 0.4, dur: 0.2, fill: 'both' })
s`.s11 .shape .center .x`.animate('translate_x_from_0_to_0rem', { begin: a.s11_shape_left_in.begin + 0.1, dur: a.s11_shape_left_in.dur, fill: 'both', easing: '-' }, 's11_shape_center_in')
s`.s11 .shape .center .y`.animate('translate_y_from_8rem_to_-4rem', { begin: a.s11_shape_center_in.begin, dur: a.s11_shape_center_in.dur, fill: 'both', easing: 'cubic-bezier(0.23, 1.52, 0.79, 1.78)' })
s`.s11 .shape .center`.align()
                      .animate('translate_y_from_0_to_-1rem', { begin: a.s11_shape_left_move_1.begin + 0.04, dur: a.s11_shape_left_move_1.dur, fill: 'both', easing: 'cubic-bezier(0.33,-0.75, 0.11, 1)' }, 's11_shape_center_move_1')
                      .animate('translate_y_from_-1_to_1rem', { begin: a.s11_shape_center_move_1.end, dur: a.s11_shape_center_move_1.dur, fill: 'forwards', easing: 'cubic-bezier(0.33,-0.75, 0.11, 1)' }, 's11_shape_center_move_2')
                      .animate('translate_y_from_1_to_-1rem', { begin: a.s11_shape_center_move_2.end, dur: a.s11_shape_center_move_2.dur, fill: 'forwards', easing: 'cubic-bezier(0.33,-0.75, 0.11, 1)' }, 's11_shape_center_move_3')
s`.s11 .shape .center .y svg`[0].animate({ opacity: [1, 0], scale: [[1, 1], [0.7, 0.7]] }, { begin: a.s11_shape_left_move_2.begin + a.s11_shape_left_move_2.dur * 0.4, dur: 0.2, fill: 'both' })
s`.s11 .shape .center .y svg`[1].animate({ opacity: [0, 1], scale: [[0.7, 0.7], [1, 1]] }, { begin: a.s11_shape_left_move_2.begin + a.s11_shape_left_move_2.dur * 0.4, dur: 0.2, fill: 'both' })
s`.s11 .shape .center .y svg`[1].animate({ opacity: [1, 0], scale: [[1, 1], [0.7, 0.7]] }, { begin: a.s11_shape_left_move_3.begin + a.s11_shape_left_move_3.dur * 0.4, dur: 0.2, fill: 'forwards' })
s`.s11 .shape .center .y svg`[2].animate({ opacity: [0, 1], scale: [[0.7, 0.7], [1, 1]] }, { begin: a.s11_shape_left_move_3.begin + a.s11_shape_left_move_3.dur * 0.4, dur: 0.2, fill: 'both' })
s`.s11 .shape .right .x`.animate('translate_x_from_0_to_30rem', { begin: a.s11_shape_center_in.begin + 0.1, dur: a.s11_shape_center_in.dur, fill: 'both', easing: '-' }, 's11_shape_right_in')
s`.s11 .shape .right .y`.animate('translate_y_from_8rem_to_-4rem', { begin: a.s11_shape_right_in.begin, dur: a.s11_shape_right_in.dur, fill: 'both', easing: 'cubic-bezier(0.23, 1.52, 0.79, 1.78)' })
s`.s11 .shape .right`.align()
                     .animate('translate_y_from_0_to_1rem', { begin: a.s11_shape_left_move_1.begin + 0.08, dur: a.s11_shape_left_move_1.dur, fill: 'both', easing: 'cubic-bezier(0.33,-0.75, 0.11, 1)' }, 's11_shape_right_move_1')
                     .animate('translate_y_from_1_to_-1rem', { begin: a.s11_shape_right_move_1.end, dur: a.s11_shape_right_move_1.dur, fill: 'forwards', easing: 'cubic-bezier(0.33,-0.75, 0.11, 1)' }, 's11_shape_right_move_2')
                     .animate('translate_y_from_-1_to_1rem', { begin: a.s11_shape_right_move_2.end, dur: a.s11_shape_right_move_2.dur, fill: 'forwards', easing: 'cubic-bezier(0.33,-0.75, 0.11, 1)' }, 's11_shape_right_move_3')
s`.s11 .shape .right .y svg`[0].animate({ opacity: [1, 0], scale: [[1, 1], [0.7, 0.7]] }, { begin: a.s11_shape_left_move_2.begin + a.s11_shape_left_move_2.dur * 0.4, dur: 0.2, fill: 'both' })
s`.s11 .shape .right .y svg`[1].animate({ opacity: [0, 1], scale: [[0.7, 0.7], [1, 1]] }, { begin: a.s11_shape_left_move_2.begin + a.s11_shape_left_move_2.dur * 0.4, dur: 0.2, fill: 'both' })
s`.s11 .shape .right .y svg`[1].animate({ opacity: [1, 0], scale: [[1, 1], [0.7, 0.7]] }, { begin: a.s11_shape_left_move_3.begin + a.s11_shape_left_move_3.dur * 0.4, dur: 0.2, fill: 'forwards' })
s`.s11 .shape .right .y svg`[2].animate({ opacity: [0, 1], scale: [[0.7, 0.7], [1, 1]] }, { begin: a.s11_shape_left_move_3.begin + a.s11_shape_left_move_3.dur * 0.4, dur: 0.2, fill: 'both' })
s`.s11 .shape`.before.animate(FADE_OUT, { begin: a.s11_shape_right_in.begin, dur: 0.5, fill: 'forwards' })
s`.s11 .text-box-1`.align(undefined, 0, 12.25, 0).align_children(CENTER, CENTER)
s`.s11 .text-box-1 span`.animate(index => [{ translate_y: [6, -6] }, { begin: a.s11_shape_in.begin + 0.3 + index * 0.1, dur: 2.0, fill: 'both', easing: 'cubic-bezier(0, 0.8, 1, 0.2)' }, `s11_text_box_1_span_in_${index}`])
                        .animate(index => [[{ opacity: 0 }, { opacity: 1, offset: 0.3 }, { opacity: 1, offset: 0.7 }, { opacity: 0 }], { begin: a[`s11_text_box_1_span_in_${index}`].begin, dur: a[`s11_text_box_1_span_in_${index}`].dur, fill: 'both', easing: 'ease' }])
s`.s11 .text-box-2`.align(undefined, 0, 12.25, 0).align_children(CENTER, CENTER)
s`.s11 .text-box-2 span`.animate(index => [{ translate_y: [6, -6] }, { begin: a.s11_text_box_1_span_in_0.end - 0.2 + index * 0.1, dur: 2.0, fill: 'both', easing: 'cubic-bezier(0, 0.8, 1, 0.2)' }, `s11_text_box_2_span_in_${index}`])
                        .animate(index => [[{ opacity: 0 }, { opacity: 1, offset: 0.3 }, { opacity: 1, offset: 0.7 }, { opacity: 0 }], { begin: a[`s11_text_box_2_span_in_${index}`].begin, dur: a[`s11_text_box_2_span_in_${index}`].dur, fill: 'both', easing: 'ease' }])
const s11_end = a.s11_text_box_2_span_in_0.begin + a.s11_text_box_2_span_in_0.dur * 0.5
console.log(s11_end)

setTimeout(() => document.querySelector('.s10').style.display = 'none', Math.max(0, Math.ceil(s11_end * 1000)))
