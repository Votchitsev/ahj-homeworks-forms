class Popover {
  constructor (element, content) {
    this.popover = element
    this.content = content

    this.onClick = this.onClick.bind(this)
    this.createPopover = this.createPopover.bind(this)
  }

  addListeners () {
    const btn = this.popover.querySelector('.popover-btn')
    btn.addEventListener('click', (event) => this.onClick(event))
  }

  onClick (event) {
    this.createPopover(event)
  }

  createPopover (event) {
    const popover = this.popover.querySelector('.popover')
    popover.classList.toggle('active')

    const popoverContent = this.popover.querySelector('.popover-content')
    popoverContent.textContent = this.content

    const popoverBottom = this.popover.querySelector('.popover-bottom')
    const buttonRect = event.target.getBoundingClientRect()

    const popoverBottomRect = popoverBottom.getBoundingClientRect()
    const popoverRect = popover.getBoundingClientRect()

    if (popover.classList.contains('active')) {
      popover.style.top = `${buttonRect.y - popoverRect.height - popoverBottomRect.height}px`
    } else {
      popover.style.top = 0
    }

    popoverBottom.style.top = `${Math.floor(
      popoverRect.bottom - (popoverBottomRect.height * Math.sqrt(2) / 2)
      )
    }px`
  }
}

export default Popover
