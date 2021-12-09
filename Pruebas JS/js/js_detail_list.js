import * as List from "./js_list";

class Item extends List {
    constructor(name, description){
        super(name, image);
        this.description = description;
    }

    getDescription(){
        return this.description;
    }

    toString(){
        return this.name + " " + this.image + " " + this.description;
    }
}