let yourMoney = parseInt(window.prompt('Сколько у вас с собой есть денег?'));
let appleCount = parseInt(window.prompt('Сколько вы купили яблок?'));
let breadCount = parseInt(window.prompt('Сколько вы купили батонов хлеба?'));

let applePrice = parseInt(window.prompt('Сколько стоит одно яблоко?'));
let appleSum = Number(appleCount) * Number(applePrice);

let breadPrice = parseInt(window.prompt('Сколько стоит один батон хлеба?'));
let breadSum = Number(breadCount) * Number(breadPrice);

let countSum = Number(breadSum) + Number(appleSum);
let result = Number(yourMoney) >= Number(countSum);

document.write('<h1>У вас ' + yourMoney + ' денег, <br />a нужно ' + countSum +'.<br /><br />Возможность покупки:<br />' + result + '</h1>');