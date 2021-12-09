export {fetchFunct};
export {listPoke};
import { ListP } from "./js_list.js";

let listPoke = [];
let listAb = [];
async function fetchFunct(){
    listPoke = [];

    for(let i = 0; i < 50; i++){
        await fetch('https://pokeapi.co/api/v2/pokemon/' + (i+1))
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            listAb = [];
            for(let i = 0; i < result.abilities.length; i++){
                listAb.push(result.abilities[i].ability.name);
            }
            let j = new ListP(result.name, result.sprites.front_default, result.id, listAb);
            listPoke.push(j);
        });
    }
}