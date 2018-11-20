const ArchiveCutout = () => {
  const cutout = document.querySelector('.js-cutout')

  if (!cutout) {
    return
  }

  document.documentElement.style.setProperty(
    '--cutout-height',
    cutout.offsetHeight + 'px'
  )
}

export default ArchiveCutout
