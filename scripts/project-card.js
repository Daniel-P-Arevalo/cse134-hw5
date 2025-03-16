class ProjectCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const style = document.createElement('style');
        style.textContent = `
                project-card {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    background-color: white;
                    border: solid black 0.25em;
                    border-radius: 1em;
                    margin: 1em;
                    padding: 1em;
                }
                project-card h2 {
                    margin-left: 0em;
                }
                project-card p {
                    width: 80%;
                }`;

        const title = this.getAttribute('title') || 'Title Not Found';
        const date = this.getAttribute('date') || 'Date Not Found';
        const link = this.getAttribute('link') || '';
        const description = this.getAttribute('description') || 'Description Not Found';
        const img = this.getAttribute('img') || '';
        const imgAlt = this.getAttribute('imgAlt') || 'Image Alt Not Found';

        this.appendChild(style);
        this.innerHTML += `
            <div class="project-text">
                <hgroup>
                    <h2>${title}</h2>
                    <time>${date}</time>
                </hgroup>
                <br>
                <a href="${link}">Further Reading</a>
                <br><br>
                <p>${description}</p>
            </div>
            <picture>
                <source srcset="${img}" media="(max-width: 425px)" width="275" height="200">
                <source srcset="${img}" media="(max-width: 768px)" width="650" height="450">
                <source srcset="${img}" media="(max-width: 1024px)" width="750" height="550">
                <img src="${img}" alt="${imgAlt}" width="600" height="400">
            </picture>`;
    }
}

customElements.define('project-card', ProjectCard);