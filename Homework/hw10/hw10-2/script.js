// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

const button = document.getElementById('verification');

button.addEventListener('click', function () {
    const age = Number(document.getElementById('age').value);

    if (age < 18) {
        alert("Менше 18 років!");
    }
    else {
        alert("Більше 18 років!")
    }
});
