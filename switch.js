// const foo = "Papayas";
// let namaBuah = "";
// switch (foo) {
//   case "Papayas":
//     namaBuah = "Papayas";
//     break;

//   case "Salak":
//     namaBuah = "Salak";
//     break;

//   default:
//     namaBuah = "Semangka";
//     break;
// }

// console.log(namaBuah);

const nomor = 1;
function pilihBuah(nomor) {
  switch (nomor) {
    case 1:
      return "Salak";
    case 2:
      return "Apel";
    case 3:
      return "Strawberry";
    case 4:
      return "Jeruk";

    default:
      return "Semangka";
  }
}

console.log(pilihBuah(3));
