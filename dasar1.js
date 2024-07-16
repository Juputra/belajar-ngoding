//cara membuat variabel
var a ='a';
let b ='b';
const c = 'c'

//cariabel bisa menampung tipe data string (teks), interger/number, boolean, array, object,

let nama ="Mishael";//string
let umur =18;//number
let apakahBenar = true;//boolean
let uang = 5000.5 //number namun ada koma

//operator aritmatika

let angka1 = 10
let angka2 = 20
console.log(angka1 + angka2, 'pertambahan');
console.log(angka1 - angka2, 'pengurangan');
console.log(angka1 / angka2, 'pembagian');
console.log(angka1 * angka2, 'perkalian');
console.log(angka1 % angka2, 'modulus');

//disini kita belajar mengisi variabel
let penampungHasiOperatorAritmatika = angka1 + angka2;
console.log(penampungHasiOperatorAritmatika); // 30

penampungHasiOperatorAritmatika = angka1 - angka2;
console.log(penampungHasiOperatorAritmatika); // -10

penampungHasiOperatorAritmatika = angka1 / angka2;
console.log(penampungHasiOperatorAritmatika); // 1/2

penampungHasiOperatorAritmatika = angka1 * angka2;
console.log(penampungHasiOperatorAritmatika); //200

penampungHasiOperatorAritmatika = angka1 % angka2;
console.log(penampungHasiOperatorAritmatika); //10

//string juga bisa ditambah namun string ga bisa dikurng dengan operator aritmatika
let firstname = 'Mishael';
let lastname = 'Putra';
let fullname = (firstname + ' ' + lastname)
console.log (fullname)
console.log (firstname + ' ' + lastname)
console.log (firstname - ' ' - lastname)

//alur pembacaan code
//untuk membaca code kalian harus membacanya dar ikiri ke kanan, dan atas ke bawah
//contoh

let number = 30;
console.log (number + 20); //50
number = 20;
console.log (number + 10); //30
number = false;
console.log (number + 10); //10

//Kenapa false + 10 hasilnya 10? Karena false = 0, true = 1;
console.log (true + 10); //11

//membaca error
//error itu jangan ditakuti, justru harus takur kalau ada tidak ada yang namanya error dalam pemrograman
//karena dalam pekerjaan kalau suatu fitur berjalan namun ada bug tapi tidak error, itu bikin prgrammer rada
//muak buat mencari errornya atau letak kesalahannya

//contoh error
// const hewan ='jerapah';
// console.log (hewan);
// hewan = 'buaya';

//auto komentar bisa dengan mencet ctrl + /

//tipsnya adalah selalu teliti, kalau ada error dibaca aja, dan belajar ngoding itu perlu kebiasaan
//karena ngoding itu habit