const ArchiveCutout = () => {
  const cutout = document.querySelector('.js-cutout')

  if (!cutout) {
    return
  }

  const location = window.location.pathname.split('/').filter(f => f)

  const cutoutHeight =
    location[0] === 'authors'
      ? Math.min(cutout.offsetHeight, 101)
      : cutout.offsetHeight

  document.documentElement.style.setProperty(
    '--archive-cutout-height',
    cutoutHeight + 'px'
  )
}

export default ArchiveCutout
