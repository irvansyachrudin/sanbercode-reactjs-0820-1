// soal 1
function halo() {
    return "Halo Sanbers!!";
}

//   halo(); 
console.log(halo()); // "Halo Sanbers!" 

// soal 2

function kalikan(num1, num2) {
    return num1 * num2
}

var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48

// soal 3
function introduce(name, age, address, hobby) {
    return "Nama Saya " + name + " Umur saya " + age + " tahun, alamat saya di" + address + " dan saya punya hobby yaitu " + hobby + "!";
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!" 


// soal 4

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992]

var obj = Object.assign({}, arrayDaftarPeserta);
obj['nama'] = obj[0];
delete obj[0];
obj['jenis kelamin'] = obj[1];
delete obj[1];
obj['hobi'] = obj[2];
delete obj[2];
obj['tahun lahir'] = obj[3];
delete obj[3];

console.log(obj);

// soal 5

var buah = [
    { nama: "strawberry", warna: "merah", ada_bijinya: "tidak", harga: "9000" },
    { nama: "jeruk", warna: "oranye", ada_bijinya: "ada", harga: "8000" },
    { nama: "Semangka", warna: "Hijau & Merah", ada_bijinya: "ada", harga: "10000" },
    { nama: "Pisang", warna: "Kuning", ada_bijinya: "tidak", harga: "5000" }
]

console.log(buah[0])

// soal 5

var dataFilm = [];

dataFilm.push({ 'nama': 'avengers' });
dataFilm.push({ 'durasi': '2 jam' });
dataFilm.push({ 'genre': 'action' });
dataFilm.push({ 'nama': 2019 });

console.log(dataFilm);
