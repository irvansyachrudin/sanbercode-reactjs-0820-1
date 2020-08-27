// soal 1

document.write("<p>Looping Pertama</p>"); var jumlah = 0;
while (jumlah < 20) { // Loop akan terus berjalan selama nilai deret masih di atas 0
    jumlah += 2; // Menambahkan nilai variable jumlah dengan angka deret
    // console.log('Jumlah saat ini: ' + jumlah)
    document.write("<p>" + jumlah + " - I Love coding</p>");
}

document.write("<p>Looping Kedua</p>");
var jumlah2 = 22;
while (jumlah2 > 2) { // Loop akan terus berjalan selama nilai deret masih di atas 0
    jumlah2 += -2; // Menambahkan nilai variable jumlah dengan angka deret
    // console.log('Jumlah saat ini: ' + jumlah)
    document.write("<p>" + jumlah2 + " - I will become a frontend developer</p>");
}

// soal 2
for (counter = 1; counter < 21; counter++) {
    if ((counter % 3) === 0) {
        document.write(counter + ' -  I Love Coding' + '<br>');
    } else if ((counter % 2) == 1) {
        document.write(counter + ' - Santai' + '<br>');
    }
    else if ((counter % 2) === 0) {
        document.write(counter + ' - Berkualitas' + '<br>');
    }
}

// soal 3
var tinggi = 8;
for (baris = 0; baris <= tinggi; baris++) {
    // menampilkan pagar
    for (i = 1; i < 1 * baris; i++) {
        document.write("#");
    }

    // Pindah baris
    document.write("<br>");
}

// soal 4

var kalimat = "saya sangat senang belajar javascript";
var ar = kalimat.split(' ');
document.write(ar);
console.log(ar);

// soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();

document.write('<br>');
for (i = 0; i < daftarBuah.length; i++) {
    document.writeln(daftarBuah[i] + "<br>");
}

