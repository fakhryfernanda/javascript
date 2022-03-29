const monitor = document.querySelector('.monitor');
const result = document.querySelector('.result');
const numbers = document.querySelectorAll('.number');
numbers.forEach(button => {
    button.addEventListener('click', () => {
        result.innerText += button.innerText;
        monitor.appendChild(result);
    });
});