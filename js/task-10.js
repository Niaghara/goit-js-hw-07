// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает
// кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один
// параметр - число.Функция создает столько < div >, сколько
// указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего
//  на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое
// div#boxes, тем самым удаляя все созданные элементы.

"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const amount = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function createCollection() {
  const collection = [];
  for (let i = 0; i <= amount.value; i += 1) {
    const boxesEl = document.createElement("div");
    boxesEl.style.width = `${30 + 10 * i}px`;
    boxesEl.style.height = `${30 + 10 * i}px`;
    boxesEl.style.backgroundColor = getRandomHexColor();
    collection.push(boxesEl);
  }
  boxes.append(...collection);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  amount.value = 0;
}

btnCreate.addEventListener("click", createCollection);
btnDestroy.addEventListener("click", destroyBoxes);
