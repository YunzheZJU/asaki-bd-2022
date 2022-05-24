APP.innerHTML += `
  <div class="s3">
    <div class="bg">
      <div class="line-box" style="transform-style: preserve-3d;">
        <div class="far" style="transform: translateZ(-16rem);">
          <div style="background: var(--green)"></div>
          <div style="background: var(--yellow)"></div>
          <div style="background: var(--red)"></div>
          <div style="background: var(--yellow)"></div>
          <div style="background: var(--green)"></div>
          <div style="background: var(--yellow)"></div>
        </div>
        <div class="middle" style="transform: translateZ(-4rem);">
          <div style="background: var(--yellow)"></div>
          <div style="background: var(--red)"></div>
          <div style="background: var(--blue)"></div>
          <div style="background: var(--red)"></div>
          <div style="background: var(--blue)"></div>
          <div style="background: var(--purple)"></div>
        </div>
        <div class="near">
          <div style="background: var(--purple)"></div>
        </div>
      </div>
      <div class="lazer-box">
        <div style="color: var(--red)"></div>
        <div style="color: var(--yellow)"></div>
        <div style="color: var(--green)"></div>
        <div style="color: var(--blue)"></div>
        <div style="color: var(--purple)"></div>
        <div style="color: var(--red)"></div>
        <div style="color: var(--green)"></div>
        <div style="color: var(--yellow)"></div>
        <div style="color: var(--blue)"></div>
        <div style="color: var(--purple)"></div>
      </div>
    </div>
    <div class="text-box" style="font-size: 4rem; font-weight: normal;">
      <span style="font-size: 4rem">優</span>
      <span>し</span>
      <span>い</span>
      <span style="font-size: 4rem">言</span>
      <span style="font-size: 4rem">葉</span>
      <span>に</span>
      <span style="font-size: 4rem">包</span>
      <span>ま</span>
      <span>れ</span>
      <span>て</span>
    </div>
    <div class="frame-top"></div>
    <div class="frame-bottom"></div>
  </div>
`

const s3_begin = s2_end
s`.s3`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
s`.s3 .bg`.align(LEFT, TOP).size(FULL, FULL).align_children(CENTER, CENTER).fill(WHITE)
          .animate([{ opacity: 0, translate: [0, -8] }, { opacity: 1, translate: [0, 0] }], { begin: s3_begin, dur: 0.8, fill: 'both' }, 's3_bg_appear')
s`.s3 .bg .line-box`.size(FULL, '300%').rotate(45)
                    .animate('perspective_from_20rem_to_4rem', { begin: a.s3_bg_appear.begin, dur: 4, fill: 'both', easing: 'ease' })
s`.s3 .bg .line-box > *`.align(LEFT, TOP).size(FULL, FULL).align_children(CENTER, CENTER)
s`.s3 .bg .line-box .near div`.size(8.5, 40).round().translate(-15, 0)
                              .animate('translate_y_from_80rem_to_-80rem', { begin: a.s3_bg_appear.begin + 0.1, dur: 1.2, fill: 'both', iterations: 2 })
s`.s3 .bg .line-box .middle div`.round().css({ filter: 'blur(0.5rem)' })
s`.s3 .bg .line-box .middle div`[0].translate(-75, 0).size(8.5, 80)
                                   .animate('translate_y_from_120rem_to_-180rem', { begin: a.s3_bg_appear.begin + 0.8, dur: 0.8, fill: 'both', easing: '-', iterations: 2 })
s`.s3 .bg .line-box .middle div`[1].translate(-35, 0).size(8.5, 60)
                                   .animate('translate_y_from_160rem_to_-150rem', { begin: a.s3_bg_appear.begin + 1.2, dur: 0.8, fill: 'both', easing: '-', iterations: 2 })
s`.s3 .bg .line-box .middle div`[2].translate(5, 0).size(8.5, 100)
                                   .animate('translate_y_from_150rem_to_-150rem', { begin: a.s3_bg_appear.begin + 0.95, dur: 0.8, fill: 'both', easing: '-', iterations: 2 })
s`.s3 .bg .line-box .middle div`[3].translate(20, 0).size(8.5, 60)
                                   .animate('translate_y_from_100rem_to_-180rem', { begin: a.s3_bg_appear.begin + 0.6, dur: 0.8, fill: 'both', easing: '-', iterations: 2 })
s`.s3 .bg .line-box .middle div`[4].translate(30, 0).size(8.5, 80)
                                   .animate('translate_y_from_100rem_to_-180rem', { begin: a.s3_bg_appear.begin + 0.3, dur: 0.8, fill: 'both', easing: '-', iterations: 2 })
s`.s3 .bg .line-box .middle div`[5].translate(45, 0).size(8.5, 100)
                                   .animate('translate_y_from_120rem_to_-180rem', { begin: a.s3_bg_appear.begin + 0.9, dur: 0.8, fill: 'both', easing: '-', iterations: 2 })
