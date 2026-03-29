// – Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for ( let i =0; i < numbers.length; i++ ) {
    if (numbers[i] % 2 === 0){
        console.log(numbers[i]);
    }
}

//– Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [];

for ( let i =0; i < arr1.length; i++ ) {
    arr2.push(arr1[i]);
}
console.log(arr2);

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.

let liter = ['a', 'b', 'c'];
let arr3 = [];

for (let i =0; i < liter.length; i++){
    arr3 += liter[i];
}
console.log(arr3);

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.

let liter1 = ['a', 'b', 'c'];
let arr4 = [];
let i = 0;

while (i <liter1.length ){
    arr4 += liter1[i];
    i++;
}
console.log(arr4);

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.

let liters = ['a', 'b', 'c'];
let word = [];

for ( let liter of liters){
    word += liter;
}
console.log(word);
