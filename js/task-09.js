// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const refs = {
  btnChangeColor: document.querySelector(".change-color"),
  spanText: document.querySelector(".color")
};

refs.btnChangeColor.addEventListener("click", onChangeBgColor);

function onChangeBgColor() {
  document.body.style.backgroundColor = getRandomHexColor();

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  // console.log(document.body.style.backgroundColor);
  refs.spanText.textContent = document.body.style.backgroundColor;
}
