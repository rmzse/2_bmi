$(document).ready(function () {
  $('#calculate').click(function () {
    var w = $('#weight').val();
    var h = $('#height').val();
    var t = $("input[type='radio'].toggle:checked").val();
    var person = new Person({weight: w, height: h});
    person.calculate_bmi();
    $('#display_value').html('Your BMI is ' + person.bmiValue);
    $('#display_message').html('and you are '+ person.bmiMessage);
  });
});
