export { itemClicked };
import {removeElement} from "./js_index.js";

function itemClicked(evt){
    removeElement();
    let list = evt.currentTarget.list;

    let div = document.getElementById("content");


    let div__root = document.createElement("div");
    div__root.setAttribute("id", "dynamic_content");
    div__root.setAttribute("class", "content");

    let div_1 = document.createElement("div");
    div_1.setAttribute("class", "content__div");    
    let div_2;
    let h2_1_list;
    let text_h2_1;
    let h3_1_list;
    let text_h3_1;
    let h3_2_list;
    let text_h3_2;
    let img_1_list;

    div_2 = document.createElement("div");
    div_2.setAttribute("class", "content__div1");

    h2_1_list = document.createElement("H2");
    text_h2_1 = document.createTextNode(list.getName().toUpperCase());
    h2_1_list.appendChild(text_h2_1);
    img_1_list = document.createElement("img");
    img_1_list.setAttribute("class", "navbar__img");
    img_1_list.setAttribute("src", list.getImage());
    img_1_list.setAttribute("alt", "img_poke_" + list.getName());
    
    div_2.appendChild(h2_1_list);
    div_2.appendChild(img_1_list);
    h3_1_list = document.createElement("H3");
    text_h3_1 = document.createTextNode("Habilities: ");
    h3_1_list.appendChild(text_h3_1);
    div_2.appendChild(h3_1_list);
    list.getAbilities().forEach(function(abname) {
        h3_2_list = document.createElement("H3");
        text_h3_2 = document.createTextNode(abname);
        h3_2_list.appendChild(text_h3_2);
        div_2.appendChild(h3_2_list);
      });
    div_1.appendChild(div_2);

    div__root.appendChild(div_1);

    document.body.insertBefore(div__root, div);
}