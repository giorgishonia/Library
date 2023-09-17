const plusButton = document.getElementById('plus');
let isCreateWindowVisible = false; // Flag to track visibility

plusButton.addEventListener('click', function () {
    const createWindow = document.getElementById('create-window');

    // Toggle the visibility and rotation
    if (!isCreateWindowVisible) {
        createWindow.style.right = '0';
        plusButton.classList.add('clicked');
    } else {
        createWindow.style.right = '-100%';
        plusButton.classList.remove('clicked');
    }

    // Toggle the flag
    isCreateWindowVisible = !isCreateWindowVisible;
});

var addBookButton = document.getElementById("addBookButton");
var createWindow = document.getElementById("create-window");
var booksPlace = document.getElementById("booksPlace"); // Add this line

function createBooksDiv(title, author, pages, read) {
    var newBookDiv = document.createElement("div");
    newBookDiv.className = "books";

    var titleDiv = document.createElement("div");
    titleDiv.className = "book-title";
    titleDiv.textContent = title;

    var authorDiv = document.createElement("div");
    authorDiv.className = "author";
    authorDiv.textContent = "By - " + author;

    var pagesDiv = document.createElement("div");
    pagesDiv.className = "book-pages";
    pagesDiv.textContent = "Pages: " + pages;

    var readButton = document.createElement("button");
    readButton.className = "book-read";
    readButton.textContent = "Read";

    var statusDiv = document.createElement("div");
    statusDiv.className = "book-status";
    statusDiv.textContent = read ? "Completed" : "On progress";

    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";

    newBookDiv.appendChild(titleDiv);
    newBookDiv.appendChild(authorDiv);
    newBookDiv.appendChild(pagesDiv);
    newBookDiv.appendChild(readButton);
    newBookDiv.appendChild(deleteButton);
    newBookDiv.appendChild(statusDiv);

    booksPlace.appendChild(newBookDiv);

    // Add event listener for the delete button
    deleteButton.addEventListener("click", function () {
        newBookDiv.remove();
    });

    // Add event listener for the read button
    readButton.addEventListener("click", function () {
        read = !read;
        statusDiv.textContent = read ? "Completed" : "On progress";
    });
}

addBookButton.addEventListener("click", function () {
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var pages = document.getElementById("pages").value;
    var read = document.getElementById("read").checked;

    if (title.trim() === "" || author.trim() === "" || isNaN(pages) || pages <= 0) {
        alert("Please fill in valid book details.");
        return;
    }

    createBooksDiv(title, author, pages, read);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;

    setTimeout(function () {
        createWindow.style.right = "0";
    }, 500);
});

// Add event delegation for delete and read buttons
booksPlace.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
        var bookDiv = event.target.closest(".books");
        if (bookDiv) {
            bookDiv.remove();
        }
    }

    if (event.target.classList.contains("book-read")) {
        var statusDiv = event.target.nextElementSibling; // Get the status div
        var read = statusDiv.textContent === "On progress";
        statusDiv.textContent = read ? "Completed" : "On progress";
    }
});

