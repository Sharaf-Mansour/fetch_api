// create users menu 
let searchInput_User = document.querySelector('.window_User_search');
let searchInput_Company = document.querySelector('.window_Company_search');
let searchInput_Book = document.querySelector('.window_Book_search');

let Users;
let Companies ;
let Books;

getCompanies();
getUsers();
getBooks();

// Users
function getUsers() {
    fetch('..\\assets\\json data\\users.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (users) {
            Users = users;
            appendUsers(users);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
}

function appendUsers(users) {
    let users_menu = document.getElementById("users_menu");
    users_menu.innerHTML ='';
    for (var i = 0; i < users.length; i++) {
        var span = document.createElement("span");
        span.style.cssText = "display:inline-block;margin:10px;";
        var name_div = document.createElement("div");
        name_div.innerHTML = "Name: " + users[i].first_name + " " + users[i].last_name;
        span.appendChild(name_div);
        var email_div = document.createElement("div");
        email_div.innerHTML = "Email: " + users[i].email;
        span.appendChild(email_div);
        var id_div = document.createElement("div");
        id_div.innerHTML = "ID: " + users[i].id;
        span.appendChild(id_div);
        users_menu.appendChild(span);
    }
}

function searchUser() {
    var text = searchInput_User.value;
    var result;
    if  (text.length > 0) 
    result  = Users.filter(word => word.first_name.toLowerCase().includes(text.toLowerCase()));  
    else 
    result = Users;
        appendUsers(result);
}

// Companies 
function getCompanies() {
    fetch('..\\assets\\json data\\companies.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (companies) {
            Companies = companies;
            appendCompanies(companies);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
}

function appendCompanies(companies) {
    let companies_menu = document.getElementById("companies_menu");
    companies_menu.innerHTML ='';
    for (var i = 0; i < companies.length; i++) {
        var span = document.createElement("span");
        span.style.cssText = "display:inline-block;margin:10px;";
        var name_div = document.createElement("div");
        name_div.innerHTML = "Name: " + companies[i].company_name;
        span.appendChild(name_div);
        var email_div = document.createElement("div");
        email_div.innerHTML = "Email: " + companies[i].email;
        span.appendChild(email_div);
        var city_div = document.createElement("div");
        city_div.innerHTML = "City: " + companies[i].city;
        span.appendChild(city_div);
        var id_div = document.createElement("div");
        id_div.innerHTML = "ID: " + companies[i].id;
        span.appendChild(id_div);
        companies_menu.appendChild(span);
    }
}

function searchCompany() {
    var text = searchInput_Company.value;
    var result;
    if  (text.length > 0) 
        result  = Companies.filter(word => word.company_name.toLowerCase().includes(text.toLowerCase()));
    else
        result = Companies;
       appendCompanies(result);
}

function getBooks() {
    fetch('..\\assets\\json data\\books.json').then(function (response) {
            return response.json();
        })
        .then(function (books) {
            Books = books;
            appendBooks(books);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        }); 
}

function appendBooks(books) {
    let books_menu = document.getElementById("books_menu");
    books_menu.innerHTML ='';
    for (var i = 0; i < books.length; i++) {
        var span = document.createElement("span");
        span.style.cssText = "display:inline-block;margin:10px;";
        var name_div = document.createElement("div");
        name_div.innerHTML = "Name: " + books[i].book_name;
        span.appendChild(name_div);
        var id_div = document.createElement("div");
        id_div.innerHTML = "ID: " + books[i].id;
        span.appendChild(id_div);
        books_menu.appendChild(span);
    }
}

function searchBook() {
    var text = searchInput_Book.value;
    var result;
    if  (text.length > 0) 
        result  = Books.filter(word => word.book_name.toLowerCase().includes(text.toLowerCase())); 
    else 
        result = Books;
    appendBooks(result);
}