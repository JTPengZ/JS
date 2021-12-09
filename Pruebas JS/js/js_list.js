export {fetchFunct};
export {listPoke};

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


async function fetchFunct(){
    listPoke = [];
    let pr = new Promise((resolve, reject) => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then((response) => {
            return response.json();
        })
        .then((result1) => {
            for(let i = 0; i < result1.results.length; i++){
                fetch(result1.results[i].url)
                .then((response) => {
                    return response.json();
                })
                .then((result2) => {
                    let j = new ListP(result2.name, result2.sprites.front_default, result2.id);
                    listPoke.push(j);
                });
            }
        });
        resolve(listPoke);
    });

    let w = await pr;
    console.log(w);
}