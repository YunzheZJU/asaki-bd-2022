const forceRatio = () => {
  if (!shouldForceRatio) return

  let { innerWidth: width, innerHeight: height } = window
  const shouldRotate = shouldDisableRotate ? false : width < height
  if (shouldRotate) {
    [width, height] = [height, width]
  }
  const factor = Math.min(width / 16, height / 9);
  [width, height] = [16 * factor, 9 * factor].map(Math.round)
  document.querySelector('html').style.fontSize = `${(16 * factor / 1920 * 16).toPrecision(3)}px`
  document.querySelector('body').style.writingMode = shouldRotate ? 'vertical-lr' : 'horizontal-tb'
  APP.style.transform = shouldRotate ? 'rotate(90deg)' : ''
  APP.style.writingMode = 'horizontal-tb'
  APP.style.width = `${width}px`
  APP.style.height = `${height}px`
}
forceRatio()
window.addEventListener('resize', forceRatio)
