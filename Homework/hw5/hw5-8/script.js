// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function foobar(arrayOfPrimitives) {
    const foobar = (arrayOfPrimitives) => {
        document.write(`<ul>`);
        arr.forEach(item => {
            document.write(`<li>${item}</li>`);
        });
        document.write(`</ul>`);
    }
}

foobar([1123, 123, 12, 312, 321, 3, 'asdads', true]);
