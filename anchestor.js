const anchestor = [
  {
    name: "Sumandra",
    child: [
      {
        name: "Wayan Tjinta",
        child: [
          {
            name: "Mbok Adek",
          },
          {
            name: "Kakmang",
          },
          {
            name: "Mbak Tanjung",
            child: [
              {
                name: "Arjuna",
              },
            ],
          },
          {
            name: "Yein",
          },
        ],
      },
      {
        name: "Sumayasa",
        child: [
          {
            name: "Lolik",
            child: [{ name: "Wira" }],
          },
          {
            name: "Novita",
          },
          {
            name: "Suguscol",
          },
        ],
      },
    ],
  },
];

console.log(anchestor);

function renderAnchestor(node, depth = 0) {
  let inheritance = "",
    space = "";

  for (let i = 0; i < depth; i++) {
    inheritance += "-";
    space += " ";
  }

  console.log(depth);

  node.forEach(function (item) {
    console.log(
      `${depth > 0 ? space + "└" + inheritance + "" : ""} ${item.name}`
    );

    if (item.child) renderAnchestor(item.child, (depth += 1));
  });
}

renderAnchestor(anchestor, 0);
