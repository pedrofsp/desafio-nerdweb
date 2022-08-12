class Services extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="all-services">
    <div class="content">
      <div class="left">
        <h3>
          Descubra os serviços Nerdweb
          <span>que mais combinam com a sua empresa</span>
        </h3>
        <div class="center-button">
          <button-component
            text="VER SERVICOS"
            color="blue"
          ></button-component>
        </div>
      </div>
      <div class="middle">
        <div class="first"></div>
        <div class="second"></div>
      </div>
      <div class="cards">
        <services-card
          img="./Assets/Images/Services/alt_route_black_24dp.svg"
          title="titulo"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ></services-card>
        <services-card
          img="./Assets/Images/Services/headset_mic_black_24dp.svg"
          title="titulo"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ></services-card>
        <services-card
          img="./Assets/Images/Services/inventory_black_24dp.svg"
          title="titulo"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ></services-card>
      </div>
    </div>
  </div>`;
  }
}

customElements.define('services-section', Services);
