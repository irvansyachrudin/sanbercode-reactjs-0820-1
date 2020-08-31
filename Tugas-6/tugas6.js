// soal 1

const luasLingkaran = (r) => 3.14 * r * r;
console.log('Function =', luasLingkaran(10));

// soal 2
let kalimat = ""

let saya = 'saya'
let adalah = 'adalah'
let seorang = 'seorang'
let frontend = 'frontend'
let developer = 'developer'

const theString = `${saya} ${adalah} ${seorang} ${frontend} ${developer}`

console.log(theString) // Zell Liew, unaffiliated

// soal 3


function newFunction(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: function () {
            console.log(firstName + " " + lastName);
        }
    };
}

//Driver Code 
newFunction("William", "Imoh").fullName()

// soal 4

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation, spell } = newObject

console.log(firstName, lastName, destination, occupation, spell)


// soal 5

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

let combinedArray = [...west, ...east]

//Driver Code
console.log(combinedArray)

