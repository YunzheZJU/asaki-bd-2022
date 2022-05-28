APP.innerHTML += `
  <div class="s9">
    <div class="circle-box">
      <svg viewBox="-1 0 4 4" style="width: 50rem; height: 50rem; fill: none; stroke: var(--green); stroke-width: 0.05; stroke-linecap: round; stroke-dasharray: 500 1000;">
        <path d="M2 2A1 1 0 0 1 0 2A1 1 0 0 1 2 2Z" pathLength="1000"></path>
      </svg>
      <svg viewBox="-1 0 4 4" style="width: 40rem; height: 40rem; fill: none; stroke: var(--purple); stroke-width: 0.0625; stroke-linecap: round; stroke-dasharray: 400 1000;">
        <path d="M2 2A1 1 0 0 1 0 2A1 1 0 0 1 2 2Z" pathLength="1000"></path>
      </svg>
      <svg viewBox="-1 0 4 4" style="width: 30rem; height: 30rem; fill: none; stroke: var(--yellow); stroke-width: 0.08333; stroke-linecap: round; stroke-dasharray: 300 1000;">
        <path d="M2 2A1 1 0 0 1 0 2A1 1 0 0 1 2 2Z" pathLength="1000"></path>
      </svg>
      <svg viewBox="-1 0 4 4" style="width: 20rem; height: 20rem; fill: none; stroke: var(--blue); stroke-width: 0.125; stroke-linecap: round; stroke-dasharray: 200 1000;">
        <path d="M2 2A1 1 0 0 1 0 2A1 1 0 0 1 2 2Z" pathLength="1000"></path>
      </svg>
      <svg viewBox="-1 0 4 4" style="width: 10rem; height: 10rem; fill: none; stroke: var(--red); stroke-width: 0.25; stroke-linecap: round; stroke-dasharray: 100 1000;">
        <path d="M2 2A1 1 0 0 1 0 2A1 1 0 0 1 2 2Z" pathLength="1000"></path>
      </svg>
    </div>
    <div class="bg"></div>
    <div class="text-box-1" style="color: var(--balck); letter-spacing: 1rem;">
      <span>瞼</span>
      <span>を</span>
      <span>閉</span>
      <span>じ</span>
      <span>れ</span>
      <span>ば</span>
    </div>
    <div class="text-box-2" style="color: var(--balck); letter-spacing: 1rem;">
      <span>耳</span>
      <span>を</span>
      <span>澄</span>
      <span>ま</span>
      <span>せ</span>
      <span>ば</span>
    </div>
    <div class="mask">
      <div>
        <div class="line-box">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <div>
        <div class="line-box">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
`
const s9_begin = s8_end
s`.s9 .mask`.align(TOP, BOTTOM, LEFT, RIGHT)
const s9_mask_easing_open = 'cubic-bezier(0.61, 1, 0.88, 1)'
const s9_mask_easing_close = 'cubic-bezier(0.12, 0, 0.39, 0)'
s`.s9 .mask > div`.align(TOP, LEFT).size(FULL, '50p').clip('polygon(0% 0%, 100% 0%, 100% 80%, 0% 80%)').css({ background: 'radial-gradient(circle farthest-side at bottom, hsla(0, 100%, 100%, 0.15), hsla(0, 100%, 100%, 0) 80%) #192c30' })
                  .animate({ clip: ['polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'] }, { begin: s9_begin, dur: 0.5, fill: 'both', easing: s9_mask_easing_close }, 's9_mask_close_1')
                  .animate({ clip: ['polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', 'polygon(0% 0%, 100% 0%, 100% 80%, 0% 80%)'] }, { begin: a.s9_mask_close_1.end, dur: 0.4, fill: 'forwards', easing: s9_mask_easing_open }, 's9_mask_open_1')
                  .animate({ clip: ['polygon(0% 0%, 100% 0%, 100% 80%, 0% 80%)', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'] }, { begin: a.s9_mask_open_1.end, dur: 0.3, fill: 'forwards', easing: s9_mask_easing_close }, 's9_mask_close_2')
                  .animate({ clip: ['polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'] }, { begin: a.s9_mask_close_2.end, dur: 0.6, fill: 'forwards', easing: s9_mask_easing_open }, 's9_mask_open_2')
s`.s9 .mask > div`[1].translate_y('100p').rotate(180)
s`.s9 .mask > div .line-box`.align(TOP, BOTTOM, LEFT, RIGHT)
s`.s9 .mask > div .line-box`[1].rotate(180)
s`.s9 .mask > div .line`.forEach(ele => {
  const tx = Math.random() * 40 + 80
  ele.align({ [TOP]: `${Math.floor(Math.random() * 95)}p`, [LEFT]: `${Math.floor(Math.random() * 100)}p` }).size(6 + Math.random() * 6, '4px').round().fill('linear-gradient(to right, hsla(0, 100%, 100%, 0.7), transparent)').rotate(-4 - 2 * Math.floor(Math.random()))
     .animate([{ translate: [tx, -tx * Math.PI / 180 * 5], opacity: 0 }, { opacity: 1, offset: 0.5 }, { translate: [0, 0], opacity: 1, offset: 0.85 }, { translate: [-5, 5 * Math.PI / 180 * 5], opacity: 0 }], { begin: a.s9_mask_close_1.begin + Math.random() * 1.5, dur: Math.random() * 0.2 + 0.4, fill: 'both', easing: '-' })
})
s`.s9`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
      .before.align(TOP, BOTTOM, LEFT, RIGHT).fill(WHITE)
      .animate(FADE_IN, { begin: a.s9_mask_close_1.end, dur: 0, fill: 'both' })
s`.s9 .text-box-1`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
                  .animate(FADE_IN, { begin: a.s9_mask_close_1.end, dur: 0, fill: 'both' })
                  .animate(FADE_OUT, { begin: a.s9_mask_close_2.end, dur: 0, fill: 'forwards' })
s`.s9 .circle-box`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
                  .animate('scale_from_4_4_to_1_1', { begin: a.s9_mask_close_2.begin, dur: 2, fill: 'both', easing: 'cubic-bezier(0, 0.55, 0.45, 1)' })
s`.s9 .circle-box svg`.align().rotate(-90).scale(2, 2)
                      .animate(index => [FADE_IN, { begin: a.s9_mask_open_2.end - 0.1 - index * 0.15, dur: 0.1, fill: 'both' }])
                      .animate(index => [{ css: [{ 'stroke-dasharray': '0 1200' }, { 'stroke-dasharray': `1200 1200` }] }, { begin: a.s9_mask_open_2.end - 0.1 - index * 0.15, dur: 4 - index * 0.4, fill: 'both', easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }, `s9_circle_in_${index}`])
                      .animate(index => [{ scale: [[2, 2], [3, 3]], opacity: [1, 0] }, { begin: a[`s9_circle_in_${index}`].begin + 0.9 + index * 0.05, dur: 0.4, fill: 'forwards' }, `s9_circle_out_${index}`])
s`.s9 .bg`.align().round().stroke(GREEN, 0.3).css({ background: 'url("r/9-0.svg") left top/4.6875rem 8.125rem fixed' })
          .animate(FADE_IN, { begin: a.s9_circle_in_4.end - 1.5, dur: 0.2, fill: 'both' })
          .animate({ size: [[0, 0], [180, 180]] }, { begin: a.s9_circle_in_4.end - 1.5, dur: 1.4, fill: 'both', easing: '<' }, 's9_bg_scale')
s`.s9 .text-box-2`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER).opacity(0)
                  .animate(FADE_IN, { begin: a.s9_bg_scale.begin + 0.5, dur: 0, fill: 'both' }, 's9_text_box_2_in')
s`.s9 .text-box-2 span`.animate(index => [{ translate_y: [10, 0] }, { begin: a.s9_text_box_2_in.end + index * 0.02, dur: 0.6, fill: 'both', easing: '>' }, `s9_text_box_2_span_in_${index}`])
                       .animate(index => [{ translate_y: [0, -8] }, { begin: a[`s9_text_box_2_span_in_${index}`].end + 0.1 + index * 0.04, dur: 1.2, fill: 'forwards', easing: '<' }, `s9_text_box_2_span_out_${index}`])
                       .animate(index => [{ clip: ['polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'] }, { begin: a[`s9_text_box_2_span_in_${index}`].begin, dur: a[`s9_text_box_2_span_in_${index}`].dur, fill: 'both', easing: '>' }])
const s9_end = a.s9_text_box_2_span_in_5.end
console.log(s9_end)

setTimeout(() => document.querySelector('.s8').style.display = 'none', Math.max(0, Math.ceil(s9_end * 1000)))
