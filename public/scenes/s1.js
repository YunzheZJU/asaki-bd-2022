appendScene(APP, 's1', `
  <div class="bg">
    <div class="frag"></div>
    <div class="frag"></div>
    <div class="frag"></div>
    <div class="frag"></div>
    <div class="frag"></div>
  </div>
  <div class="bg-text">
    <div class="left">
      <svg viewBox="0 0 363 360" style="height: 22.5rem; stroke: var(--white); stroke-width: 0.25rem; stroke-width: max(4px, 0.25rem); fill: none;">
        <path d="M59.83 68.5139V74.244C59.83 117.626 36.911 134.816 18.084 134.816C2.12304 134.816 -4.83496 122.538 -4.83496 111.488C-4.83496 100.438 2.53204 91.8429 10.308 87.7499C36.501 73.4249 46.733 56.236 48.779 33.317C48.779 30.452 50.417 29.2239 51.644 29.2239C56.144 29.2239 57.374 40.6839 59.011 57.4639H153.144V43.1389C153.064 29.3985 151.693 15.6961 149.051 2.21191H153.144C177.7 2.21191 214.125 4.25795 214.125 15.312C214.125 19.404 209.214 23.4969 198.573 25.9529C197.754 34.5469 197.345 48.8719 197.345 57.4669H291.886C298.435 48.8669 311.531 37.822 313.986 37.822C314.986 37.9026 315.959 38.1806 316.851 38.64C317.669 39.049 360.643 61.56 360.643 78.749C360.643 84.888 354.504 88.5709 344.272 88.5709C341.121 88.4841 337.978 88.2109 334.859 87.7529C313.167 104.124 279.607 120.904 279.607 120.904C277.97 120.904 277.152 119.267 277.152 117.629C277.087 116.79 277.228 115.947 277.561 115.174C284.574 100.212 290.058 84.5804 293.932 68.517L59.83 68.5139ZM8.67104 220.763H6.62504C3.35004 220.763 1.30404 219.535 1.30404 217.898C1.30404 216.67 2.53204 215.442 4.98704 214.624C94.209 186.384 105.668 130.314 105.668 88.5679V82.02C109.352 82.429 163.376 85.704 163.376 97.572C163.376 101.256 158.464 104.939 149.051 105.758C139.228 182.291 79.884 207.666 8.67104 220.763ZM101.171 354.185C90.121 354.185 29.548 355.413 9.90304 357.459C6.22004 354.595 1.71804 343.959 1.71804 339.042C17.68 340.68 75.387 342.726 111.403 342.726H149.46V253.914H128.178C117.127 253.914 56.556 254.323 37.32 256.779C33.636 253.505 29.543 243.273 29.543 238.362C45.505 239.998 102.803 242.455 138.819 242.455H235.819C242.777 231.404 263.24 206.438 267.742 206.438C273.881 206.438 314.4 239.18 314.4 247.775C314.4 250.64 312.762 253.914 307.851 253.914H194.48V342.726H269.786C273.469 336.996 297.207 303.845 303.346 303.845C304.055 303.738 304.779 303.883 305.393 304.254C319.308 311.621 352.049 341.089 352.049 347.637C352.049 350.911 350.412 354.185 345.501 354.185H101.171ZM330.363 112.715C329.954 121.31 329.135 133.588 329.135 140.546C329.135 145.866 329.954 148.322 334.865 150.368C341.413 153.233 345.506 158.554 345.506 165.921C345.506 175.743 343.869 196.206 255.466 196.206C223.134 196.206 183.435 194.979 183.435 153.643V152.824C183.435 152.824 184.253 120.901 184.253 116.399C184.253 111.488 183.844 93.07 181.798 82.02C196.122 82.429 221.906 86.1129 230.91 88.5679C236.231 90.2059 238.686 92.6609 238.686 95.5259C238.686 99.2089 234.186 103.302 225.18 104.939C224.362 111.897 223.543 141.364 223.543 143.411C223.543 160.6 239.095 161.828 258.743 161.828C303.354 161.828 312.767 152.828 322.999 111.897C323.152 110.94 323.657 110.075 324.413 109.469C325.17 108.864 326.125 108.562 327.092 108.622C327.555 108.63 328.012 108.733 328.433 108.927C328.854 109.12 329.23 109.399 329.538 109.745C329.846 110.091 330.078 110.498 330.221 110.939C330.363 111.379 330.413 111.845 330.366 112.306L330.363 112.715Z" />
      </svg>
      <svg viewBox="0 0 307 324" style="height: 20.25rem; stroke: var(--white); stroke-width: 0.25rem; stroke-width: max(4px, 0.25rem); fill: none; margin-left: 4.5rem;">
        <path d="M2.86402 230.643C2.78592 220.116 3.33219 209.593 4.5 199.13C9.412 153.291 22.508 110.73 29.057 69.391C30.6378 60.6113 31.4591 51.7117 31.512 42.791C31.512 30.513 29.466 18.644 21.689 14.142C18.006 11.687 15.141 10.459 15.141 8.41302C15.141 7.18502 18.825 2.68298 27.01 2.68298C44.61 2.68298 67.528 37.062 67.528 57.934C67.528 69.803 63.028 80.854 58.115 93.134C36.015 150.024 29.057 188.904 29.057 202.41C29.057 203.229 29.057 224.92 33.968 224.92C35.195 224.92 36.833 223.283 38.061 220.42C64.661 159.848 74.895 142.658 78.578 142.658C79.397 142.658 79.806 143.886 79.806 145.523C79.806 147.979 78.987 152.481 76.941 158.211C64.254 195.454 56.068 230.242 56.068 263.393C55.9201 272.984 56.605 282.57 58.115 292.043C58.59 294.885 58.8634 297.757 58.933 300.637C58.933 316.599 48.702 321.51 40.925 321.51C22.1 321.5 2.86402 288.351 2.86402 230.643ZM243.106 96.812C224.689 100.496 206.272 113.183 196.04 122.596C191.129 126.689 187.04 129.144 184.581 129.144C184.308 129.161 184.034 129.119 183.779 129.022C183.523 128.925 183.29 128.775 183.097 128.582C182.903 128.388 182.753 128.156 182.656 127.9C182.559 127.645 182.517 127.371 182.534 127.098C182.534 125.052 184.171 120.959 188.673 115.229C193.994 107.862 206.681 89.445 206.681 86.99C206.681 84.943 200.133 84.943 198.081 84.943C189.487 84.943 181.71 86.58 171.888 87.808C167.84 88.582 163.731 88.993 159.61 89.036C139.556 89.036 124.003 74.302 124.003 66.526C124.003 63.661 124.003 61.206 126.05 61.206C127.278 61.206 129.324 62.024 131.78 63.252C136.625 65.0291 141.765 65.8624 146.923 65.707C158.791 65.707 173.523 62.843 186.213 60.387C201.356 57.522 212.406 55.887 220.182 55.887H225.912C239.012 55.887 278.299 59.57 278.299 77.987C278.299 87.401 270.932 92.312 263.156 93.949C257.431 95.175 247.608 95.994 243.106 96.812ZM245.562 304.722C167.391 304.722 130.147 260.522 130.147 233.922C130.147 218.779 141.198 210.184 143.247 210.184C144.884 210.184 145.703 211.821 145.703 214.684C145.621 216.916 145.207 219.122 144.475 221.232C143.637 223.312 143.219 225.538 143.247 227.781C143.247 239.24 169.441 262.981 218.962 263.797C227.856 263.876 236.745 263.329 245.562 262.16C251.701 261.341 257.431 256.839 264.388 256.839C290.172 256.839 304.906 267.89 304.906 278.53C304.906 304.722 250.473 304.722 245.562 304.722Z" />
      </svg>
    </div>
    <div class="right">
      <svg viewBox="0 0 381 377" style="height: 23.5625rem; stroke: var(--white); stroke-width: 0.25rem; stroke-width: max(4px, 0.25rem); fill: none;">
        <path d="M215.9 225.392V260.18C215.9 272.868 217.128 301.108 217.538 312.567V315.432C217.538 369.456 152.463 374.367 150.826 374.367C147.143 374.367 143.869 373.14 142.226 369.867C136.906 357.18 127.902 349.404 116.443 344.083C109.076 340.809 90.659 335.483 79.199 331.805C78.3089 331.524 77.5223 330.985 76.9392 330.256C76.3561 329.528 76.0026 328.642 75.924 327.712C75.887 327.219 75.9571 326.723 76.1292 326.26C76.3012 325.796 76.5714 325.375 76.9211 325.025C77.2709 324.676 77.692 324.406 78.1558 324.234C78.6195 324.062 79.1148 323.992 79.608 324.029H80.426C95.979 326.075 122.581 328.529 139.771 328.529C155.323 328.529 170.871 319.116 170.871 303.563V225.392H110.299C91.0639 225.392 30.0819 226.62 10.8459 228.667C7.16295 225.801 3.48004 214.751 3.07104 210.249C19.032 211.886 84.924 213.933 120.941 213.933H170.871V139.033H122.171C117.26 139.033 53.004 139.442 31.313 141.489C27.22 137.396 25.174 131.257 24.765 125.527C41.544 127.164 93.931 128.392 132.403 128.392H170.874V61.684C128.719 64.549 84.1091 65.777 38.6801 66.184C34.9961 66.184 32.54 64.137 32.54 62.091C32.54 60.8629 33.7691 59.6349 36.6331 59.2259C161.052 44.9019 251.091 19.5259 276.875 2.74695C293.656 11.7469 324.351 37.947 324.351 46.947C324.351 50.63 321.077 52.6769 316.165 52.6769C311.665 52.6769 305.525 51.0399 298.976 47.3559C274.829 51.8559 246.589 55.5419 215.894 58.4069V128.4H277.694C294.883 103.844 307.162 90.7469 310.436 90.7469C315.347 90.7469 356.274 123.489 356.274 132.492C356.274 135.767 354.228 139.041 349.317 139.041H215.9V213.941H298.573C320.673 179.153 329.268 172.604 330.906 172.604C337.044 172.604 378.791 209.439 378.791 219.261C378.791 222.536 376.744 225.4 372.242 225.4L215.9 225.392Z" />
      </svg>
      <svg viewBox="0 0 291 358" style="height: 22.375rem; stroke: var(--white); stroke-width: 0.25rem; stroke-width: max(4px, 0.25rem); fill: none; margin-left: 3.25rem;">
        <path d="M136.791 195.292C136.381 173.192 128.191 156.411 113.052 156.411C101.593 156.411 79.4929 162.959 47.1599 219.439C41.4299 228.439 32.0169 237.039 21.7849 237.039C15.6459 237.039 7.45984 234.993 7.45984 215.757C7.45984 207.981 8.68783 199.386 12.3718 194.066C16.8718 187.108 25.8719 185.066 36.5189 173.602C63.5309 144.953 77.0369 127.764 92.5889 98.702C63.5309 104.84 58.6199 105.659 51.6619 105.659C20.1479 105.659 2.96191 79.059 2.96191 68.006C2.96191 61.048 7.05392 56.956 8.69092 56.956C9.91992 56.956 11.1469 58.184 13.6029 60.639C25.4709 72.508 41.0239 75.782 54.5299 75.782C60.2589 75.782 74.5849 75.373 104.87 68.006C107.326 59.006 110.191 47.952 110.191 40.176C110.191 29.535 104.87 20.122 92.1829 20.122H86.8619C83.9979 20.122 82.7689 19.303 82.7689 17.666C82.7689 14.801 88.4998 2.11304 103.642 2.11304C117.557 2.11304 147.025 14.801 147.025 33.218C147.025 38.539 144.16 44.269 141.296 49.998L136.796 58.998C139.53 58.0973 142.143 56.8602 144.572 55.315C155.622 48.767 159.714 46.72 174.857 46.72C202.279 46.72 203.097 57.771 203.097 61.863C203.097 75.369 190.41 78.234 152.756 85.191C143.343 86.829 131.475 89.284 119.606 92.149C114.286 102.381 106.919 114.249 80.3159 156.814C92.1849 148.219 108.964 143.308 122.061 143.308C149.892 143.308 163.398 164.181 167.082 181.371C188.364 168.271 220.282 149.856 241.16 138.397C244.433 136.76 247.298 134.304 247.298 132.258C247.298 131.849 247.298 126.119 229.698 126.119H226.014C220.285 126.119 217.829 124.481 217.829 122.435C217.829 114.25 241.158 114.25 242.795 114.25C266.532 114.25 299.683 124.072 299.683 150.675C299.683 165.818 284.131 166.228 271.853 167.455C255.073 169.092 196.546 192.011 169.126 205.518V212.066C169.126 257.495 165.851 285.325 146.207 285.325C133.107 285.325 130.245 267.317 130.245 256.267V254.221C130.654 246.444 133.519 242.761 134.337 237.44C135.155 232.119 135.565 226.799 135.975 221.479C99.5489 243.17 79.9049 261.997 79.9049 283.279C79.9049 315.612 129.426 318.067 147.434 318.067C151.934 318.067 156.434 318.067 160.534 317.658C182.634 316.021 190.411 305.789 203.507 304.152C206.633 303.82 209.777 303.684 212.921 303.743C235.021 303.743 243.616 315.202 243.616 323.797C243.616 345.489 205.964 355.72 161.352 355.72H159.715C106.915 355.72 61.4908 329.936 61.4908 290.236C61.4908 258.314 99.5519 225.163 136.797 198.969L136.791 195.292Z" />
      </svg>
    </div>
  </div>
  <div class="bg-shape">
    <div class="left"></div>
    <div class="right"></div>
  </div>
  <div class="text-box" style="font-size: 3.5rem">
    <span style="font-size: 4rem">空</span>
    <span>に</span>
    <span style="font-size: 4rem">手</span>
    <span>を</span>
    <span style="font-size: 4rem">伸</span>
    <span>ば</span>
    <span>し</span>
    <span>て</span>
    <span>み</span>
    <span>て</span>
    <span>も</span>
    <div class="deco"></div>
  </div>
  <div class="frame-top"></div>
  <div class="frame-bottom"></div>
`)

