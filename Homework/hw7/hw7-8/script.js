// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince{
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

const cinderellas = [
    new Cinderella('John', 18, 35),
    new Cinderella('Jane', 21, 36),
    new Cinderella('Feb', 23, 37),
    new Cinderella('Mar', 24, 38),
    new Cinderella('April', 25, 39),
    new Cinderella('May', 28, 40),
    new Cinderella('June', 38, 41),
    new Cinderella('July', 42, 42),
    new Cinderella('August',33, 39),
    new Cinderella('September',29,37),
];

const prince = new Prince('Jon',28,41);

// for(const cinderella of cinderellas){
//     if(cinderella.footSize === prince.slipper){
//         prince.wife = cinderella;
//     }
// }

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);

prince.wife = cinderellaMain;
