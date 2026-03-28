// 1. Створити пустий масив та :
//
//     a. заповнити його 50 парними числами за допомоги циклу.
//
//     b. заповнити його 50 непарними числами за допомоги циклу.
//
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
//
// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
//
// 2. Вивести за допомогою console.log кожен третій елемент
//
// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
//
// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
//
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
//
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//
// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.

// 1a

let arr = [];
for ( let i = 0; i <100; i +=2){
    arr.push(i);
}

//1b

let arr2 = [];
for ( let i = 1; i < 100; i +=2){
    arr2.push(i);
}

//1c

let arr3 = [];
for ( let i = 0; i < 20; i++){
    arr3.push(Math.floor(Math.random() * 100));
}

//1d

let arr4 = [];

for ( let i = 0; i < 20; i++){
    arr4.push(Math.floor(Math.random() * (732 - 8 +1)) + 8);
}

//2
let arr5 = [];
for( let i = 2; i < arr5.length; i += 3){
    arr5.push(arr5[i]);
}

//3

let arr6 = [];
for ( let i = 2; i < arr6.length; i +=3){
    if (arr6[i] % 2 === 0){
        console.log(arr6[i]);
    }
}

//4

let arr7 = [];
for ( let i = 2; i < arr7.length; i += 3){
    if (arr7[i] % 2 === 0){
        arr7.push(arr7[i]);
    }
}
console.log(arr7);

//5

let arr8 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67];

for( let i =0; i <arr8.length - 1; i++){
    if (arr8[i + 1] % 2 ===0){
        console.log(arr8[i]);
    }
}

//6

let arr9 = [100,250,50,168,120,345,188];

let sum = 0;

for (let ar of arr9){
    sum += ar;
}
let average = sum / arr9.length;
console.log(average);

// 7

let arr10 = [];

for ( let i = 0; i < 10; i++){
    arr10.push(Math.floor(Math.random() * 10));
}
let arr11 = [];

for ( let num of arr10){
    arr11.push(num * 5);
}
console.log(arr11);

//8

let mixed = [10,'hello', true, 25, 'chicago', false, 42];

let numbers = [];

for ( let item of mixed){
    if ( typeof item === 'number' ){
        numbers.push(item);
    }
}
console.log(numbers);
