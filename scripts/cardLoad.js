function loadContent(card) {
    let title = card.getAttribute('title');
    let date = card.getAttribute('date');
    let link = card.getAttribute('link');
    let description = card.getAttribute('description');
    let img = card.getAttribute('img');
    let imgAlt = card.getAttribute('imgAlt');
    
    card.querySelector('h2').innerHTML = title;
    card.querySelector('time').innerHTML = date;
    card.querySelector('a').setAttribute('href', link);
    card.querySelector('p').innerHTML = description;

    let sources = card.querySelectorAll('source');
    sources[0].setAttribute('srcset', img);
    sources[1].setAttribute('srcset', img);
    sources[2].setAttribute('srcset', img);
    card.querySelector('img').setAttribute('src', img);
    card.querySelector('img').setAttribute('alt', imgAlt);
}

function loadLocal() {
    let cardList = document.querySelectorAll('project-card');
    for (let i = 0; i < cardList.length; i++) {
        let card = cardList[i];
        let title = localStorage.getItem('title-' + i) || 'Title Load Failed';
        let date = localStorage.getItem('date-' + i) || 'Date Load Failed';
        let link = localStorage.getItem('link-' + i) || '';
        let description = localStorage.getItem('description-' + i) || 'Description Load Failed';
        let img = localStorage.getItem('img-' + i) || '';
        let imgAlt = localStorage.getItem('imgAlt-' + i) || 'Image Alt Load Failed';

        card.setAttribute('title', `${title}`);
        card.setAttribute('date', `${date}`);
        card.setAttribute('link', `${link}`);
        card.setAttribute('description', `${description}`);
        card.setAttribute('img', `${img}`);
        card.setAttribute('imgAlt', `${imgAlt}`);

        loadContent(card);
    }
}

async function loadRemote() {
    let cardList = document.querySelectorAll('project-card');
    let response = await fetch('https://api.jsonbin.io/v3/b/67d693488561e97a50ecf9b4');
    let cardData = await response.json();

    let cardIndx = 0;
    cardData.record.forEach(project => {
        let card = cardList[cardIndx];
        card.setAttribute('title', `${project.title}`);
        card.setAttribute('date', `${project.date}`);
        card.setAttribute('link', `${project.link}`);
        card.setAttribute('description', `${project.description}`);
        card.setAttribute('img', `${project.img}`);
        card.setAttribute('imgAlt', `${project.imgAlt}`);

        loadContent(card);
        cardIndx++;
    });
}

let localButton = document.getElementById('load-local');
let remoteButton = document.getElementById('load-remote');

localButton.addEventListener('click', loadLocal);
remoteButton.addEventListener('click', loadRemote);