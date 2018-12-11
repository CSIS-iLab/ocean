const ResizeComponents = () => {
  let doc = document.querySelector('.spotlight-component.document.sc--float-right')

  window.addEventListener('resize', () => {
    if(window.innerWidth > 400) {
      console.log('this is working!?!?')
    } else {
      doc.removeClass('.sc-float-right')
      doc.addClass('.sc-full')
    }
  })

  console.log('testing resizing components')
}

export default ResizeComponents
