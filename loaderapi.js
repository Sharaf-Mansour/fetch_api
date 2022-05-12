// create users menu

function getUsers() {
    fetch('users.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (users) {
                appendData(users);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
    function appendData(users) {
        var mainContainer = document.getElementById("users_menu");
        for (var i = 0; i < users.length; i++) {
            var div = document.createElement("div");
            div.style.cssText = "margin:25px;";
            var name_div = document.createElement("div");
            name_div.innerHTML = "Name: " + users[i].first_name + " " + users[i].last_name;
            div.appendChild(name_div);
            var email_div = document.createElement("div");
            email_div.innerHTML = "Email: " + users[i].email;
            div.appendChild(email_div);
            var id_div = document.createElement("div");
            id_div.innerHTML = "ID: " + users[i].id;
            div.appendChild(id_div);
            mainContainer.appendChild(div);
        }
    }
}

function getCompanies() {
    fetch('companies.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (companies) {
            appendData(companies);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });

    function appendData(companies) {
        var mainContainer = document.getElementById("companies_menu");
        for (var i = 0; i < companies.length; i++) {
            var div = document.createElement("div");
            div.style.cssText = "margin:25px;";
            var name_div = document.createElement("div");
            name_div.innerHTML = "Name: " + companies[i].company_name;
            div.appendChild(name_div);
            var email_div = document.createElement("div");
            email_div.innerHTML = "Email: " + companies[i].email;
            div.appendChild(email_div);
            var city_div = document.createElement("div");
            city_div.innerHTML = "City: " + companies[i].city;
            div.appendChild(city_div);
            var id_div = document.createElement("div");
            id_div.innerHTML = "ID: " + companies[i].id;
            div.appendChild(id_div);
            mainContainer.appendChild(div);
        }
    }
}

function getBooks() {
    fetch('books.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (books) {
            appendData(books);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });

    function appendData(books) {
        var mainContainer = document.getElementById("books_menu");
        for (var i = 0; i < books.length; i++) {
            var div = document.createElement("div");
            div.style.cssText = "margin:10px;";
            var name_div = document.createElement("div");
            name_div.innerHTML = "Name: " + books[i].book_name;
            div.appendChild(name_div);
            var id_div = document.createElement("div");
            id_div.innerHTML = "ID: " + books[i].id;
            div.appendChild(id_div);
            mainContainer.appendChild(div);
        }
    }
}

getCompanies();
getUsers();
getBooks();