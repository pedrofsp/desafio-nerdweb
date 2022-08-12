class Sidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div id="sidebar" class="all-show-side">
    <div class="content">
      <div class="header">
        <img src="./Assets/Images/Sidebar/logo@2x.png" />
        <span onclick="hideSidebar()">×</span>
      </div>
      <p class="topic">NERDWEB</p>
      <p class="topic">SERVICOS</p>
      <p class="topic">BLOG</p>
      <p class="topic">ATENDIMENTO</p>
      <div class="line"></div>
      <p class="topic blue">SITES</p>
      <p class="topic blue">REDES SOCIAIS</p>
      <p class="topic blue">E-COMMERCE</p>
      <p class="topic blue">MIDIA ONLINE</p>
      <p class="topic blue">LANDING PAGES</p>
    </div>
  </div>`;
  }
}

customElements.define('sidebar-component', Sidebar);
