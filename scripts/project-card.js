class ProjectCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const style = document.createElement('style');
        style.textContent = `
                .project-card {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    background-color: white;
                    border: solid black 0.25em;
                    border-radius: 1em;
                    margin: 1em;
                    padding: 1em;
                }
                .project-card time {
                    font-style: italic;
                }
                .project-card h2 {
                    margin-left: 0em;
                }
                .project-card p {
                    width: 80%;
                }
                @media (max-width: 320px) {
                    .project-card {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                }`;

        const title = 'Title';
        const date = 'Date';
        const link = '';
        const description = 'Description';
        const img = '';
        const imgAlt = 'Image Alt';

        this.appendChild(style);
        this.innerHTML += `
        <div class="project-card">
            <section class="project-text">
                <hgroup>
                    <h2>${title}</h2>
                    <time>${date}</time>
                </hgroup>
                <br>
                <a href="${link}">Further Reading</a>
                <br><br>
                <p>${description}</p>
            </section>
            <picture>
                <source srcset="${img}" media="(max-width: 425px)" width="225" height="225">
                <source srcset="${img}" media="(max-width: 768px)" width="350" height="350">
                <source srcset="${img}" media="(max-width: 1024px)" width="375" height="375">
                <img src="${img}" alt="${imgAlt}" width="375" height="375">
            </picture>
        </div>`;
    }
}

customElements.define('project-card', ProjectCard);