
const data = Array.from({length: 100}, (_, i) => ({
        id: i + 1,
        title: 'object'
    }
));

const pageSize = 10;
let page = 0;

const list = document.getElementById('list');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.onclick = () => {
    if (page > 0) {
        page--;
        renderList();
    }
}

next.onclick = () => {
    if ((page + 1) * pageSize < data.length) {
        page++;
        renderList();
    }
}

function renderList() {
    const start = page * pageSize;
    const end = Math.min( start + pageSize, data.length );
    list.innerHTML = '';
    for ( let i = start; i < end; i++ ) {
        const item = document.createElement('div');
        item.textContent = data[i].id + '' + data[i].title;
        list.appendChild(item);
    }
    prev.disabled = page === 0;
    next.disabled = end >= data.length;
}

renderList();


