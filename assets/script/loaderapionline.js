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
    fetch('https://fakerapi.it/api/v1/users?_quantity=20')
        .then(function (response) {
            return response.json();
        })
        .then(function (users) {
            Users = users.data;
            appendUsers(users.data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
}

function appendUsers(users) {
    let users_menu = document.getElementById("users_menu");
    users_menu.innerHTML ='';
    for (var i = 0; i < users.length; i++) {
        
        var div = document.createElement("div");
        div.classList.add("infocardContainer");
        var img_div = document.createElement("div");
        img_div.classList.add("main");
        var img = document.createElement("img");
        img.src = users[i].image+i;
        img_div.appendChild(img);
        div.appendChild(img_div); 
        var textbois_div = document.createElement("div");
        textbois_div.classList.add("textbois");
        var id_div = document.createElement("h2");
        id_div.innerHTML = "ID: " + users[i].id;
        textbois_div.appendChild(id_div);      

        var firstname_div = document.createElement("h2");
        firstname_div.innerHTML = "firstname: " + users[i].firstname;
        textbois_div.appendChild(firstname_div);

        var lastname_div = document.createElement("h2");
        lastname_div.innerHTML =   "lastname: " + users[i].lastname;
        textbois_div.appendChild(lastname_div);      

        var username_div = document.createElement("h3");
        username_div.innerHTML = "username: " + users[i].username;
        textbois_div.appendChild(username_div);      

        var website_div = document.createElement("h4");
        website_div.innerHTML =  users[i].website;
        website_div.href = users[i].website;
        textbois_div.appendChild(website_div);      
        
        var email_div = document.createElement("h4");
        email_div.href = "mailto:" + users[i].email;
        email_div.innerHTML =  users[i].email;
        textbois_div.appendChild(email_div);

        div.appendChild(textbois_div);
        users_menu.appendChild(div);
    }
}

function searchUser() {
    var text = searchInput_User.value;
    var result;
    if  (text.length > 0) 
    result  = Users.filter(word => word.firstname.toLowerCase().includes(text.toLowerCase()));  
    else 
    result = Users;
        appendUsers(result);
}

// Companies 
function getCompanies() {
    fetch('https://fakerapi.it/api/v1/companies?_quantity=15')
        .then(function (response) {
            return response.json();
        })
        .then(function (companies) {
            Companies = companies.data;
            appendCompanies(companies.data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
}

function appendCompanies(companies) {
    let companies_menu = document.getElementById("companies_menu");
    companies_menu.innerHTML ='';
    for (var i = 0; i < companies.length; i++) {
        var div = document.createElement("div");
        div.style.cssText = "margin:25px;";
        var name_div = document.createElement("div");
        name_div.innerHTML = "Name: " + companies[i].name;
        div.appendChild(name_div);
        var email_div = document.createElement("div");
        email_div.innerHTML = "Email: " + companies[i].email;
        div.appendChild(email_div);
        var city_div = document.createElement("div");
        city_div.innerHTML = "City: " + companies[i].country;
        div.appendChild(city_div);
        var id_div = document.createElement("div");
        id_div.innerHTML = "ID: " + companies[i].id;
        div.appendChild(id_div);
        companies_menu.appendChild(div);
    }
}

function searchCompany() {
    var text = searchInput_Company.value;
    var result;
    if  (text.length > 0) 
        result  = Companies.filter(word => word.name.toLowerCase().includes(text.toLowerCase()));
    else
        result = Companies;
       appendCompanies(result);
}

function getBooks() {
    fetch('https://fakerapi.it/api/v1/books?_quantity=10').then(function (response) {
            return response.json();
        })
        .then(function (books) {
            Books = books.data;
            appendBooks(books.data);
         })
        .catch(function (err) {
            console.log('error: ' + err);
        }); 
}

function appendBooks(books) {
    let books_menu = document.getElementById("books_menu");
    books_menu.innerHTML ='';
    for (var i = 0; i < books.length; i++) {
        var div = document.createElement("div");
        div.style.cssText = "margin:25px;";
        var name_div = document.createElement("div");
        name_div.innerHTML = "Title: " + books[i].title;
        div.appendChild(name_div);
        var id_div = document.createElement("div");
        id_div.innerHTML = "ID: " + books[i].id;
        div.appendChild(id_div);
        books_menu.appendChild(div);
    }
}

function searchBook() {
    var text = searchInput_Book.value;
    var result;
    if  (text.length > 0) 
        result  = Books.filter(word => word.title.toLowerCase().includes(text.toLowerCase())); 
    else 
        result = Books;
    appendBooks(result);
}