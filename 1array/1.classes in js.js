//console.log(this);

//context VS scope
const object4 = {
  a: function () {
    console.log(this);
  },
};
//instantiation
class Player {
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name},Iam a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard", this);
  }
  play() {
    console.log(`WEEEEEE I am a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
