$(document).ready(function () {
  $('#calculate').click(function () {
    if ( $('input[name=toggle]:checked').val() === undefined ) alert('You need to choose metric or imperial units first!');

    var w = parseInt($('#mweight').val());
    var h = parseInt($('#height').val());
    var t = $('input[name=toggle]:checked').val();
    if ( t == 'true') {
      w = parseInt($('#iweight').val());
      h = parseInt($('#ft').val()) * 12 + parseInt($('#in').val());
    }
    var person = new Person({weight: w, height: h, toggle: t});
    person.calculate_bmi();
    $('#display_value').html('Your BMI is ' + person.bmiValue);
    $('#display_message').html('and you are '+ person.bmiMessage);
  });
});
