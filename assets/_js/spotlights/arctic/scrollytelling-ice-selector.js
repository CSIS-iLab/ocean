const IceSelector = {
  listItems: Array.from(
    document.querySelectorAll('.arctic__legend-key--ice:not(.ice--2018)')
  ),
  inputs: Array.from(
    document.querySelectorAll('.arctic__legend-key--ice input')
  ),
  setListener() {
    this.inputs.forEach(el => {
      el.addEventListener('change', function(e) {
        let layer = 'sc_mar' + this.value + '-av'
        if (this.value == 18) {
          layer = 'sc_mar' + this.value
        }
        document.getElementById(layer).classList.toggle('is-active')
      })
    })
  },
  toggleVisibility(action) {
    this.listItems.forEach(el => {
      el.classList[action]('is-active')
    })
  },
  toggleDisabledStatus(disabled = true) {
    this.inputs.forEach(input => (input.disabled = disabled))
  },
  toggleCheckedStatus(checked = true) {
    this.inputs.forEach(input => (input.checked = checked))
  }
}

export default IceSelector
