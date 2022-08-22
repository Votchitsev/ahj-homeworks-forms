import Popover from './Popover'

document.addEventListener('DOMContentLoaded', () => {
  const popoverHtmlEl = document.querySelector('.button-container')
  const content = "And here's some amazing content. It's very engaging. Right?"
  const popover = new Popover(popoverHtmlEl, content)
  popover.addListeners()
})

/* text example:
* And here's some amazing content. It's very engaging. Right?
*/
