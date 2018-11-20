const ArchiveCutout = () => {
  const cutout = document.querySelector('.js-cutout')

  if (!cutout) {
    return
  }

  document.documentElement.style.setProperty(
    '--archive-cutout-height',
    cutout.offsetHeight + 'px'
  )
}

export default ArchiveCutout
