function openPopup() {
    document.querySelector('body').classList.add('popup__open');
    document.querySelector('.popup').classList.add('popup__open');
}

function closePopup() {
    document.querySelector('body').classList.remove('popup__open');
    document.querySelector('.popup').classList.remove('popup__open');
}

document.querySelectorAll('.popup__button').forEach(el => {
    el.addEventListener('click', e => {
        openPopup();
    })
});

document.querySelectorAll('.popup__close').forEach(el => {
    el.addEventListener('click', e => {
        closePopup();
    })
});
