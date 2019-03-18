const Selector = {
  el: document.getElementById('layer-selector'),
  event: new Event('change'),
  setListener() {
    this.el.addEventListener('change', function(e) {
      const curr_month = 'sc_' + this.value + '18'
      Array.from(
        document.querySelectorAll('.sc_month:not(#' + curr_month + ')')
      ).forEach(el => el.classList.remove('is-active'))
      document.getElementById(curr_month).classList.add('is-active')
    })
  },
  setValue(val) {
    this.el.value = val
    this.el.dispatchEvent(this.event)
  },
  getValue() {
    return this.el.value
  },
  toggleDisabledStatus(disabled = true) {
    this.el.disabled = disabled
  }
}

export default Selector
