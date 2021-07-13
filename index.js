/*1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.*/

let str = 'Привіт'
console.log(typeof str); //string

let num = 123
console.log(typeof num); //number

let flag = true
console.log(typeof flag) //boolean

let txt = "true"
console.log(typeof txt) //string

/*2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
    34,
    12,
    66,
    90,
    87
    Старайтесь використовувати різні оператори.
    Example: 88 = (16 / 2) * 11   */

let a1 = 34;
let a2 = 12;
let a3 = 66;
let a4 = 90;
let a5 = 87;

console.log(a3 * a4 + a2) //5952

console.log((a2 / a4) % a3) //0.13333333333333333

console.log(a5 * a2 + a1 - a2) //1066

console.log((a5 * a3) / a4) //63.8

console.log( (a5 + a1) * a2 ) //1452


/*3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
    5 % 3,
    3 % 5,
    5 + '3',
    '5' - 3
    75 + 'кг'*/

let a6 = 5 % 3;
console.log(a6); //2

let a7 = 3 % 5;
console.log(a7); //3

let a8 = 5 + '3';
console.log(a8); //53

let a9 = '5' - 3;
console.log(a9); //2

let a10 = 75 + 'кг';
console.log(a10); //75кг

/*4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
Значееня площі зберігати в змінній s.*/

let height = 23;
let width = 10;
let s = (height * width);

console.log(s) //230



/*5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
    результат поместите в переменную v.*/

let heightC = 10;
let dC = 4;
let V = (Math.PI * Math.pow((dC/2), 2) * heightC);

console.log(V) //125.66370614359172

/*6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).*/

let n = 3;
let m = 4;
let k = (Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2)));
console.log(k); //5

/*8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).*/

alert('Хітушка Тетяна Олександрівна \n 24 \n багато чого');

/*9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
    Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
    Вывести в документ содержимое переменной concatenation спомощью document.write*/

let str1 = 'Кто';
let str2 = 'ты';
let str3 = 'такой?';
let concatenation = str1 + ' ' + str2+ ' ' +str3;

document.write(`<h1> ${concatenation} <h1>`)

/*10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a = 5;
document.write(str + a + "<br/>");
document.write(str - a + "<br/>");
document.write(str * "2" + "<br/>");
document.write(str / 2 + "<br/>");*/

let st = "20";
let a = 5;

document.write(st + a + "<br/>"); //205
document.write(st - a + "<br/>"); //15
document.write(st * "2" + "<br/>"); //40
document.write(st / 2 + "<br/>"); //10

/*13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert*/

let z = prompt('Введіть перше число', '');
let x = prompt('Введіть друге число', '');

alert( z + x );

/*14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert*/

let name = prompt('Введите имя', '');
let surname = prompt('Введите фамилию', '');
let age = prompt('Введите возраст', '');

alert('Доброго вечера ' + name + ' ' + surname + ', мои поздравления что вам ' + age + '!');

/*=====================
======ДОП============
=====================*/




/*1. Три різних числа вводяться через prompt().
    За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)*/

let first = +prompt('Введите первое число', '');
let second = +prompt('Введите второе число', '');
let third = +prompt('Введите третье число', '');

let one;
let two;
let three;

//123
if (first <= second  && first <= third && second <= third) {
    one = first
    two = second
    three = third
}

//132
if (first <= second  && first <= third && second >= third) {
    one = first
    two = third
    three = second
}

//213
if (first >= second  && second <= third && first <= third) {
    one = second
    two = first
    three = third
}

//231
if (first >= second  && second <= third && first >= third) {
    one = second
    two = third
    three = first
}

//312
if (first <= second  && first >= third && second >= third) {
    one = third
    two = first
    three = second
}

//321
if (first >= second  && first <= third && second <= third) {
    one = third
    two = second
    three = first
}

alert('Сортировка по возрозстанию: ' + one + ' ' + two + ' ' + three);

/*2. Все параматры получаем с клавиатуры!!!!
    Имитируем поведение пешехода на перекстке.
    Если светофор зеленый - вывести "иди".
    Если светофор желтый - вывести "подожди".
    Если светофор красный - вывести "стой".
    Если светофор в аварийном режиме вывести "делай что хочешь"!*/



    /*3. Все параметры получаем с клавиатуры!!!!(prompt , confirm)
Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
    Улучшаем предыдущее задание.
    Если светофор зеленый и машин нет - вывести "иди".
    Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
Если светофор желтый и машины есть - вывести "жди".
    Если светофор желтый и машин нет - вывести "все рано жди".
    Если светофор красный и машин нет- вывести "стой все рано".
    Если светофор красный - и машины есть вывести "стой и жди".
    Если светофор в аварийном режиме вывести "делай что хочешь"!*/