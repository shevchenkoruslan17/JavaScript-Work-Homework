// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

function Client(id, name, surname, email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}



let clients = [
    new Client(1,'Ruslan','Mihaylik','rus@gmail','+38097534176',[{title:'tv',price: 15000}, {title:'phone',price: 15400},{title:'phone',price: 15400}]),
    new Client(2,'Artem','Yakovenko','yaha@gmail','+3809754167', [{title:'tv',price: 15000}, {title:'phone',price: 15400},{title:'tv',price: 15000}, {title:'phone',price: 15400}]),
    new Client(3,'Olga','Yshina','olga@gmail','+3809652657867', [{title:'tv',price: 15000}, {title:'phone',price: 15400}]),
    new Client(4,'Alisa','Kuzmenko','kuzas@gmail','+3809236732658',[{title:'tv',price: 15000}, {title:'phone',price: 15400},{title:'phone',price: 15400}]),
    new Client(5,'Petro','Petrovch','petya@gmail','+380956467578', [{title:'tv',price: 15000}]),
    new Client(6,'Vasya','Shlyapa','vaw@gmail','+380956357575',[{title:'tv',price: 15000}, {title:'phone',price: 15400}]),
    new Client(7,'Ivan','Serginyo','sergg@gmail','+38096554379', [{title:'tv',price: 15000}, {title:'phone',price: 15400}]),
    new Client(8,'Dima','Chernenko','chernenko@hmail','+38097886543', [{title:'tv',price: 15000}]),
    new Client(9,'Matvey','Olegovich','oleg@gmail','+3809455762787',[{title:'tv',price: 15000}, {title:'phone',price: 15400}]),
    new Client(10,'Oleg','Andriyovch','oleg@hmail','+380975647257835', [{title:'tv',price: 15000}, {title:'phone',price: 15400},{title:'phone',price: 15400}])
];

const sort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sort);
