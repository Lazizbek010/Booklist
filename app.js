const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
const container = document.querySelector('.container');

// Constructor Function
function Book(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
}
// UI changed html css constructor function
function UI() { }
UI.prototype.addBook = function (book) {
    const tr = document.createElement('tr');
    const countBook = tbody.childNodes.length;
    tr.innerHTML = `
        <th scope="row">${countBook}</th>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td>
        <span class="delete"><i class="fas fa-trash"></i></span>
        </td>
    `;
    tbody.appendChild(tr)
}
UI.prototype.showMesssage = function (type, text) {
    const div = document.createElement('div');
    const classes = ['alert', `alert-${type}`];
    div.classList.add(...classes);
    div.textContent = text;
    container.insertBefore(div, form)
    setTimeout(() => {
        div.remove()
    }, 2000);
}
UI.prototype.clearInput = () => {
    form.name.value = '';
    form.author.value = '';
    form.year.value = '';
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const ui = new UI()
    if (form.name.value && form.author.value && form.year.value) {
        const book = new Book(form.name.value, form.author.value, form.year.value);
        ui.addBook(book)
        ui.showMesssage('success', 'Success!!!')
        ui.clearInput()
    } else {
        ui.showMesssage('warning', 'No text?')
    }
})

tbody.addEventListener('click', (e) => {
    e.target.classList[0] === 'delete'
        ? e.target.parentElement.parentElement.remove()
        : false;

        const ui = new UI()
        ui.showMesssage('danger', 'Deleted this Book')
})

