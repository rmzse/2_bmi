function Person(attr){
  this.weight = weight;
  this.height = height;
  // this.toggle = toggle;

  Person.prototype.calculate_bmi = function () {
    calculator = new BMICalculator();
    calculator.bmi(this);
  };
}
