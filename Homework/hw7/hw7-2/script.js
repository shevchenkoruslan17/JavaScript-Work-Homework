// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'kokos', 'kokosovch', 'koko', '+0989767562455'),
    new User(2, 'makar', 'makarovch', 'makk', '+0973726456816'),
    new User(3, 'chocko', 'chockovch', 'chocko','+09897675624'),
    new User(4, 'persi', 'persivch', 'persivch', '+09897675624'),
    new User(5, 'cheri', 'cherivovch', 'cherivo','+09897675624'),
    new User(6, 'kokos', 'kokos', 'koko','+09897675624'),
    new User(7, 'makar', 'makarovch', 'makk', '+09897675624'),
    new User(8, 'chocko', 'chockovch', 'chocko','+09897675624'),
    new User(9, 'persi', 'persivch', 'persivch', '+09897675624'),
    new User(10, 'cheri', 'cherivo', 'cherivo','+09897675624'),
]

const filterUsers = users.filter((user) => user.id % 2 === 0);
console.log(filterUsers);
