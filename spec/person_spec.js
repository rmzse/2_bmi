describe ("Person", function() {
  var person;

  beforeEach(function () {
    person = new Person({weight: 90, height: 186});
  });

  it("has a weight of 90", function() {
    expect(person.weight).toEqual(90);
  });

});
