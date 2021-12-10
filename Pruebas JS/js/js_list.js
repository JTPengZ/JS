import { fetchFunct } from "./info.js";
import { listPoke } from "./info.js";
import { itemClicked } from "./js_detail_list.js";

export class ListP {
    constructor(name, image, number, abilities) {
      this.name = name;
      this.image = image;
      this.number = number;
      this.abilities = abilities;
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

    getAbilities(){
        return this.abilities;
    }
}

export async function requestList(){
    await fetchFunct();

    let div = document.getElementById("content");

    let div__root = document.createElement("div");
    div__root.setAttribute("id", "content_dynamic");
    div__root.setAttribute("class", "content");

    let div_1 = document.createElement("div");
    div_1.setAttribute("class", "content__div");

    let div_2;
    let h2_1_list;
    let text_h2_1;
    let img_1_list;
    for(let i = 0; i < listPoke.length; i++){
        div_2 = document.createElement("div");
        i % 4 === 0 || (i - 3) % 4 == 0? div_2.setAttribute("class", "content__div1 content__div1--lgrey") : div_2.setAttribute("class", "content__div1");
        div_2.addEventListener("click", itemClicked, false);
        div_2.list = new ListP(listPoke[i].getName(), listPoke[i].getImage(), listPoke[i].getNumber(), listPoke[i].getAbilities());

        h2_1_list = document.createElement("H2");
        text_h2_1 = document.createTextNode(listPoke[i].getNumber() + ".- " + listPoke[i].getName());
        h2_1_list.appendChild(text_h2_1);
        img_1_list = document.createElement("img");
        img_1_list.setAttribute("class", "content__img");
        img_1_list.setAttribute("src", listPoke[i].getImage());
        img_1_list.setAttribute("alt", "img_poke_" + listPoke[i].getNumber());
        div_2.appendChild(h2_1_list);
        div_2.appendChild(img_1_list);
        div_1.appendChild(div_2);
    }

    div__root.appendChild(div_1);

    document.body.insertBefore(div__root, div);
}


