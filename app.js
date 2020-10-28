function appendBooktoDom(title, author, cover) {
    const titleh1 = document.createElement('h3')
    titleh1.textContent = title
    document.querySelector('#display-book').append(title)

    const coverImg = document.createElement('img')
    coverImg.src = cover
    coverImg.alt = title
    document.querySelector('#display-book').appendChild(coverImg)

    const authorDiv = document.createElement('div')
    authorDiv.textContent = `${author}`
    document.querySelector('#display-book').appendChild(authorDiv)


}

function fetchBook(genre) {
fetch(`http://openlibrary.org/subjects/${genre}.json`)
.then(res => res.json())
.then((json) => {
    const randomBook = getRandomBook(json.works)

    const title = randomBook.title
    const author = getAuthor(randomBook)
    const cover = `http://covers.openlibrary.org/b/ID/${randomBook.cover_id}-M.jpg`
    
    appendBooktoDom(title, author, cover)
})
}

// FUNCTIONS

function getRandomBook(books) {
    const randomIndex = Math.floor(Math.random() * books.length);
    return books[randomIndex]
}

function getAuthor(books) {
    return books.authors[0].name
}

let genre = 'mystery'
fetchBook(genre);

