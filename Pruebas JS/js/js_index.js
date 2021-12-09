import { requestList } from "./js_list.js";

const menuItem = document.getElementsByClassName("navbar__link");
const menuLogo = document.getElementById("header_index");

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

function addListeners(){
    document.getElementById("btn_1").addEventListener("click", toggleText, false);
}

function addEventListerner(el){
    el.addEventListener("click", () => {
        if(location.hash === el.hash){
            alert("Ya estas aquí");
        }else{
            changeView(el);
        }
    });
}

$(document).ready(function(){
    setTimeout(showWelcome, 2000);

    hoverContent();

    addListeners();

    addEventListerner(menuLogo);

    for(let i = 0; i < menuItem.length; i++){
        addEventListerner(menuItem[i]);
    }
});

function changeView(e){
    location.hash === "#home" || location.hash === "" ?
    viewList(e) : viewHome(e);
}

function hoverMenuBar(e){
    //Set all attributes class from menu bar to 'navbar__link'
    for(let i = 0; i < menuItem.length; i++){
        menuItem[i].setAttribute("class", "navbar__link");
        if(e.hash == menuItem[i].hash){
            e = menuItem[i];
        }
    }
    //Add, to the focus link, the attribute class 'navbar__link--active'
    e.setAttribute("class", "navbar__link navbar__link--active");
}

export function removeElement(){
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
    let div_4 = document.createElement("div");


    let h2_1_home = document.createElement("H2");
    let text_h2_1 = document.createTextNode("Podrás ver una lista de pokémons.");
    h2_1_home.appendChild(text_h2_1);
    let img_1_home = document.createElement("img");
    img_1_home.setAttribute("class", "navbar__img");
    img_1_home.setAttribute("src", "./img/img_2.jpg");
    img_1_home.setAttribute("alt", "img_1");
    div_2.appendChild(h2_1_home);
    div_2.appendChild(img_1_home);
    div_1.appendChild(div_2);


    let h2_2_home = document.createElement("H2");
    let text_h2_2 = document.createTextNode("Podrás ver los datos de un pokémon en detalle.");
    h2_2_home.appendChild(text_h2_2);
    let img_2_home = document.createElement("img");
    img_2_home.setAttribute("class", "navbar__img");
    img_2_home.setAttribute("src", "./img/img_1.png");
    img_2_home.setAttribute("alt", "img_2");
    div_3.appendChild(h2_2_home);
    div_3.appendChild(img_2_home);
    div_1.appendChild(div_3);

    let p_home = document.createElement("p");
    let span_home = document.createElement("span");
    span_home.setAttribute("id", "span_1");
    let btn_home = document.createElement("button");
    btn_home.setAttribute("id", "btn_1");
    let text_btn = document.createTextNode("See More");
    btn_home.appendChild(text_btn);

    let text_p = document.createTextNode("Est ei erat mucius quaeque. Ei his quas phaedrum, efficiantur " + 
    "mediocritatem ne sed, hinc oratio blandit ei sed. Blandit gloriatur eam et. Brute noluisse per et, " +
    "verear disputando neglegentur at quo. Sea quem legere ei, unum soluta ne duo. Ludus complectitur ...");
    span_home.appendChild(text_p);
    p_home.appendChild(span_home);
    p_home.appendChild(btn_home);
    div_4.appendChild(p_home);
    div_1.appendChild(div_4);

    div__root.appendChild(div_h1);
    div__root.appendChild(div_1);

    document.body.insertBefore(div__root, div);

    addListeners();
}

let status = "less";

function toggleText()
{
    let text="Est ei erat mucius quaeque. Ei his quas phaedrum, efficiantur " + 
    "mediocritatem ne sed, hinc oratio blandit ei sed. Blandit gloriatur eam et. Brute noluisse per et, " +
    "verear disputando neglegentur at quo. Sea quem legere ei, unum soluta ne duo. Ludus complectitur " +
    "quo te, ut vide autem homero pro. Has maiorum habemus detraxit at. Timeam fabulas splendide et his. " +
    "Facilisi aliquando sea ad, vel ne consetetur adversarium. Integre admodum et his, nominavi " +
    "urbanitas et per, alii reprehendunt et qui. His ei meis legere nostro, eu kasd fabellas " +
    "definiebas mei, in sea augue iriure. Id sea utamur aperiam, te per choro accusamus consulatu. " +
    "Brute munere corrumpit ut pri. Ea ipsum appareat erroribus mea. Mei probo inani aliquid ad. Omnis " +
    "fabulas concludaturque an vix, an noluisse takimata facilisis pro, sit te volumus mandamus. " +
    "Ad malorum imperdiet duo, ea possim utamur accusamus vix. No his munere interesset. At soluta " +
    "accusam gloriatur eos, ferri commodo sed id, ei tollit legere nec. Eum et iudico graecis, cu " +
    "zzril instructior per, usu at augue epicurei. Saepe scaevola takimata vix id. Errem dictas " +
    "posidonium id vis, ne modo affert incorrupte eos. At quaeque adversarium ius, sed at integre " +
    "persius verterem. Sit summo tibique at, eam et fugit complectitur, vis te natum vivendum mandamus. " +
    "Iudico quodsi cum ad, dicit everti sensibus in sea, ea eius paulo deterruisset pri. Pro id " +
    "aliquam hendrerit definitiones. Per et legimus delectus. In mel saperet expetendis. Vitae " + 
    "urbanitas sadipscing nec ut, at vim quis lorem labitur. Exerci electram has et, vidit solet " +
    "tincidunt quo ad, moderatius contentiones nec no. Nam et puto abhorreant scripserit, et cum " +
    "inimicus accusamus.";

    if (status == "less") {
        document.getElementById("span_1").innerHTML=text;
        document.getElementById("btn_1").innerText = "See Less";
        status = "more";
    } else if (status == "more") {
        document.getElementById("span_1").innerHTML = "Est ei erat mucius quaeque. Ei his quas phaedrum, efficiantur " + 
    "mediocritatem ne sed, hinc oratio blandit ei sed. Blandit gloriatur eam et. Brute noluisse per et, " +
    "verear disputando neglegentur at quo. Sea quem legere ei, unum soluta ne duo. Ludus complectitur ...";
        document.getElementById("btn_1").innerText = "See More";
        status = "less"
    }
}

function viewList(e){    
    hoverMenuBar(e);
    removeElement();
    requestList();
}

function showWelcome(){
    alert("Bienvenido a la página web Pokemoniaco");
}

