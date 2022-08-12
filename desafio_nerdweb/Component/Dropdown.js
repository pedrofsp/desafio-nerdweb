class Dropdown extends HTMLElement {
  connectedCallback() {
    const topics = document.createElement('div');
    topics.textContent = this.getAttribute('topics');
    const title = document.createElement('div');
    title.textContent = this.getAttribute('title');
    const color = document.createElement('div');
    color.textContent = this.getAttribute('color');
    const array = topics.textContent.split(' ');
    this.innerHTML = `<div class="dropdown">
                        <button class="drop-button ${color.textContent}">
                          ${title.textContent} <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                          ${array.map((item) => {
                            return `<a href="#">${item}</a>`;
                          })}
                        </div>
                      </div>`;
  }
}

customElements.define('dropdown-component', Dropdown);
