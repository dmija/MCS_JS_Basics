//1
document.body.style.backgroundColor = prompt('Какой будет фон у страницы?');

//2
const Page = document.querySelector('.page'); 
Page.style.color = prompt('Какой будет цвет текста на странице?');

//3
const Name = document.querySelector('.name');
Name.innerHTML = (prompt('Как зовут человека, который вас вдохновляет?'));

//4
const Image = document.querySelector('img');
Image.setAttribute('src', prompt('Введите адрес картинки'));

//5
const About = document.querySelector('.shortBio');
About.innerHTML = (prompt('Введите текст страницы'));

//6
const Animation = document.querySelector('.shortBio');
Animation.className += ' animated';