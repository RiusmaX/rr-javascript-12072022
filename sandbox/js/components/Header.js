class Header extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render()
      this.rendered = true
    }

  }

  render () {
    let element = `
      <header>
        <h1>Mon application en JS !</h1>
      </header>
    `
    this.innerHTML = element
  }
}

customElements.define('c-header', Header)