const s1_begin = s0_end
s`.s1`.align(TOP, BOTTOM, LEFT, RIGHT).align_children(CENTER, CENTER)
s`.s1 .bg`.align(TOP, LEFT).size(FULL, FULL)
s`.s1 .bg .frag`.align(index => ([`${20 * index}%`, LEFT, RIGHT])).size('200%', '20%').fill(RED).css({ 'border-radius': '9999px 0 0 9999px' })
                .animate(index => (['translate_from_50p_to_-50p', { begin: s1_begin + index * 0.15, dur: 0.6, fill: 'both', easing: '<>' }, `s1_bg_${index}`]))
s`.s1 .bg .frag`.even().forEach(ele => {
  ele.after.align(TOP, BOTTOM, LEFT).size('50%').round().fill(BLUE)
})
const s1_frame_begin = a[`s1_bg_4`].end - 0.2
const s1_frame_height = 8
s`.s1 .frame-top`.align(LEFT, TOP).size(FULL, s1_frame_height).fill(BLACK).animate('translate_y_from_-100p_to_0p', { begin: s1_frame_begin, dur: 0.8, fill: 'both' })
s`.s1 .frame-bottom`.align(RIGHT, BOTTOM).size(FULL, s1_frame_height).fill(BLACK).animate('translate_y_from_100p_to_0p', { begin: s1_frame_begin, dur: 0.8, fill: 'both' })
s`.s1 .text-box`.css({ padding: '0.5rem 2rem 0.5rem 2.5rem', color: WHITE, 'text-shadow': '0 0 5px rgba(255, 255, 255, 0.75)' }).align_children(CENTER, BOTTOM)
s`.s1 .text-box span`.animate(index => ([
  isEven(index) ? [{ opacity: 0, translate_y: -1 - index * 0.1, translate_x: -1 + index * 0.1 }, { opacity: 1, translate_y: 0, translate_x: 0 }] : [{ opacity: 0, translate_y: 1 + index * 0.1, translate_x: 0.5 }, { opacity: 1, translate_y: 0, translate_x: 0 }],
  { begin: a[`s1_bg_4`].end + 0.1 + index * 0.05, dur: 1 + index * 0.05, fill: 'both' }, `s1_text_${index}`,
]))
s`.s1 .text-box .deco`.align(LEFT, TOP).size(FULL, FULL).css({ overflow: 'hidden' })
s`.s1 .text-box .deco`.before.align(BOTTOM, LEFT).size('0.25rem', '100%').fill(WHITE)
                      .animate({ translate_y: ['100p', '0p'] }, { begin: a.s1_text_7.begin, dur: 0.8, fill: 'both' })
                      .after.align(TOP, RIGHT).size('0.25rem', '100%').fill(WHITE)
                      .animate({ translate_y: ['-100p', '0p'] }, { begin: a.s1_text_10.begin + 0.2, dur: 0.8, fill: 'both' })
