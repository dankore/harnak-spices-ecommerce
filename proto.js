let data = [
  {
    category: "men clothing",
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  },
  {
    category: "men clothing",
    description: "Mens Cotton Jacket",
    id: 2,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  },
  {
    category: "men clothing",
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  }
];


let obj = {}; // { '1': 2, '2': 1 }
let arr = [];

// for (let i = 0; i < data.length; i++) {
//   const element = data[i];
//   if (!obj.hasOwnProperty(element.id)) {
//     obj[element.id] = 1;
//   } else {
//     obj[element.id] += 1;
//   }
// }

for (let i = 0; i < data.length; i++) {
  const element = data[i];
  if (!obj.hasOwnProperty(element.id)) {
    obj[element.id] = 1;
    arr.push(element);
  } 
}

console.log(arr);