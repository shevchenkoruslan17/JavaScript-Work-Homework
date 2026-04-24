// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client

function Client(id, name, surname, email,phone, ...products){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}

function Product(title, price){
    this.title = title;
    this.price = price;
}

const client = new Client(1,
    'Roman',
    'Shevchenko',
    'roma@gmail.com',
    '+380967744567',
    new Product('tv', 14000),
    new Product('phone', 12000)
);

let clients = [
    new Client(1,'Ruslan','Mihaylik','rus@gmail','+38097534176', new Product('tv', 15000), new Product('phone', 15400)),
    new Client(2,'Artem','Yakovenko','yaha@gmail','+3809754167', new Product('tv', 15000), new Product('phone', 15400)),
    new Client(3,'Olga','Yshina','olga@gmail','+3809652657867', new Product('tv', 15000), new Product('phone', 15400)),
    new Client(4,'Alisa','Kuzmenko','kuzas@gmail','+3809236732658', new Product('tv', 15000), new Product('phone', 15400)),
    new Client(5,'Petro','Petrovch','petya@gmail','+380956467578', new Product('tv', 15000), new Product('phone', 15400)),
    new Client(6,'Vasya','Shlyapa','vaw@gmail','+380956357575', new Product('tv', 15000), new Product('phone', 15400)),
    new Client(7,'Ivan','Serginyo','sergg@gmail','+38096554379', new Product('tv', 15000), new Product('phone', 15400)),
    new Client(8,'Dima','Chernenko','chernenko@hmail','+38097886543', new Product('tv', 15000), new Product('phone', 15400)),
    new Client(9,'Matvey','Olegovich','oleg@gmail','+3809455762787', new Product('tv', 15000), new Product('phone', 15400)),
    new Client(10,'Oleg','Andriyovch','oleg@hmail','+380975647257835', new Product('tv', 15000), new Product('phone', 15400))
];

console.log(clients.order);
