// #0pm3EyTKy9
//
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arr=[];

arr[0] = 10;
arr[1] = 'okten';
arr[2] = true;
arr[3] = 44;
arr[4] = 'hello';
arr[5] = false;
arr[6] = 465;
arr[7] = 'world';
arr[8] = true;
arr[9] = 99;

for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}


// #mDMWMW5a
//
// – Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


for (let i =1; i <= 10; i++) {
    console.log(arr[i]);
    document.write(i + '<br>');
}

// #4sXhaa5YMM
//
// – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i =1; i <= 100; i++) {
    console.log(arr[i]);
    document.write(i + '<br>');
}


// #s24slNyz7
//
// – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i <= 100; i+= 2){
    console.log(arr[i]);
    document.write(i + '<br>');
}


// #zananT5FR1
//
// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for ( let i = 1; i <= 100; i++){
    if (i % 2 === 0){
        console.log(arr[i]);
        document.write(i + '<br>');
    }
}

// #Tfrwls7FM
//
// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i =1; i <= 100; i++){
    if (i % 2 !==0){
        console.log(arr[i]);
        document.write(i + '<br>');
    }
}
