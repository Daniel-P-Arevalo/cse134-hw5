function changeTheme (theme) {
    let root = document.documentElement;
    let toggle = document.getElementById('theme-toggle');
    let projects = document.getElementsByClassName('project-card');
    let footerNav = document.getElementById('footer-nav');
    if (theme === 'dark') {
        localStorage.setItem('theme', 'dark');
        root.style.backgroundColor = 'var(--dark-bg-color, black)';
        root.style.color = 'var(--dark-text-color, white)';
        toggle.style.backgroundColor = 'var(--dark-theme-toggle-color, white)';
        toggle.innerText = 'Theme (Dark)';
        footerNav.style.backgroundColor = 'var(--dark-footer-color, lightgray)';
        footerNav.style.borderColor = 'var(--dark-footer-border, white)';
        for (let i = 0; i < projects.length; i++) {
            let card = projects[i];
            card.style.backgroundColor = 'var(--dark-card-bg-color, gray)';
            card.style.borderColor = 'var(--dark-card-border, white)';
        }
    } else if (theme == 'light') {
        localStorage.setItem('theme', 'light');
        root.style.backgroundColor = 'var(--light-bg-color, honeydew)';
        root.style.color = 'var(--light-text-color, black)';
        toggle.style.backgroundColor = 'var(--light-theme-toggle-color, yellow)';
        toggle.innerText = 'Theme (Light)';
        footerNav.style.backgroundColor = 'var(--light-footer-color, white)';
        footerNav.style.borderColor = 'var(--light-footer-border, black)';
        for (let i = 0; i < projects.length; i++) {
            let card = projects[i];
            card.style.backgroundColor = 'var(--light-card-bg-color, white)';
            card.style.borderColor = 'var(--light-card-border, black)';
        }
    }
}

function switchTheme () {
    let theme = localStorage.getItem('theme');
    if (theme === 'light') {
        localStorage.setItem('theme', 'dark');
        changeTheme('dark');
    } else {
        localStorage.setItem('theme', 'light');
        changeTheme('light');
    }
}

function loadTheme () {
    let themeButton = document.createElement('button');
    themeButton.id = 'theme-toggle';
    themeButton.textContent = 'Theme (Light)';
    themeButton.addEventListener('click', switchTheme);
    
    console.log(document.querySelector('header'));
    document.querySelector('header').appendChild(themeButton);

    let theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        changeTheme('dark');
    } else {
        changeTheme('light');
    }
}

document.addEventListener('DOMContentLoaded', loadTheme);