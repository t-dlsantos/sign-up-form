const password = document.querySelector("#password");
const confirmPassword = document.querySelector('#confirm_password');
const errorParagraph = document.querySelector('.error-paragraph');


password.addEventListener('input', () => {
    if (confirmPassword.value === password.value) {
        errorParagraph.style.display = 'none';
    } else {
        errorParagraph.style.display = 'block';
    }
});

confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value === password.value) {
        errorParagraph.style.display = 'none';
    } else {
        errorParagraph.style.display = 'block';
    }
});