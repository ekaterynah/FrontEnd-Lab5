document.getElementById('submitBtn').addEventListener('click', () => {
    const fullName = document.getElementById('fullName');
    const idCard = document.getElementById('idCard');
    const faculty = document.getElementById('faculty');
    const birthDate = document.getElementById('birthDate');
    const address = document.getElementById('address');

    // Регулярні вирази
    const fullNameRegex = /^[А-ЯІЇЄҐа-яіїєґ']+\s[А-ЯІЇЄҐа-яіїєґ']\.[А-ЯІЇЄҐа-яіїєґ']\.$/;
    const idCardRegex = /^[А-ЯІЇЄҐ]{2}\s№\d{6}$/;
    const facultyRegex = /^[А-ЯІЇЄҐа-яіїєґ']+$/;
    const birthDateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    const addressRegex = /^м\.\s[А-ЯІЇЄҐа-яіїєґ']+$/;

    const fields = [fullName, idCard, faculty, birthDate, address];
    const validators = [fullNameRegex, idCardRegex, facultyRegex, birthDateRegex, addressRegex];
    let hasErrors = false;

    fields.forEach(field => field.classList.remove('invalid'));

    fields.forEach((field, index) => {
        if (!validators[index].test(field.value.trim())) {
            field.classList.add('invalid');
            hasErrors = true;
        }
    });

    if (hasErrors) {
        alert('Перевірте введені дані!');
    } else {
        alert(`
            ПІБ: ${fullName.value}
            ID-card: ${idCard.value}
            Факультет: ${faculty.value}
            Дата народження: ${birthDate.value}
            Адреса: ${address.value}
        `);
    }
});




const table = document.getElementById('table');
const colorPicker = document.getElementById('colorPicker');
const variantNumber = 4;

function createTable(rows, cols) {
  let number = 1;
  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement('td');
      cell.textContent = number;
      cell.dataset.number = number;
      row.appendChild(cell);
      number++;
    }
    table.appendChild(row);
  }
}

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

table.addEventListener('mouseover', (event) => {
  if (event.target.tagName === 'TD' && event.target.dataset.number == variantNumber) {
    event.target.style.backgroundColor = getRandomColor();
  }
});

table.addEventListener('click', (event) => {
  if (event.target.tagName === 'TD' && event.target.dataset.number == variantNumber) {
    event.target.style.backgroundColor = colorPicker.value;
  }
});

table.addEventListener('dblclick', (event) => {
  if (event.target.tagName === 'TD' && event.target.dataset.number == variantNumber) {
    colorDiagonal(colorPicker.value);
  }
});

function colorDiagonal(color) {
  const cells = table.querySelectorAll('td');
  cells.forEach((cell, index) => {
    const row = Math.floor(index / 6);
    const col = index % 6;
    if (row === col || row + col === 5) {
      cell.style.backgroundColor = color;
    }
  });
}

// Створення таблиці 6x6
createTable(6, 6);
