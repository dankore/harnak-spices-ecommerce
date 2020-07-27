module.exports = {
  formatTitleAndDescription: function (s) {
    if (s) {
      const inputToArray = s.split(' ');
      if (inputToArray.length < 6) {
        return `${inputToArray.slice(0, 5).join(' ')}`;
      }
      return `${inputToArray.slice(0, 5).join(' ')}...`;
    }
  },
  removeDuplicatesGetCount: function (array) {
    const count = {};
    const result = [];

    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      /**
       * @param element
       * {
       *  category: 'men clothing',
       *  description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
       *  id: 1,
       *  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
       *  price: 109.95,
       *  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
       * }
       */

      if (!Object.prototype.hasOwnProperty.call(count, element.id)) {
        count[element.id] = 1;
        result.push(element);
      } else {
        count[element.id] += 1;
      }
    }

    return { count, result };
  },
};
