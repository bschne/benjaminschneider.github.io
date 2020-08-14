'use strict';
const fs = require('fs');
const htmlTemplate = "./books_template.html"
const outputFile = "./books.html"
const placeholder = "{{BOOKS}}"

let template = (title, img, url) => {
    return `
    <div class="book">
        <a href="${url}" target="_blank" title='${title}'>
            <img src="img/books/${img}" alt='${title}'/>
        </a>
    </div>
    `;
}

let data = fs.readFileSync("./books.json");
let books = JSON.parse(data);

// Sort by Last Name (from title strings)
books.sort((a, b) => {
    let aK = a.title;
    let bK = b.title;
    if (aK < bK) return -1;
    if (aK > bK) return 1;
    return 0;
})

let out = `<div class="books-container">
`;
books.forEach(element => {
    out += template(element.title, element.image, element.link);
});

// Fill flex grid so the spacing works...
for (let index = 0; index < (3 - (books.length % 3)) && index < 3; index++) {
    out += `
        <div class="book-filler"></div>
    `;
}

out += `</div>`;

fs.readFile(htmlTemplate, 'utf8', (err, data) => {
    if (err) return console.log(err);

    let result = data.replace(new RegExp(placeholder, "g"), out);
    fs.writeFile(outputFile, result, 'utf8', (err) => {
        if (err) return console.log(err);
    });
});