function Person(attr){
  this.weight = attr.weight;
  this.height = attr.height;
  this.toggle = attr.toggle;
  // console.log('person object initiated with ' +
  // 'w: ' + this.weight + ', h: ' + this.height + ', toggle: ' + this.toggle);

  Person.prototype.calculate_bmi = function () {
    calculate = new BMICalculator();
    calculate.bmi(this);
  };
}
