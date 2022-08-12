class Swiper extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="all-swiper">
    <div id="swipper" class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <services-card
            img="./Assets/Images/Services/alt_route_black_24dp.svg"
            title="titulo"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></services-card>
        </div>
        <div class="swiper-slide">
          <services-card
            img="./Assets/Images/Services/headset_mic_black_24dp.svg"
            title="titulo"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></services-card>
        </div>
        <div class="swiper-slide">
          <services-card
            img="./Assets/Images/Services/inventory_black_24dp.svg"
            title="titulo"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></services-card>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"><p><</p></div>
      <div class="swiper-button-next"><p>></p></div>
      <div class="swiper-scrollbar"></div>
    </div>
    <div class="center-button">
      <button-component text="VER SERVICOS" color="blue"></button-component>
    </div>
  </div>`;
  }
}

customElements.define('swiper-section', Swiper);
