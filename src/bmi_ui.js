$(document).ready(function () {
  var w;
  var h;
  var t;

  $('#calculate').click(function () {
    // var w = $('#weight').val();

    h = $('#height').val();
    t = $('input[name=toggle]:checked').val();
    var person = new Person({weight: w, height: h, toggle: t});
    person.calculate_bmi();
    $('#display_value').html('Your BMI is ' + person.bmiValue);
    $('#display_message').html('and you are '+ person.bmiMessage);
  });
});