s`.s1 .bg-text`.align(LEFT, TOP).size(FULL, FULL)
s`.s1 .bg-text .left`.align({ [LEFT]: 0, [BOTTOM]: s1_frame_height }).align_children(CENTER, BOTTOM).translate_y('1rem')
                     .animate([{ opacity: 0, translate_x: 6 }, { opacity: 1, translate_x: 0 }], { begin: a.s1_text_2.begin + 0.2, dur: 1.8, fill: 'both' })
s`.s1 .bg-text .right`.align({ [RIGHT]: 0, [TOP]: s1_frame_height }).align_children(CENTER, BOTTOM).translate_y('-2rem')
                      .animate([{ opacity: 0, translate_x: -6 }, { opacity: 1, translate_x: 0 }], { begin: a.s1_text_8.begin + 0.4, dur: 1.8, fill: 'both' })
s`.s1 .bg-shape`.align(LEFT, TOP).size(FULL, FULL)
s`.s1 .bg-shape .left`.align({ [LEFT]: 0, [TOP]: 0 }).size(25, 25).rotate(45).translate(2, 3)
                      .animate([{ opacity: 0, stroke: [BLUE, 8], scale: [0.9, 0.9] }, { opacity: 1, stroke: [BLUE, 0], scale: [1, 1] }], { begin: a.s1_text_8.begin + 1, dur: 0.5, fill: 'both', easing: '>' })
s`.s1 .bg-shape .right`.align({ [RIGHT]: 0, [BOTTOM]: 0 }).size(30, 30).rotate(45).translate(-4, -4)
                       .animate([{ opacity: 0, stroke: [BLUE, 6], scale: [0.8, 0.8] }, { opacity: 1, stroke: [BLUE, 0], scale: [1.1, 1.1] }], { begin: a.s1_text_8.begin + 1.4, dur: 0.4, fill: 'both', easing: '>' }, 's1_bg_shape_right')

const s1_end = a.s1_bg_shape_right.end - 0.1
console.log(s1_end)

setTimeout(() => document.querySelector('.s0').style.display = 'none', Math.max(0, Math.ceil(s1_end * 1000)))
