describe ("BMICalculator", function(){
  var calculator;
  var person;

  describe("calculates the BMI of a person with metric units", function(){

    beforeEach(function(){
      person = new Person({weight: 90, height: 186, toggle: 'false'});
      calculate = new BMICalculator();
    });

    it("and returns the metric BMI value", function(){
      calculate.bmi(person);
      expect(person.bmiValue).toEqual(26.01);
    });

  });


  describe("calculates the BMI of a person with imperial units", function(){
    beforeEach(function(){
      person = new Person({weight: 200, height: 66, toggle: 'true'});
      calculate = new BMICalculator();
    });

    it(" and returns the imperial BMI value", function(){
      calculate.bmi(person);
      expect(person.bmiValue).toEqual(32.28);
    });
  });

});
