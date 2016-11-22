describe("BMI_UI - index.html", function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = ".";
        loadFixtures("index.html");
        $.holdReady(false);
    });

    describe("checks the field input values", function() {

      it("accepts an input of weight of 90", function() {
        $("#weight").val(90);
        expect($("#weight").val()).toEqual("90");
      });

      it("accepts an input of height of 186", function() {
        $("#height").val(186);
        expect($("#height").val()).toEqual("186");
      });
    });

    describe("displays response messages for metric calculations", function() {
      beforeEach(function(){
        $("input[type='radio']").get(0).checked = 'true';
        $('#weight').val('90');
        $('#height').val('186');
        $('#calculate').click();
      });

      it("with a bmi value", function (){
        expect($('#display_value').text()).toEqual('Your BMI is 26.01');
      });

      it("and a bmi message", function() {
        expect($('#display_message').text()).toEqual('and you are Overweight');
      });

    });

    describe("displays response messages for imperial calculations", function() {
      beforeEach(function(){
        $("input[type='radio']").get(1).checked = 'true';
        $('#weight').val('90');
        $('#height').val('186');
        $('#calculate').click();
      });

      it("with a bmi value", function (){
        expect($('#display_value').text()).toEqual('Your BMI is 26.01');
      });

      it("and a bmi message", function() {
        expect($('#display_message').text()).toEqual('and you are Overweight');
      });

    });

});
