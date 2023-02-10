// Напиши скрипт который, при наборе текста в инпуте input#name-input
// (событие input), подставляет его текущее значение в span#name
// - output.Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
"use strict";
const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", (Event) => {
  if (Event.currentTarget.value === "") {
    refs.nameLabel.textContent = "Anonymous";
  } else {
    refs.nameLabel.textContent = Event.currentTarget.value;
  }
});
