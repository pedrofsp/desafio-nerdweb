class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="all-footer">
    <div class="content">
      <div class="top-flex">
        <img src="./Assets/Images/Sidebar/logo@2x.png" />
        <div class="block">
          <h4>NERDWEB</h4>
          <p>Sobre</p>
          <p>Nossos Princípios</p>
          <p>Funcionários</p>
          <p>Trabalhe Conosco</p>
        </div>
        <div class="block">
          <h4>AJUDA</h4>
          <p>Prazos e entregas</p>
          <p>Troca e Devoluções</p>
          <p>Políticas de Privacidade</p>
        </div>
        <div class="block">
          <h4>ATENDIMENTO</h4>
          <p>Duvidas Frequentes</p>
          <p>(41) 3333-3333</p>
          <p>teste@nerdweb.com.br</p>
        </div>
        <div class="block">
          <h4>HORÁRIO DE ATENDIMENTO</h4>
          <p class="lightblue">De segunda a sexta-feira</p>
          <p class="lightblue">das 08h00 às 12h00 e</p>
          <p class="lightblue">das 13h00 às 17h40</p>
        </div>
      </div>
      <div class="line"></div>
      <div class="bottom-flex">
        <p>2022 Nerweb - Extreme Hosting, todos os direitos reservados</p>
        <div class="media">
          <p>Fique em sintonia com a gente</p>
          <div class="icons">
            <i class="fa fa-2x fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-2x fa-linkedin" aria-hidden="true"></i>
            <i class="fa fa-2x fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-2x fa-youtube-play" aria-hidden="true"></i>
            <i class="fa fa-2x fa-facebook-official" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  }
}

customElements.define('footer-section', Footer);
