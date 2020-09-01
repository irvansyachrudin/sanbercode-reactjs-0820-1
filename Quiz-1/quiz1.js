
function linkaran(r) {
    return 3.14 * r * r
}

var r = 12

var luasLingkaran = linkaran(r);
console.log(luasLingkaran)

var alatTulis = ["2. Pensil", "5. Penghapus", "3. Pulpen", "4. Penggaris", "1. Buku"];
alatTulis.sort();

document.write('<br>');
var i = 0;

while (i < alatTulis.length) {
    document.writeln(alatTulis[i] + "<br>");
    i++;
}

var arrayDaftarPeserta = [["Budi", "Pria", "172cm"], ["Susi", "Wanita", "162cm"], ["Lala", "Wanita", "155cm"], ["Agung", "Pria", "175cm"]]

var obj = Object.assign({}, arrayDaftarPeserta);

console.log(obj);


var daftarNama = []

function tambahDaftarNama(nama, JenisKelamin) {
    daftarNama.push({
        nama: nama,
        jk: JenisKelamin
    })
}

tambahDaftarNama("Asep", "Laki-laki");
daftarNama[0].panggilan = "Bapak";
tambahDaftarNama("Siti", "Perempuan");
daftarNama[1].panggilan = "Ibu";
tambahDaftarNama("Yeni", "Perempuan");
daftarNama[2].panggilan = "Ibu";
tambahDaftarNama("Rudi", "Laki-laki");
daftarNama[3].panggilan = "Bapak";
tambahDaftarNama("Adit", "Laki-laki");
daftarNama[4].panggilan = "Bapak";

console.log(daftarNama)

daftarNama.forEach(function (item, index) {
    iterasi = index + 1;
    // console.log(iterasi + ". " + item.panggilan + " " + item.nama);
    document.writeln(iterasi + ". " + item.panggilan + " " + item.nama + "<br>");
})


// var arrayDaftarPeserta = [["Budi", "Pria", "172cm"], ["Susi", "Wanita", "162cm"], ["Lala", "Wanita", "155cm"], ["Agung", "Pria", "175cm"]]

// var objectPeserta = {
//     nama: arrayDaftarPeserta[0][0],
//     jenisKelamin: arrayDaftarPeserta[0][1],
//     tinggi: arrayDaftarPeserta[0][2]
// }

// console.log(objectPeserta)

