import Books from './modules/books.js';
import { DateTime } from './modules/luxon.js';

const addBtn = document.getElementById('add');
const myBooks = document.getElementById('my-books');
const addBook = document.querySelector('.flex-container');
const contact = document.querySelector('.contact-form');
const listLink = document.querySelector('#list-link');
const addLink = document.querySelector('#add-link');
const pdate = document.querySelector('#date-time');
const contactLink = document.querySelector('#contact-link');
const h1 = document.querySelector('#h1');
const title = document.getElementById('title');
const author = document.getElementById('author');

// const books = new Books();

addBtn.addEventListener('click', () => {
    const title1 = title.value;
    const author1 = author.value;
    title.value = '';
    author.value = '';
    const obj = new Books(title1, author1);
    if (obj.title.length > 0 && obj.author.length > 0) {
      obj.add(myBooks);
    }
  });

  window.addEventListener('load', () => {
    listLink.style.color = 'blue';
    addBook.style.display = 'none';
    contact.style.display = 'none';
    h1.style.display = 'block';
    pdate.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
    Books.loading(myBooks);
  });

  listLink.addEventListener('click', () => {
    listLink.style.color = 'blue';
    addLink.style.color = 'black';
    contactLink.style.color = 'black';
    myBooks.style.display = 'flex';
    addBook.style.display = 'none';
    contact.style.display = 'none';
    h1.style.display = 'block';
  });
  
  addLink.addEventListener('click', () => {
    addLink.style.color = 'blue';
    listLink.style.color = 'black';
    contactLink.style.color = 'black';
    myBooks.style.display = 'none';
    addBook.style.display = 'flex';
    contact.style.display = 'none';
    h1.style.display = 'none';
  });
  
  contactLink.addEventListener('click', () => {
    contactLink.style.color = 'blue';
    listLink.style.color = 'black';
    addLink.style.color = 'black';
    myBooks.style.display = 'none';
    addBook.style.display = 'none';
    contact.style.display = 'flex';
    h1.style.display = 'none';
  });
  