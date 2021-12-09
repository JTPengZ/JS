import { fetchFunct } from "./js_list.js";
import { listPoke } from "./js_list.js";

const menuItem = document.getElementsByClassName("navbar__link");

function hoverContent(){
    $(document).ready(function(){
        let index = document.getElementById("dynamic_content");

        index.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = "lightGrey";
        });

        index.addEventListener("mouseout", event => {
            event.target.style.backgroundColor = "";
        });
    });
}

$(document).ready(function(){
    setTimeout(showWelcome, 2000);

    hoverContent();

    for(let i = 0; i < menuItem.length; i++){
        menuItem[i].addEventListener("click", () => {
            if(location.hash === menuItem[i].hash){
                alert("Ya estas aquí");
            }else{
                changeView(menuItem[i]);
            }
        });

    }
});


/*import fetch from "node-fetch";

fetch('https://pokeapi.co/api/v2/pokemon/13/')
.then((response) => {
    return response.json();
})
.then((myJson) => {
    console.log(myJson);
});*/

function changeView(e){
    location.hash === "#home" || location.hash === "" ?
    viewList(e) : viewHome(e);
}

function hoverMenuBar(e){
    //Set all attributes class from menu bar to 'navbar__link'
    for(let i = 0; i < menuItem.length; i++){
        menuItem[i].setAttribute("class", "navbar__link");
    }
    //Add, to the focus link, the attribute class 'navbar__link--active'
    e.setAttribute("class", "navbar__link navbar__link--active");
}

function removeElement(){
    let el = document.getElementById("dynamic_content");
    el.remove();
}

function viewHome(e){
    hoverContent();

    hoverMenuBar(e);

    removeElement();

    let div = document.getElementById("content");


    let div__root = document.createElement("div");
    div__root.setAttribute("id", "dynamic_content");
    div__root.setAttribute("class", "content");


    let div_h1 = document.createElement("div");
    let h1_home = document.createElement("H1");
    h1_home.setAttribute("class", "content__h1");
    let text_h1 = document.createTextNode("Esta página web simula una Pokedex.");
    h1_home.appendChild(text_h1);
    div_h1.appendChild(h1_home);


    let div_1 = document.createElement("div");
    div_1.setAttribute("class", "content__div");
    let div_2 = document.createElement("div");
    let div_3 = document.createElement("div");
    div_2.setAttribute("class", "content__div1");
    div_3.setAttribute("class", "content__div1");


    let h2_1_home = document.createElement("H2");
    let text_h2_1 = document.createTextNode("Podrás ver una lista de pokémons.");
    h2_1_home.appendChild(text_h2_1);
    let img_1_home = document.createElement("img");
    img_1_home.setAttribute("class", "navbar__img");
    img_1_home.setAttribute("src", "./img/logo_pokemon.png");
    img_1_home.setAttribute("alt", "img_1");
    div_2.appendChild(h2_1_home);
    div_2.appendChild(img_1_home);
    div_1.appendChild(div_2);


    let h2_2_home = document.createElement("H2");
    let text_h2_2 = document.createTextNode("Podrás ver los datos de un pokémon en detalle.");
    h2_2_home.appendChild(text_h2_2);
    let img_2_home = document.createElement("img");
    img_2_home.setAttribute("class", "navbar__img");
    img_2_home.setAttribute("src", "./img/logo_pokemon.png");
    img_2_home.setAttribute("alt", "img_2");
    div_3.appendChild(h2_2_home);
    div_3.appendChild(img_2_home);
    div_1.appendChild(div_3);


    div__root.appendChild(div_h1);
    div__root.appendChild(div_1);

    document.body.insertBefore(div__root, div);
}
/*
function fetchFunct(e){
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        let div_1 = document.createElement("div");
        div_1.setAttribute("class", "content__div");    
    
        e.appendChild(div_1);
        for(let i = 0; i < myJson.length; i++){
            let div_2 = document.createElement("div");
            div_2.setAttribute("class", "content__div1");

            let h2_1_home = document.createElement("H2");
            let text_h2_1 = document.createTextNode(myJson.name);
            h2_1_home.appendChild(text_h2_1);
            let img_1_home = document.createElement("img");
            img_1_home.setAttribute("class", "navbar__img");
            img_1_home.setAttribute("src", "./img/logo_pokemon.png");
            img_1_home.setAttribute("alt", "img_1");
            div_2.appendChild(img_1_home);
            div_2.appendChild(h2_1_home);
            div_1.appendChild(div_2);
        }
        let l = new ListP("a", "b", "1");
        console.log(l);
        console.log(myJson);
    });
}*/

function viewList(e){    
    hoverMenuBar(e);

    removeElement();

    let div = document.getElementById("content");


    let div__root = document.createElement("div");
    div__root.setAttribute("id", "dynamic_content");
    div__root.setAttribute("class", "content");

    fetchFunct();

    let div_1 = document.createElement("div");
    div_1.setAttribute("class", "content__div");    
    let div_2;
    let h2_1_list;
    let text_h2_1;
    let img_1_list;

    for(let i = 0; i < listPoke.length; i++){
        div_2 = document.createElement("div");
        div_2.setAttribute("class", "content__div1");
        h2_1_list = document.createElement("H2");
        text_h2_1 = document.createTextNode(listPoke[i].getNumber() + ".- " + listPoke[i].getName());
        h2_1_list.appendChild(text_h2_1);
        img_1_list = document.createElement("img");
        img_1_list.setAttribute("class", "navbar__img");
        img_1_list.setAttribute("src", listPoke[i].getImage());
        img_1_list.setAttribute("alt", "img_poke_" + listPoke[i].getNumber());
        div_2.appendChild(h2_1_list);
        div_2.appendChild(img_1_list);
        div_1.appendChild(div_2);
    }

    div__root.appendChild(div_1);

    document.body.insertBefore(div__root, div);
}

function showWelcome(){
    alert("Bienvenido a la página web Pokemoniaco");
}

/*

let listPoke = [];

class ListP {
    constructor(name, image, number) {
      this.name = name;
      this.image = image;
      this.number = number;
    }
    
    getName(){
        return this.name;
    }

    getImage(){
        return this.image;
    }

    getNumber(){
        return this.number;
    }

    toString(){
        return this.name + " " + this.image;
    }
}


function fetchFunct(){
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
        return response.json();
    })
    .then((result1) => {
        console.log(result1)
        for(let i = 0; i < result1.results.length; i++){
            fetch(result1.results[i].url)
            .then((response) => {
                return response.json();
            })
            .then((result2) => {
                console.log(result2)
                console.log(result2.sprites.front_default)
                let j = new ListP(result2.name, result2.sprites.front_default, result2.order);
                listPoke.push(j);
            });
        }
        console.log(listPoke)
    });
}*/
