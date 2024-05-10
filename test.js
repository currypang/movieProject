let a = {};

a.obj1 = { jack: { pass: 202, age: 23 } };

a.obj1.mark = { pass: 202, age: 23 };

let b = {
  "0de8f260-7685-41d2-8dd9-7d2127632e21": {
    name: "mark",
    text: "1231313",
    password: "11",
  },
  "44ca9320-13aa-4576-a7e8-67b3dda7da14": {
    name: "tom",
    text: "242432",
    password: "234",
  },
};
let f = "44ca9320-13aa-4576-a7e8-67b3dda7da14";
// console.log(b);
delete b[f];

console.log(b);
console.log(b);