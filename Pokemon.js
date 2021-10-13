class Pokemon{
    constructor(name , type, color){
        this.name=name;
        this.type=type;
        this.color=color;
    }
      showMore(){
        console.log(this.name + this.type+this.color);
    }
}

const pokemon1 = new Pokemon("Pikachu" , "electric" ,"yellow");
pokemon1.showMore();
const pokemon2 = new Pokemon("Eevee" , "normal" , "brown");
pokemon2.showMore();
const pokemon3 = new Pokemon("Squirtle", "water" ,"blue");
pokemon3.showMore();
