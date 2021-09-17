const menu = document.querySelector('#humburger');
const sub = document.querySelector('.submenu');

menu.addEventListener('click', ()=>{
sub.classList.remove('d-none');
menu.setAttribute('src', '/images/icon-close.svg')
sub.style.animation="fadeOut ease-in-out 2s"
})
sub.addEventListener('click', ()=>{
    sub.classList.add('d-none')
sub.style.animation="fadeUp ease-in-out 2s"

menu.setAttribute('src', '/images/icon-hamburger.svg')
})
//testimonial slider desktop
const left = document.querySelector('.dir-left');
const right = document.querySelector('.dir-right');
left.addEventListener('click', ()=>{
    anisha.classList.remove('d-none');
    shanai.classList.add('d-none');
    anisha.style.animation="none"
})

right.addEventListener('click', ()=>{
    anisha.classList.add('d-none');
    shanai.classList.remove('d-none');
    shanai.style.animation="none"
})

//testimonial slider mobile
const mails = document.querySelectorAll('input[type="radio"]');
const anisha = document.querySelector('.li');
const ali = document.querySelector('.ali');
const watts = document.querySelector('.watts');
const shanai =document.querySelector('.shanai');

mails.forEach((mail)=>{
    mail.addEventListener('click', ()=>{
        if(mail.value == '01'){
            anisha.classList.remove('d-none');
            anisha.style.animation='fadeIn ease 2s'
        }
        else{
            anisha.classList.add('d-none');
        }
        if(mail.value == '02'){
            ali.classList.remove('d-none');
            ali.style.animation='fadeIn ease 2s'

        }
        else{
            ali.classList.add('d-none')
        }
        if(mail.value == '03'){
            watts.classList.remove('d-none');
            watts.style.animation='fadeIn ease 2s'
        }
        else{
            watts.classList.add('d-none')
        }
        if(mail.value == '04'){
            shanai.classList.remove('d-none');
            shanai.style.animation='fadeIn ease 2s'
        }
        else{
            shanai.classList.add('d-none')
            
        }
    })
})
//mail validation

const valid = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
const mail = document.querySelector('input[type="email"]');
const go = document.querySelector('.go');
const warning = document.querySelector('.warn');
go.addEventListener("click", ()=>{
    let result = valid.test(mail.value)
if(result){
    warning.classList.add("d-none");
    mail.style.border ="3px solid green"
}
else{
    warning.classList.remove('d-none')
    mail.style.border ="3px solid red"
}
})

