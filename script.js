const plusButton = document.getElementById('plus');
let isCreateWindowVisible = false;
let notification = document.getElementById('notification');

plusButton.addEventListener('click', function () {
    const createWindow = document.getElementById('create-window');

    if (!isCreateWindowVisible) {
        createWindow.style.right = '0';
        plusButton.classList.add('clicked');
    } else {
        createWindow.style.right = '-100%';
        plusButton.classList.remove('clicked');
    }

    isCreateWindowVisible = !isCreateWindowVisible;
});

var addBookButton = document.getElementById("addBookButton");
var createWindow = document.getElementById("create-window");
var booksPlace = document.getElementById("booksPlace");
function createBooksDiv(title, author, pages, read) {
    var newBookDiv = document.createElement("div");
    newBookDiv.className = "books";
    newBookDiv.style.opacity = "0"; // Initially invisible

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

    // Add a slight delay to make the book visible with a transition
    setTimeout(function () {
        newBookDiv.style.opacity = "1";
    }, 50);

    deleteButton.addEventListener("click", function () {
        // Add a slight delay before removing the book
        setTimeout(function () {
            newBookDiv.remove();
            // Check if there are books in the library and add a transition
            setTimeout(checkBooksAndNotification, 50);
        }, 50);
    });

    readButton.addEventListener("click", function () {
        read = !read;
        statusDiv.textContent = read ? "Completed" : "On progress";
    });
}

function checkBooksAndNotification() {
    var books = booksPlace.querySelectorAll(".books");
    if (books.length === 0) {
        // If there are no books, show the notification with a transition
        notification.style.display = "block";
        setTimeout(function () {
            notification.style.opacity = "1";
        }, 50);
    } else {
        // If there is at least one book, hide the notification with a transition
        notification.style.opacity = "0";
        // Add a slight delay before hiding the notification
        setTimeout(function () {
            notification.style.display = "none";
        }, 500);
    }
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
    // Check if there are books in the library and add a transition
    checkBooksAndNotification();

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;

    setTimeout(function () {
        createWindow.style.right = "0";
    }, 500);
});

booksPlace.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
        var bookDiv = event.target.closest(".books");
        if (bookDiv) {
            // Add a slight delay before removing the book
            setTimeout(function () {
                bookDiv.remove();
                // Check if there are books in the library and add a transition
                setTimeout(checkBooksAndNotification, 50);
            }, 50);
        }
    }
});

