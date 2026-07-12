const greetingButton = document.querySelector("#greetingButton");
const greetingMessage = document.querySelector("#greetingMessage");

greetingButton.addEventListener("click", () => {
  greetingMessage.textContent = "ยินดีต้อนรับสู่ Portfolio ของฉัน! 🎉";
});
