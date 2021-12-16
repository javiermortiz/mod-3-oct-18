window.addEventListener("DOMContentLoaded", ev => {
    // Retrieve item in localStorage
    // const savedMode = localStorage.getItem("mode");
    // const savedCart = localStorage.getItem("cart");
    // Retrieve item in cookies
    const savedMode = document.cookie.split("=")[1];

    console.log(savedMode);
    if (savedMode === "dark") {
        darkMode();
    }
    
    // If you are setting anything other than a string in localStorage
    // remember to stringify it and parse it
    // let savedCart = localStorage.getItem("cart");
    // if (savedCart) {
    //     console.log(savedCart);
    //     savedCart = JSON.parse(savedCart);
    //     console.log(savedCart);
    // }

    const modes = document.querySelector("#modes");
    modes.addEventListener("click", ev => {
        const selection = ev.target.id;
        console.log(selection);
        if (selection === "light") {
            lightMode();
            // localStorage.setItem("mode", selection);
            document.cookie = `mode=${selection}`;
        } else if (selection === "dark") {
            darkMode();
            // localStorage.setItem("mode", selection);
            document.cookie = `mode=${selection}`;
        }
        // Set item in localStorage

        // If you are setting anything other than a string in localStorage
        // remember to stringify it and parse it
        // const cart = {apples: 5, oranges: 3, bananas:1000};
        // localStorage.setItem("cart", JSON.stringify(cart));

        // With cookies
        
    });
});

function lightMode() {
    const body = document.querySelector("body");
    const h1 = document.querySelector("h1");
    const a = document.querySelectorAll("a");
    const ul = document.querySelector("ul");
    const button = document.querySelector("button");
    const li = document.querySelectorAll("li");
    body.className = "";
    h1.className = "";
    a.forEach(tag => tag.className = "");
    ul.className = "";
    button.className = "";
    li.forEach(tag => tag.className = "");
}

function darkMode() {
    const body = document.querySelector("body");
    const h1 = document.querySelector("h1");
    const a = document.querySelectorAll("a");
    const ul = document.querySelector("ul");
    const button = document.querySelector("button");
    const li = document.querySelectorAll("li");
    body.className = "dark";
    h1.className = "dark";
    a.forEach(tag => tag.className = "dark");
    ul.className = "dark";
    button.className = "dark";
    li.forEach(tag => tag.className = "dark");
}