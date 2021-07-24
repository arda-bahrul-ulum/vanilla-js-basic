const Person = {
  firstName: "Kimi",
  lastName: "Hime",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  weight: 65,
  height: 172,
  WeightIdeal: function () {
    const heightMinus100 = this.height - 100;
    return heightMinus100 - (heightMinus100 * 10) / 100;
  },

  needDiet: function () {
    const WeightIdeal = this.WeightIdeal();

    if (WeightIdeal - 5 > this.weight) {
      return "your'e need more protein " + (WeightIdeal - this.weight) + " Kg";
    } else if (WeightIdeal + 5 < this.weight) {
      return (
        "your'e need Diet, need reduce weight : " +
        (this.weight - WeightIdeal) +
        " Kg"
      );
    }

    return "your'e in a good shape";
  },
};

console.log(Person.fullName());
console.log(Person.WeightIdeal());
console.log(Person.needDiet());

// const Countries = {
//   ID: {
//     province: ["Bali", "Jawa Timur", "Jawa Tengah"],
//     city: ["Singaraja", "Gianyar", "Negare", "Badung"],
//   },
//   MY: {},
//   TH: {
//     province: [],
//   },
// };

// console.log(Countries?.TH?.province ?? "Not Found ");
