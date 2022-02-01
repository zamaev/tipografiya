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

document.querySelector('.popup').addEventListener('click', e => {
    if (e.target.classList.contains('popup')) {
        closePopup();
    }
});

let flag = false;
document.onscroll = () => {
    if (flag == false) {
        flag = true;
        document.querySelectorAll('iframe').forEach(el => {
            el.src = el.dataset.src;
        });
    }
}

document.querySelectorAll('input[type="tel"]').forEach(el => {
    IMask(el, { mask: '+{7} (000) 000-00-00' });
});

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return await response.json();
}

Object.entries(document.forms).forEach(el => {

    let form = el[1];
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let data = {}
        form.querySelectorAll('input').forEach(el => {
            data[el.name] = el.value;
        });

        postData('/handler.php', data)
        .then((data) => {
            let message = data.message;
            console.log(message);
        });

    });
});