s`.s3 .bg .line-box .far div`.size(8.5, 140).round().css({ filter: 'blur(3rem)' })
s`.s3 .bg .line-box .far div`[0].translate(-115, 0)
                                .animate('translate_y_from_400rem_to_-150rem', { begin: a.s3_bg_appear.begin + 0.4, dur: 1.0, fill: 'both', easing: '-', iterations: 2 })
s`.s3 .bg .line-box .far div`[1].translate(-50, 0)
                                .animate('translate_y_from_400rem_to_-200rem', { begin: a.s3_bg_appear.begin + 0.2, dur: 1.0, fill: 'both', easing: '-', iterations: 2 })
s`.s3 .bg .line-box .far div`[2].translate(-45, 0).size(8.5, 100)
                                .animate('translate_y_from_300rem_to_-250rem', { begin: a.s3_bg_appear.begin + 0.9, dur: 1.0, fill: 'both', easing: '-', iterations: 2 })
s`.s3 .bg .line-box .far div`[3].translate(40, 0)
                                .animate('translate_y_from_250rem_to_-300rem', { begin: a.s3_bg_appear.begin + 1.1, dur: 1.0, fill: 'both', easing: '-', iterations: 2 })
s`.s3 .bg .line-box .far div`[4].translate(80, 0)
                                .animate('translate_y_from_200rem_to_-350rem', { begin: a.s3_bg_appear.begin + 0.85, dur: 1.0, fill: 'both', easing: '-', iterations: 2 })
s`.s3 .bg .line-box .far div`[5].translate(170, 0)
                                .animate('translate_y_from_200rem_to_-350rem', { begin: a.s3_bg_appear.begin + 0.4, dur: 1.0, fill: 'both', easing: '-', iterations: 2 })
const s3_frame_height = 8
s`.s3 .frame-top`.align(LEFT, TOP).size(FULL, s3_frame_height).fill(BLACK).animate(FADE_IN, { begin: s3_begin, dur: 0, fill: 'both' })
s`.s3 .frame-bottom`.align(RIGHT, BOTTOM).size(FULL, s3_frame_height).fill(BLACK).animate(FADE_IN, { begin: s3_begin, dur: 0, fill: 'both' })
const s3_text_move_easing = 'cubic-bezier(0.000, 0.760, 1.000, 0.465)'
s`.s3 .text-box`.css({ padding: '2rem 3rem', color: WHITE }).fill('#2f2c16').align_children(CENTER, BOTTOM)
                .animate(FADE_IN, { begin: s3_begin + 0.1, dur: 0.1, fill: 'both' }, 's3_text_box_appear')
                .animate([{ translate: [-4, 4] }, { translate: [4, -4] }], { begin: a.s3_text_box_appear.begin, dur: 3, fill: 'both', easing: s3_text_move_easing }, 's3_text_box_move')
                .animate(FADE_OUT, { begin: a.s3_text_box_move.end - 0.6, dur: 0.6, fill: 'forwards' }, 's3_text_box_disappear')
s`.s3 .text-box span`.animate({ translate: [[6, -3], [-6, 3]] }, { begin: a.s3_text_box_move.begin, dur: a.s3_text_box_move.dur, fill: 'both', easing: s3_text_move_easing })
s`.s3 .bg .lazer-box`.align(LEFT, TOP).size(FULL, FULL).align_children(CENTER, CENTER)
                     .animate(FADE_IN, { begin: a.s3_text_box_move.begin + a.s3_text_box_move.dur * 0.8, dur: 0.2, fill: 'both' }, 's3_bg_lazer_box_appear')
s`.s3 .bg .lazer-box div`.align(LEFT, TOP).size(FULL, FULL).css({ 'transform-style': 'preserve-3d', perspective: '4rem' })
                         .forEach((ele, index) => {
                           ele.rotate(36 * index + Math.random() * 20 - 10)
                              .before.align({ [LEFT]: '50p', [TOP]: '50p' }).origin(CENTER, TOP).size(8.5, 60 + 100 * Math.random()).round().translate('-50p', '20p', -4).rotate_x(5).fill('currentColor')
                              .animate('translate_z_from_-185rem_to_5rem', { begin: a.s3_bg_lazer_box_appear.begin + 0.1 * Math.random(), dur: 0.6 + 0.4 * Math.random(), fill: 'both', easing: '>', iterations: 1})
                         })
s`.s3 .frame-top`.animate('translate_y_from_0p_to_-100p', { begin: a.s3_bg_lazer_box_appear.begin + 0.4, dur: 0.4, fill: 'both', easing: '>' }, 's3_frame_disappear')
s`.s3 .frame-bottom`.animate('translate_y_from_0p_to_100p', { begin: a.s3_frame_disappear.begin, dur: a.s3_frame_disappear.dur, fill: 'both', easing: '>' })
s`.s3 .bg .line-box`.animate(FADE_OUT, { begin: a.s3_frame_disappear.begin, dur: 0, fill: 'both' })
const s3_end = a.s3_frame_disappear.end
console.log(s3_end)

setTimeout(() => document.querySelector('.s2').style.display = 'none', Math.max(0, Math.ceil(s3_end * 1000)))
