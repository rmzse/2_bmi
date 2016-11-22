describe ("Person", function() {
  var person;

  describe("calculate BMI with metric units", function(){
    beforeEach(function () {
      person = new Person({weight: 90, height: 186});
    });

    it("has a weight of 90", function() {
      expect(person.weight).toEqual(90);
    });

    it("has a height of 186", function() {
      expect(person.height).toEqual(186);
    });

    it("should calculate a BMI value", function (){
      person.calculate_bmi();
      expect(person.bmiValue).toEqual(26.01);
    });

    it("should have a BMI message", function(){
      person.calculate_bmi();
      expect(person.bmiMessage).toEqual("Overweight");
    });
  });

  describe("calculate BMI with imperial units", function(){
    beforeEach(function () {
      person = new Person({weight: 200, height: 66, toggle: true});
    });

    it("has a weight of 90", function() {
      expect(person.weight).toEqual(200);
    });
  //
  //   it("has a height of 186", function() {
  //     expect(person.height).toEqual(66);
  //   });
  //
  //   it("should calculate a BMI value", function (){
  //     person.calculate_bmi();
  //     expect(person.bmiValue).toEqual(32.28);
  //   });
  //
  //   it("should have a BMI message", function(){
  //     person.calculate_bmi();
  //     expect(person.bmiMessage).toEqual("Obese");
  //   });
  });
});
