// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);

const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);

const valueRef = document.querySelector("#value");

let counterValue = 0;

function OnClickBtnIncreaseValue() {
  counterValue += 1;
  console.log("Клікнули на інкремент");
  valueRef.textContent = counterValue;
}

function OnClickBtnDecreaseValue() {
  counterValue -= 1;
  // if (counterValue < 0) {
  //   return;
  // }
  console.log("Клікнули на дескремент");
  valueRef.textContent = counterValue;
}

incrementBtnRef.addEventListener("click", OnClickBtnIncreaseValue);

decrementBtnRef.addEventListener("click", OnClickBtnDecreaseValue);
