function changeTheme (theme) {
    let root = document.documentElement;
    let toggle = document.getElementById('theme-toggle');
    if (theme === 'dark') {
        localStorage.setItem('theme', 'dark');
        root.style.backgroundColor = 'rgb(0, 15, 0)';
        root.style.color = 'white';
        toggle.style.backgroundColor = 'white';
        toggle.innerText = 'Theme (Dark)';
    } else {
        localStorage.setItem('theme', 'light');
        root.style.backgroundColor = 'var(--pale-green, honeydew)';
        root.style.color = 'black';
        toggle.style.backgroundColor = 'yellow';
        toggle.innerText = 'Theme (Light)';
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