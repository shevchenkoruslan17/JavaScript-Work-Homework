// #yHAwJOyiC
//
// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr =[5,12,4,6,67,88,99,345,54,33];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// #GamKju89ob
//
// – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.

let strings = ['apple','banana','cherry','orange','grape','phone','expensive','brown','football','audi' ];

for (let i = 0; i < strings.length; i++) {
    console.log(arr[i])
}

// #Bm76xmg
//
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let strings = ['apple',true,12,'orange',false,34,'expensive',true,88,false ];

for (let i = 0; i < strings.length; i++) {
    console.log(arr[i])
}

// #u3vmD0YJXh
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arr = ['apple',true,12,'orange',false,34,'expensive',true,88,false ];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'boolean') {
        console.log(arr[i]);
    }
}

// #9stMq2ou
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arr = ['apple',true,12,'orange',false,34,'expensive',true,88,false ];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        console.log(arr[i]);
    }
}

// #mK4pmM4
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arr = ['apple',true,12,'orange',false,34,'expensive',true,88,false ];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        console.log(arr[i]);
    }
}
