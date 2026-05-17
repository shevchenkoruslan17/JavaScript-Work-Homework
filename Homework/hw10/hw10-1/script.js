// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

// const button = document.getElementById('btn');

const buttons = document.getElementsByTagName('button');
const button = buttons[0];

button.onclick = function (){
    // document.getElementById('text').remove();
    const div = document.getElementById('text');
    div.style.display = 'none';
};
button.addEventListener('click', ()=>{
    // document.getElementById('text').remove();
    const div = document.getElementById('text');
    div.style.display = 'none';
});
