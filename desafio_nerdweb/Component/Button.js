class Button extends HTMLElement {
  connectedCallback() {
    const text = document.createElement('div');
    text.textContent = this.getAttribute('text');
    const color = document.createElement('div');
    color.textContent = this.getAttribute('color');
    this.innerHTML = `<button class="button-component button-${color.textContent}">${text.textContent}</button>`;
  }
}

customElements.define('button-component', Button);
