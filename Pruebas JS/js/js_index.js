import { requestList } from "./js_list.js";

const menuItem = document.getElementsByClassName("navbar__link");
const menuLogo = document.getElementById("navbar_index");
//Variable to show less or more information
let status = "less";

function initEvents(){
    //Event Listeners for Content and for Button See More
    addEventListeners();

    //Event Listeners for Navigation Button
    addEventListerner(menuLogo);
    for(let i = 0; i < menuItem.length; i++){
        addEventListerner(menuItem[i]);
    }

    //Welcome Alert
    setTimeout(showWelcome, 2000);
}

function addEventListeners(){
    let index = document.getElementById("content_dynamic");

    index.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "lightGrey";
    });

    index.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "";
    });

    document.getElementById("content_btn_1").addEventListener("click", toggleText, false);
}

function addEventListerner(el){
    el.addEventListener("click", () => {
        if(location.hash === el.hash){
            alert("Ya estas aquí");
        }else{
            //Change View to Home or List
            changeView(el);
        }
    });
}

function showWelcome(){
    alert("Bienvenido a la página web Pokemoniaco");
}

if (document.readyState !== 'loading') {   
    initEvents();
} else{
    document.addEventListener("DOMContentLoaded", function(){
        initEvents();
    });
}

function changeView(e){
    location.hash === "#home" || location.hash === "" ?
    viewList(e) : viewHome(e);
}

function activeItemMenuBar(e){
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
    let el = document.getElementById("content_dynamic");
    el.remove();
}

function createH2AndImgElement(div_1, div_2, text, image){
    let h2 = document.createElement("H2");
    let text_1 = document.createTextNode(text);
    h2.appendChild(text_1);
    let img = document.createElement("img");
    img.setAttribute("class", "content__img");
    img.setAttribute("src", image);
    img.setAttribute("alt", "img_1");
    div_2.appendChild(h2);
    div_2.appendChild(img);
    div_1.appendChild(div_2);
}

function createDummyText(div_1, div_4){
    let p_home = document.createElement("p");
    p_home.setAttribute("class", "content__p");
    let span_home = document.createElement("span");
    span_home.setAttribute("id", "content_span_1");
    let btn_home = document.createElement("button");
    btn_home.setAttribute("id", "content_btn_1");
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
}

function viewHome(e){
    activeItemMenuBar(e);
    removeElement();

    let div = document.getElementById("content");

    //Create primary_div
    let div__root = document.createElement("div");
    div__root.setAttribute("id", "content_dynamic");
    div__root.setAttribute("class", "content");

    //Create div inside primary_div. Then add to div a new h1.
    let div_h1 = document.createElement("div");
    let h1_home = document.createElement("H1");
    h1_home.setAttribute("class", "content__h1");
    let text_h1 = document.createTextNode("Esta página web simula una Pokedex.");
    h1_home.appendChild(text_h1);
    div_h1.appendChild(h1_home);

    //Create div_1
    let div_1 = document.createElement("div");
    div_1.setAttribute("class", "content__div");
    
    
    let div_2 = document.createElement("div");
    let div_3 = document.createElement("div");
    div_2.setAttribute("class", "content__div1");
    div_3.setAttribute("class", "content__div1");
    let div_4 = document.createElement("div");

    //Create text and image and add it to div_2. Then div_2 add it to div_1
    createH2AndImgElement(div_1, div_2, "Podrás ver una lista de pokémons.", "./img/img_1.jpg");

    //Create text and image and add it to div_3. Then div_3 add it to div_1
    createH2AndImgElement(div_1, div_3, "Podrás ver los datos de un pokémon en detalle.", "./img/img_2.png");

    //Create dummy text with button and add it to div_4. Then div_4 add it to div_1
    createDummyText(div_1, div_4);

    div__root.appendChild(div_h1);
    div__root.appendChild(div_1);

    document.body.insertBefore(div__root, div);
    addEventListeners();

}

function toggleText(){
    if (status === "less") {
        document.getElementById("content_span_1").innerHTML = getDummyText();
        document.getElementById("content_btn_1").innerText = "See Less";
        status = "more";
    } else if (status === "more") {
        document.getElementById("content_span_1").innerHTML = 
        "Est ei erat mucius quaeque. Ei his quas phaedrum, efficiantur " + 
        "mediocritatem ne sed, hinc oratio blandit ei sed. Blandit gloriatur eam et." +
        "Brute noluisse per et, verear disputando neglegentur at quo. Sea quem legere ei, " + 
        "unum soluta ne duo. Ludus complectitur ...";
        document.getElementById("content_btn_1").innerText = "See More";
        status = "less";
    }
}

function viewList(e){    
    activeItemMenuBar(e);
    removeElement();
    requestList();
}

function getDummyText(){
    return "Est ei erat mucius quaeque. Ei his quas phaedrum, efficiantur " + 
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
}