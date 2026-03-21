// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// debugger;
// for (let i =0; i < users.length; i++) {
//     console.log(users[i]);
// }


let products = [
    {
        title: 'milk',
        price: 22,
        image:'https://www.shutterstock.com/image-vector/illustration-milk-carton-cup-260nw-2422290685.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image:'https://thumbs.dreamstime.com/b/orange-juice-17172736.jpg'
    },
    {
        title: 'tea',
        price: 15,
        image:'https://t3.ftcdn.net/jpg/02/18/53/26/360_F_218532663_Meqbe06Mqr4X7DV3vfM4usMkfML47thJ.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image:'https://static.vecteezy.com/system/resources/thumbnails/023/978/193/small/fresh-whole-red-tomato-isolated-on-white-background-ai-generated-free-photo.jpg'
    },
];

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    document.write(`<div class="target">
                         
                  <h2>${product.title} - ${product.price} UAH</h2>
                   <img src="${product.image}" alt="">
</div>`)
}
