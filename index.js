// 1. Отменять действие по умолчанию для события submit, Если форма проходит проверку валидности, выводите в консоль значения полей формы и очищайте форму
const form = document.getElementById("registration");
form.addEventListener("submit", (e) => {
  // действия с данными
  e.preventDefault();
  // выводит в консоль введенные данные
  console.log({
    name: document.getElementById("username").value,
    email: document.getElementById("email").value,
    age: document.getElementById("age").value,
    password: document.getElementById("password").value,
    profession: document.getElementById("profession").value,
  });
  e.target.reset(); // очищаем форму
});

// //3. Кнопка отправки должна быть неактивна (disabled), пока все поля формы не будут правильно заполнены и не будет отмечен чекбокс согласия с условиями
function checkParams() {
  const profession = document.getElementById("profession");
  const button = document.getElementById("submitBtn");
  const name = document.getElementById("username");
  const isValidName = name.value.length != 0;

  const email = document.getElementById("email");
  // const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  const isValidEmail = email.value.length != 0;
  // && emailRegex.test(email)

  const age = document.getElementById("age");
  const isValidAge = age.value.length != 0;

  const password = document.getElementById("password");
  // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
  const isValidPassword = password.value.length != 0;
  // && passwordRegex.test(email)

  const checkbox = document.getElementById("checkboxApproval");
  const isValidCheckbox = checkbox.checked;

  if (
    isValidName &&
    isValidEmail &&
    isValidAge &&
    isValidPassword &&
    isValidCheckbox
  ) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "disabled");
  }
}
const onChangeInput = () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach(function (input) {
    input.addEventListener("change", checkParams);
  });
};
onChangeInput();

// // Бонусное задание: реализуйте дополнительные обработчики событий focus и blur для каждого поля

const setColor = () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach(function (input) {
    input.addEventListener("focus", function () {
      input.style.outline = "none";
      input.style.border = "4px solid #eb753fe6";
    });
    input.addEventListener("blur", function () {
      input.style.border = "";
    });
  });
};
setColor();
