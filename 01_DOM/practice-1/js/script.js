document.body.style.backgroundColor = prompt('Какой будет фон у страницы?');

document.querySelector('.page').style.color = prompt('Какой будет цвет текста на странице?');

document.querySelector('.name').innerHTML = (prompt('Как зовут человека, который вас вдохновляет?'));

document.querySelector('img').setAttribute('src', prompt('Введите адрес картинки'));

document.querySelector('.shortBio').innerHTML = (prompt('Введите текст страницы'));

document.querySelector('.shortBio').className += ' animated';