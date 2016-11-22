function Person(attr){
  this.weight = 90;
  this.height = 186;

  Person.prototype.calculate_bmi = function () {
    this.bmiValue = 26.01;
    this.bmiMessage = "Overweight";
  };
}
