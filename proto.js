let data = [
  {
    category: 'men clothing1',
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    id: 1,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    price: 109.95,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  },
  {
    category: 'men clothing',
    description: 'Mens Cotton Jacket',
    id: 2,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    price: 109.95,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  },
  {
    category: 'men clothing3',
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    id: 1,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    price: 109.95,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  },
];

var i = data.findIndex((item) => item.id == 1);
let u = data.splice(i, 1);
console.log(u, data);
