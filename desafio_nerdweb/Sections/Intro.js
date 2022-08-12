class Intro extends HTMLElement {
  connectedCallback() {
    const text = document.createElement('div');
    text.textContent = this.getAttribute('text');
    this.innerHTML = `<div class="all-intro">
    <img
      class="img-standart"
      src="./Assets/Images/Intro/banner@2x.png"
      alt=""
    />
    <img
      class="img-mobile"
      src="./Assets/Images/Intro/banner-mobile@2x.png"
      alt=""
    />
  </div>`;
  }
}

customElements.define('intro-section', Intro);
