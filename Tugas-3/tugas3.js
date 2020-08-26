// soal 1

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var kataKeempat = kataKeempat.toUpperCase();
var kataKedua = kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1)

var str1 = " ";
var res = str1.concat(kataPertama + " " + kataKedua + " " + kataKetiga + " " + kataKeempat);

// document.getElementById("demo").innerHTML = res;
console.log(res);

// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

satu = parseInt(kataPertama);
dua = parseInt(kataKedua);
tiga = parseInt(kataKetiga);
empat = parseInt(kataKeempat);

total = satu + dua + tiga + empat;
console.log(total);

// soal 3

var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 15);
var kataKetiga = kalimat.substring(15, 19);
var kataKeempat = kalimat.substring(19, 25);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);

// soal 4

var nilai = 72;

if (nilai >= 80) {
    index = 'A';
} else if (nilai >= 70 && nilai < 80) {
    index = 'B';
} else if (nilai >= 60 && nilai < 70) {
    index = 'C';
} else if (nilai >= 50 && nilai < 60) {
    index = 'D';
} else if (nilai < 50) {
    index = 'E';
}
console.log(index);

// soal 5 

var tanggal = 29;
var bulan = 5;
var tahun = 1997;
var text;

switch (bulan) {
    case 1:
        text = "Januari";
        break;
    case 2:
        text = "Februari";
        break;
    case 3:
        text = "Maret";
        break;
    case 4:
        text = "April";
        break;
    case 5:
        text = "Mei";
        break;
    case 6:
        text = "Juni";
        break;
    case 7:
        text = "Juli";
        break;
    case 8:
        text = "Agustus";
        break;
    case 9:
        text = "September";
        break;
    case 10:
        text = "Oktober";
        break;
    case 11:
        text = "November";
        break;
    case 12:
        text = "Desember";
        break;
}
console.log(tanggal + " " + text + " " + tahun);
