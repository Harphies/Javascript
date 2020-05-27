// it contains all the rules; It's a good convention to name the model with initials be a capital letter.
const Weather = function (data) {
  this.data = data;
  this.errors = [];
};

Weather.prototype.validateUserInput = function () {
  if (this.data == "") {
    this.errors.push("Please enter the name of the city!");
  }
};

module.exports = Weather;
