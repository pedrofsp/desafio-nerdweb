class Team extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="all-team">
      <div class="content">
        <div class="center-text">
          <h4>Faca parte do nosso time de nerds</h4>
        </div>
        <div class="center-text">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>

        <div class="center-button">
          <button-component text="CADASTRE-SE" color="blue"></button-component>
        </div>
      </div>
    </div>`;
  }
}

customElements.define('team-section', Team);
