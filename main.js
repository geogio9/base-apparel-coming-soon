const email = document.querySelector('.email');
const footerError = document.querySelector('.footer_error');
const errorSvg = document.querySelector('.error_svg');
const error = document.querySelector('.error');
const btn = document.querySelector('.btn');;
const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


btn.addEventListener('click', () => {
    if (reg.test(email.value)) {
        alert('Your email is valid');
        return email.value = '';
    } else {
        clickFu()
    }
})

function clickFu() {

    footerError.style.border = '2px solid #F96464'
    footerError.style.borderRadius = '28px'
    errorSvg.style.display = 'block'
    error.style.display = 'block'
    email.style.color = '#423A3A'
    email.style.opacity = 'none'
}