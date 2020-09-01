// soal 1
// release 0
class Animal {
    // Code class di sini
    constructor(AnimalName, legsAnimal, cold_blooded_animal) {
        this.AnimalName = AnimalName
        this.legsAnimal = legsAnimal
        this.cold_blooded_animal = cold_blooded_animal
    }
    get name() {
        return this.AnimalName;
    }
    get legs() {
        return this.legsAnimal;
    }
    get cold_blooded() {
        return this.cold_blooded_animal;
    }
}

var sheep = new Animal("shaun", 4, false);

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// release 1

class Ape extends Animal {
    constructor(AnimalName, legsAnimal, cold_blooded_animal) {
        super(AnimalName, legsAnimal, cold_blooded_animal);
        // this.yellAnimal = yellAnimal
    }
    yell() {
        return 'Auooo';
    }
}

class Frog extends Animal {
    constructor(AnimalName, legsAnimal, cold_blooded_animal) {
        super(AnimalName, legsAnimal, cold_blooded_animal);
        // this.yellAnimal = yellAnimal
    }
    jump() {
        return 'hop hop';
    }
}

var sungokong = new Ape("kera sakti");
console.log(sungokong.yell()) // "Auooo"

var kodok = new Frog("buduk")
console.log(kodok.jump()) // "Auooo"


// soal 2

class Clock {
    constructor({ template }) {
        this.template = template;
        this.timer;
    }

    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer)
    }

    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    }
}

var clock = new Clock({ template: 'h:m:s' });
clock.start();


