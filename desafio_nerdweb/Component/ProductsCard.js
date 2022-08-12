class ProductsCard extends HTMLElement {
  connectedCallback() {
    const title = document.createElement('div');
    title.textContent = this.getAttribute('title');
    const img = document.createElement('div');
    img.textContent = this.getAttribute('img');
    this.innerHTML = `<div class="all-card-products">
    <div class="center-image">
      <img src="${img.textContent}" />
    </div>
    <h4>${title.textContent}</h4>
  </div>`;
  }
}

customElements.define('products-card', ProductsCard);
