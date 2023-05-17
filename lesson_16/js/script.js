window.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.bill-order__input[required]');
    inputs.forEach(function(input) {
      input.placeholder += ' *';
    });
});

// Отримуємо посилання на поле введення
var input = document.getElementById("state-01");

// Зупиняємо анімацію плейсхолдера при отриманні фокусу на полі введення
input.addEventListener("focus", function() {
  input.style.animation = "none";
});

// Відновлюємо анімацію плейсхолдера при втраті фокусу на полі введення
input.addEventListener("blur", function() {
  input.style.animation = "placeholder-blink 2s linear infinite";
});