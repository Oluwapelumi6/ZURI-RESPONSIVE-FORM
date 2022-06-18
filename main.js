const form = document.querySelector('.second form');
const inputs = document.querySelectorAll('.second form input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
       if (!input.value) {
           input.parentElement.classList.add('error');
       } else{
        input.parentElement.classList.remove('error');
       }
    });
});