const { response } = require("express");

function loadSomePets(){
    fetch('/pets?page1$limit3') 
        .then(response => response.json())
        .then(data => console.log(data));
          
}

loadSomePets();