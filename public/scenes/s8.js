appendScene(APP, 's8', `
  <div class="bg"></div>
  <div class="calendar-box" style="font-family: Bahnschrift, sans-serif; color: var(--white); --color: var(--white); font-size: 16rem; font-weight: normal; letter-spacing: 0;">
    <div class="glow" style="flex-direction: column;;">
      <div class="row">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
        <div>08</div>
        <div>09</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
      </div>
      <div class="row">
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
        <div>24</div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28</div>
        <div>29</div>
        <div>30</div>
      </div>
    </div>
  </div>
  <div class="text-box" style="color: #80af70; writing-mode: vertical-lr; font-size: 3rem; letter-spacing: 1.8rem; align-items: center;">
    <span><span>辿</span></span>
    <span><span>り</span></span>
    <span><span>着</span></span>
    <span><span>け</span></span>
    <span style="color: var(--purple);"><span>る</span></span>
    <span><span>と</span></span>
    <span><span>信</span></span>
    <span><span>じ</span></span>
    <span><span>て</span></span>
  </div>
  <div class="arrows">
    <div style="color: var(--red)"></div>
    <div style="color: var(--green)"></div>
    <div style="color: var(--purple)"></div>
    <div style="color: var(--yellow)"></div>
  </div>
`)

const s8_begin = s7_end - 0.3
s`.s8`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
s`.s8 .arrows > div`.forEach((ele, index, arr) => {
  ele.align(TOP, LEFT).size('100p', '200p').origin(TOP, CENTER).translate_y('-100p').scale(1, 0.5)
     .animate(index => (['translate_y_from_170p_to_0p', { begin: s8_begin + 0.15 * index, dur: 1.2 - index * 0.1, fill: 'both', easing: 'cubic-bezier(0.33, 1, 0.68, 1)' }, `s8_bg_in_${index}`]))
     .before.align(TOP, BOTTOM, LEFT, RIGHT).round(4).origin(RIGHT, TOP).size('100p', 30).translate('-50p', -60).rotate(-45).scale(1.5, 2).fill('currentColor')
     .after.align(TOP, BOTTOM, LEFT, RIGHT).round(4).origin(LEFT, TOP).size('100p', 30).translate('50p', -60).rotate(45).scale(1.5, 2).fill('currentColor')
})
s`.s8 .arrows`.align(TOP, BOTTOM, LEFT, RIGHT).animate('translate_y_from_0p_to_-70p', { begin: a.s8_bg_in_2.begin, dur: 1.2, fill: 'both', easing: '<' })
const s8_stage_in = a.s8_bg_in_0.begin + 0.75
s`.s8 .bg`.align(TOP, BOTTOM, LEFT, RIGHT).fill(WHITE)
          .animate(FADE_IN, { begin: s8_stage_in, dur: 0.1, fill: 'both' })
          .before.align(4, 9.5, 4, 4).round(6).fill(GREEN)
s`.s8 .calendar-box`.align(4, BOTTOM, LEFT, RIGHT)
                    .animate(FADE_IN, { begin: s8_stage_in, dur: 0.1, fill: 'both' })
                    .animate([{ translate_x: 17 * 5 * 2.3 }, { translate_x: -17 * 4.5 * 3.55 }], { begin: s8_begin - 0.1, dur: 5, fill: 'both', easing: '-' }, 's8_calendar_scale')
s`.s8 .calendar-box .glow`.align(TOP, BOTTOM, LEFT, RIGHT).origin(LEFT, TOP).scale(2.5, 2.5)
                          .animate([{ scale: [3, 3] }, { scale: [1.5, 1.5] }], { begin: a.s8_calendar_scale.begin + 0.4 * a.s8_calendar_scale.dur, dur: 0.6 * a.s8_calendar_scale.dur, fill: 'both', easing: 'cubic-bezier(0.32, 0, 0.67, 0)' })
s`.s8 .calendar-box .glow .row`.css({ position: 'relative' }).forEach((ele, index) => {
  index !== 0 && ele.before.align(-0.4, -170, undefined, -0.1).size({ height: 0.8 }).fill(WHITE)
  ele.css({ 'justify-items': 'flex-end' })
})
s`.s8 .calendar-box .glow .row div`.css({ position: 'relative', display: 'inline-block', 'text-align': 'center', 'min-width': '17rem', padding: '2rem' })
                                   .forEach(ele => ele.before.align(-0.1, undefined, -0.1, -0.4).size(0.8).fill('var(--color)'))

s`.s8 .text-box`.align({ [RIGHT]: 3.25 })
                .animate(FADE_IN, { begin: s8_stage_in, dur: 0.1, fill: 'both' })
s`.s8 .text-box > span`.css({ position: 'relative' }).forEach((ele, index) => {
  ele.before.align(TOP, LEFT).size(0.5, '15p').round().fill(GREEN).origin(TOP, CENTER).rotate(-45)
     .animate([{ opacity: 0, translate: [-2, -2] }, { opacity: 1, offset: 0.7 }, { opacity: 1, translate: [3, 3] }], { begin: s8_stage_in + 0.1 + index * 0.05, dur: 1, fill: 'both', easing: '>' }, `s8_text_before_in_${index}`)
     .animate([{ opacity: 1, translate: [3, 3] }, { opacity: 1, offset: 0.3 }, { opacity: 0, translate: [5, 5] }], { begin: a[`s8_text_before_in_${index}`].end, dur: 0.8, fill: 'forwards', easing: '<' }, `s8_text_before_out_${index}`)
  ele.after.align(TOP, LEFT).size(0.5, '80p').round().fill('linear-gradient(to bottom, transparent, var(--green))').origin(TOP, CENTER).rotate(-45)
     .animate([{ opacity: 0, translate: [-5.5, -5.5] }, { opacity: 1, offset: 0.7 }, { opacity: 1, translate: [-0.5, -0.5] }], { begin: a[`s8_text_before_in_${index}`].begin, dur: 1, fill: 'both', easing: '>' }, `s8_text_after_in_${index}`)
     .animate([{ opacity: 1, translate: [-0.5, -0.5] }, { opacity: 1, offset: 0.3 }, { opacity: 0, translate: [1.5, 1.5] }], { begin: a[`s8_text_after_in_${index}`].end, dur: 0.8, fill: 'forwards', easing: '<' }, 's8_text_after_out')
})
s`.s8 .text-box > span > span`.animate(index => ([{ opacity: [0, 1], translate: [[-3, -3], [0, 0]] }, { begin: a.s8_text_after_out.end + index * 0.1, dur: 1, fill: 'both', easing: '>' }, 's8_text_move']))
const s8_end = a.s8_text_move.end - 0.4
console.log(s8_end)

setTimeout(() => document.querySelector('.s7').style.display = 'none', Math.max(0, Math.ceil(s8_end * 1000)))
