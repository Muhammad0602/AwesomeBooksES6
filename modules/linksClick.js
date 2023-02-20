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
  