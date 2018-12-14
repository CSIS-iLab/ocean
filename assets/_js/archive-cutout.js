const ArchiveCutout = () => {
  const cutout = document.querySelector('.js-cutout')

  if (!cutout) {
    return
  }

  const location = window.location.pathname.split('/').filter(f => f)

  // Wrap in timeout function to address bug in Chrome: See
  // https://stackoverflow.com/questions/10268892/outerheighttrue-gives-wrong-value
  setTimeout(function() {
    const cutoutHeight =
      location[0] === 'authors'
        ? Math.min(cutout.offsetHeight, 101)
        : cutout.offsetHeight

    document.documentElement.style.setProperty(
      '--archive-cutout-height',
      cutoutHeight + 'px'
    )
  }, 1)
}

export default ArchiveCutout
