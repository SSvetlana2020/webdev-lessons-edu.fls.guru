window.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.bill-order__input[required]');
    inputs.forEach(function(input) {
      input.placeholder += ' *';
    });
});