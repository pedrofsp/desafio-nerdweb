class Products extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="all-products">
    <div class="content">
      <h4 class="title">Conheca todos <span>produtos Nerdweb</span></h4>
      <div class="flex-cards">
        <products-card
          img="./Assets/Images/Products/LAPTOP@2x.png"
          title="SITES"
        ></products-card>
        <products-card
          img="./Assets/Images/Products/PHONE@2x.png"
          title="E-COMMERCE"
        ></products-card>
        <products-card
          img="./Assets/Images/Products/SHOP@2x.png"
          title="REDES"
        ></products-card>
        <products-card
          img="./Assets/Images/Products/LAPTOP@2x.png"
          title="SITES"
        ></products-card>
        <products-card
          img="./Assets/Images/Products/PHONE@2x.png"
          title="E-COMMERCE"
        ></products-card>
        <products-card
          img="./Assets/Images/Products/SHOP@2x.png"
          title="REDES"
        ></products-card>
        <products-card
          img="./Assets/Images/Products/LAPTOP@2x.png"
          title="SITES"
        ></products-card>
        <products-card
          img="./Assets/Images/Products/PHONE@2x.png"
          title="E-COMMERCE"
        ></products-card>
        <products-card
          img="./Assets/Images/Products/SHOP@2x.png"
          title="REDES"
        ></products-card>
        <products-card
          img="./Assets/Images/Products/LAPTOP@2x.png"
          title="SITES"
        ></products-card>
        <products-card
          img="./Assets/Images/Products/PHONE@2x.png"
          title="E-COMMERCE"
        ></products-card>
        <products-card
          img="./Assets/Images/Products/SHOP@2x.png"
          title="REDES"
        ></products-card>
      </div>
      <div class="center-button">
        <button-component
          text="VER TODOS PRODUTOS"
          color="blue"
        ></button-component>
      </div>
    </div>
  </div>`;
  }
}

customElements.define('products-section', Products);
