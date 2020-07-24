module.exports = {
  formatTitleAndDescription: function (s) {
    if (s) {
      const inputToArray = s.split(' ');
      if (inputToArray.length < 6) {
        return `${inputToArray.slice(0, 5).join(' ')}`;
      }
      return `${inputToArray.slice(0, 5).join(' ')}...`;
    }
  }

}