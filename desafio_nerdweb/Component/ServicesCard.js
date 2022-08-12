class ServicesCard extends HTMLElement {
  connectedCallback() {
    const title = document.createElement('div');
    title.textContent = this.getAttribute('title');
    const text = document.createElement('div');
    text.textContent = this.getAttribute('text');
    const img = document.createElement('div');
    img.textContent = this.getAttribute('img');
    this.innerHTML = `<div class="all-services-card">
    <div class="content-card">
      <div class="image-center">
        <img src="${img.textContent}" />
      </div>
      <div class="title-card">${title.textContent}</div>
      <p>${text.textContent}</p>
    </div>
  </div>`;
  }
}

customElements.define('services-card', ServicesCard);
