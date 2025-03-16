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
    let cardData = JSON.parse(localStorage.getItem('cardData'));

    for (let i = 0; i < cardList.length; i++) {
        let card = cardList[i];
        if (cardData) {
            let project = cardData.record[i];
            card.setAttribute('title', `${project.title}`);
            card.setAttribute('date', `${project.date}`);
            card.setAttribute('link', `${project.link}`);
            card.setAttribute('description', `${project.description}`);
            card.setAttribute('img', `${project.img}`);
            card.setAttribute('imgAlt', `${project.imgAlt}`);
        } else {
            card.setAttribute('title', 'Title Content Not Found');
            card.setAttribute('date', 'Date Content Not Found');
            card.setAttribute('link', '');
            card.setAttribute('description', 'Description Content Not Found');
            card.setAttribute('img', '');
            card.setAttribute('imgAlt', 'Image Alt Content Not Found');
        }

        loadContent(card);
    }
}

async function loadRemote() {
    let cardList = document.querySelectorAll('project-card');
    let response = await fetch('https://api.jsonbin.io/v3/b/67d693488561e97a50ecf9b4');
    let cardData = await response.json();

    localStorage.setItem('cardData', JSON.stringify(cardData));

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