describe ("BMICalculator", function(){
  var calculator;
  var person;

  describe("calculates the BMI of a person with metric units", function(){

    beforeEach(function(){
      person = new Person({weight: 90, height: 186});
      calculate = new BMICalculator();

      it("returns the BMI value for a person", function(){
        calculate.bmi(person);
        expect(person.bmiValue).toEqual(26.01);
      });
    });
  });


  // describe("calculates value with imperial units and", function(){
  //   beforeEach(function(){
  //     person = new Person({weight: 200, height: 66, toggle: true});
  //     calculator = new BMICalculator();
  //   });
  //
  //   it("displays bmiValue", function(){
  //     expect(person.bmiValue).toEqual(32.28);
  //   });
  // });

});
