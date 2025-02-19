const inputField = document.getElementById("input_field");
const submitButton = document.getElementById("submit_button");
const resultMessage = document.getElementById("result_message");

let randomNumber = Math.floor(Math.random() * 11) + 10;

submitButton.addEventListener("click", function () {
    let userGuess = parseInt(inputField.value);

    if (isNaN(userGuess)) {
        resultMessage.innerText = "❌ Please enter a valid number!";
        resultMessage.classList = "text-red-500 opacity-100 transition-opacity duration-500";
        inputField.classList.add("shake");  // Shake input field
        setTimeout(() => inputField.classList.remove("shake"), 300);
    } else if (userGuess > randomNumber) {
        resultMessage.innerText = "📈 Too high!";
        resultMessage.classList = "text-yellow-400 opacity-100 transition-opacity duration-500";
        inputField.classList.add("shake");
        setTimeout(() => inputField.classList.remove("shake"), 300);
    } else if (userGuess < randomNumber) {
        resultMessage.innerText = "📉 Too low!";
        resultMessage.classList = "text-orange-400 opacity-100 transition-opacity duration-500";
        inputField.classList.add("shake");
        setTimeout(() => inputField.classList.remove("shake"), 300);
    } else {
        resultMessage.innerText = "🎉 Congratulations! You got it right!";
        resultMessage.classList = "text-green-500 opacity-100 transition-opacity duration-500";
        confetti(); // Trigger confetti animation
    }
});
