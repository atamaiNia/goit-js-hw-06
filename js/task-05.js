// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const refs = {
  input: document.querySelector("#name-input"),
  spanText: document.querySelector("#name-output")
};

function OnInputWriteName(name) {
  if (name.target.value !== "") {
    refs.spanText.textContent = name.target.value;
  } else {
    refs.spanText.textContent = "Anonymous";
  }
}

refs.input.addEventListener("input", OnInputWriteName);
