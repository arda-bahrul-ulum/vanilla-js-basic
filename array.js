const namaMantan = ["Komang", "Made", "Ketut", "Wayan Galuh"];

// console.log(namaMantan.length);

// pengulangan
// namaMantan.forEach(function (item, index, array) {
//   console.log(item, index);
// });

// menambah array
// namaMantan.push("Dewi");

// console.log(namaMantan);

// menghapus item akhir
// namaMantan.pop();

// console.log(namaMantan);

// menghapus item awal
// namaMantan.shift();

// console.log(namaMantan);

// console.log(namaMantan.indexOf("Ketut") + 1);

// const indexKetut = namaMantan.indexOf("Ketut");

// namaMantan.splice(indexKetut, 1);

// console.log(namaMantan);

// slice menduplikasi sebuah array
// const namaMantanLama = namaMantan.slice();

// namaMantan.pop();

// console.log("nama mantan: ", namaMantan);
// console.log("nama mantan lama: ", namaMantanLama);

// reduce
// console.log(
//   namaMantan.reduce(function (acc, mantan, ke) {
//     acc[mantan] = `Mantan ke ${ke + 1}`;
//     return acc;
//   }, {})
// );

// looping for
// for (let index = 0; index < namaMantan.length; index++) {
//   const element = namaMantan[index];

//   console.log(element);
// }

// looping while
// let index = 0;
// while (index < namaMantan.length) {
//   const element = namaMantan[index];
//   console.log(element);

//   index++;
// }

console.log(
  namaMantan
    .filter(function (mantan, ke) {
      return mantan == "Made";
    })
    .map(function (mantan, ke) {
      return `${mantan} adalah mantan yang ke ${ke + 1}`;
    })
    .join(" - ")
);
