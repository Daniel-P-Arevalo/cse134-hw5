function handleError(message) {
    let errorField = document.getElementById('errors');
    if (errorField.style.opacity > 0) {
        clearInterval(fade);
    }

    errorField.style.opacity = 1;
    form_errors.push(message);
    errorField.textContent = message;
    fade = setTimeout(()=>{errorField.style.opacity = 0;}, '1500');
}

function checkName() {
    let regEx = /[^a-zA-z .'\-]+$/g;
    let name = document.getElementById('name');

    if (!name.checkValidity()) {
        let illegalChars = regEx.exec(name.value);
        name.value = name.value.replace(regEx, '');
        if (illegalChars != null) {
            name.setCustomValidity('Illegal Character: ' + illegalChars[0]);
        } else if (name.value == '') {
            name.setCustomValidity('Please Enter your Name');
        } else {
            name.setCustomValidity('');
        }

        if (name.style.backgroundColor != 'rgb(255, 125, 125)') {
            clearInterval(flash);
        }
        name.style.backgroundColor = 'rgb(255, 125, 125)';
        handleError('Name ERROR - Illegal Character: ' + illegalChars[0]);
        flash = setTimeout(()=>{name.style.backgroundColor = 'var(--very-light-gray, lightgray)';}, '500');
    }
}

function checkEmail() {
    let email = document.getElementById('email');

    if (!email.checkValidity()) {
        if (email.value == '') {
            email.setCustomValidity('Please Enter your Email');
        } else {
            email.setCustomValidity('');
        }

        if (email.style.backgroundColor != 'rgb(255, 125, 125)') {
            clearInterval(flash);
        }
        email.style.backgroundColor = 'rgb(255, 125, 125)';
        handleError('Email ERROR - Invalid Email');
        flash = setTimeout(()=>{email.style.backgroundColor = 'var(--very-light-gray, lightgray)';}, '500');
    }
}

function checkComments() {
    let regEx = /[^a-zA-Z0-9?!.,()$%"':;\n  ]+$/g;
    let comments = document.getElementById('comments');

    let illegalChars = regEx.exec(comments.value);
    comments.value = comments.value.replace(regEx, '');
    if (illegalChars != null) {
        comments.setCustomValidity('Illegal Character: ' + illegalChars[0]);

        if (comments.style.backgroundColor != 'rgb(255, 125, 125)') {
            clearInterval(flash);
        }
        comments.style.backgroundColor = 'rgb(255, 125, 125)';
        handleError('Comments ERROR - Illegal Character: ' + illegalChars[0]);
        flash = setTimeout(()=>{comments.style.backgroundColor = 'var(--very-light-gray, lightgray)';}, '500');
    } else if (comments.value == '') {
        comments.setCustomValidity('Please Enter your Comments');
    }else {
        comments.setCustomValidity('');
    }
}

function updateCharCounter() {
    let comments = document.getElementById('comments');
    let infoField = document.getElementById('info');
    let maxlength = comments.getAttribute('maxlength');

    if (comments.value.length == maxlength) {
        handleError('Comments ERROR - Character Limit Reached');
    }

    let remainingChars = maxlength-comments.value.length;
    let percentUsed = remainingChars/maxlength;

    if (percentUsed == 0) {
        infoField.style.borderColor = 'rgb(255, 75, 75)';
        infoField.style.backgroundColor = 'rgb(255, 215, 215)';
    } else if (percentUsed < 0.33) {
        infoField.style.borderColor = 'rgb(255, 165, 75)';
        infoField.style.backgroundColor = 'rgb(255, 200, 160)';
    } else if (percentUsed < 0.66) {
        infoField.style.borderColor = 'rgb(255, 255, 75)';
        infoField.style.backgroundColor = 'rgb(254, 254, 180)';
    } else {
        infoField.style.borderColor = 'rgb(75, 75, 255)';
        infoField.style.backgroundColor = 'rgb(215, 215, 255)';
    }

    infoField.value = remainingChars + '/' + maxlength + ' Characters Remaining';
}

let fade;
let flash;
let comments = document.getElementById('comments');
let infoField = document.getElementById('info');
let errorField = document.getElementById('errors');
let form_errors = [];

let maxlength = comments.getAttribute('maxlength');
infoField.value = maxlength + '/' + maxlength + ' Characters Remaining';

document.getElementById('name').addEventListener('input', checkName);

document.getElementById('email').addEventListener('input', checkEmail);

comments.addEventListener('input', checkComments);
comments.addEventListener('input', updateCharCounter);

document.getElementById('form-submit').addEventListener('click', () => 
    document.getElementById('form-errors').value = JSON.stringify(form_errors));