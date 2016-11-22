describe ("BMICalculator", function(){
  var calculator;
  var person;

  beforeEach(function(){
    person = new Person({weight: 90, height: 186});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric units", function(){
    calculator.bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });

  describe("calculates value with imperial units and", function(){
    beforeEach(function(){
      person = new Person({weight: 200, height: 66});
      calculator = new BMICalculator();
    });

    it("calculates BMI for a person using imperial units", function(){
      expect(person.bmiValue).toEqual(32.28);
    });
  });

});
