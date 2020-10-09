const bookArray = [
  {
    isbn: '9780446310789',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },
  {
    isbn: '9781443434973',
    title: '1984',
    author: 'George Orwell'
  },
  {
    isbn: '9780553296983',
    title: 'The Diary of a Young Girl',
    author: 'Anne Frank'
  }
];

console.log('typeof bookArray', typeof bookArray);

console.log(JSON.stringify(bookArray));
console.log('typeof bookArray', typeof JSON.stringify(bookArray));

const student = '{"Number ID": "123456", "Name": "Joanna"}';

console.log('typeof student', typeof student);
console.log(JSON.parse(student));
