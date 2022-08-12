class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="all-navbar">
    <div class="main-nav">
      <div class="content">
        <div class="left-flex">
          <img src="./Assets/Images/Navbar/logo@2x.png" />
          <div class="topics">
            <a href="#">Nerdweb</a><a href="#">Servicos</a><a href="#">Blog</a
            ><a href="#">Atendimnto</a>
          </div>
          <div class="right-mobile">
            <div class="icons">
              <i class="fa fa-2x fa-solid fa-user-circle-o"></i>
              <i class="fa fa-2x fa-solid fa-shopping-cart"></i>
            </div>
            <div onclick="showSidebar()" class="toggle">
              <i class="fa fa-2x fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
        <div class="right-flex">
          <div class="dropdown-center">
            <dropdown-component
              title="DIA A DIA"
              topics="item1 item2 item3"
              color="black"
            ></dropdown-component>
          </div>
          <div class="icons">
            <i class="fa fa-2x fa-solid fa-user-circle-o"></i>
            <i class="fa fa-2x fa-solid fa-shopping-cart"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="sub-nav">
      <div class="content">
        <div class="flex-left">
          <div class="dropdown-center">
            <dropdown-component
              title="SITES"
              topics="item1 item2 item3"
              color="white"
            ></dropdown-component>
          </div>
          <div class="topics">
            <a href="#">REDES SOCIAIS</a><a href="#">E-COMMERCE</a
            ><a href="#">MIDIA ONLINE</a><a href="#">LANDING PAGE</a>
          </div>
        </div>
        <div class="search-bar">
          <input type="text" placeholder="Digite sua pesquisa" />
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>`;
  }
}

customElements.define('navbar-component', Navbar);
