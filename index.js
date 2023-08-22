const centeredText = document.getElementById("centeredText");
const changeTextButton = document.getElementById("changeTextButton");
const textInput = document.getElementById("textInput");

changeTextButton.addEventListener("click", () => {
  centeredText.textContent = "Text changed!";
});

textInput.addEventListener("input", () => {
  centeredText.textContent = textInput.value;
});
