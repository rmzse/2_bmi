function Person(attr){
  this.weight = 90;
  this.height = 186;

  Person.prototype.calculate_bmi = function () {
    calculator = new BMICalculator();
    calculator.bmi(this);
  };
}
