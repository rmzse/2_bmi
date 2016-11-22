function BMICalculator(){
  // console.log('BMICalculator object initiated');
}

BMICalculator.prototype.bmi = function(obj){
  // console.log("BMICalculator.prototype.bmi initiated with" + " person.w: " + obj.weight + ", person.h: " + obj.height + ', person.toggle: ' + obj.toggle);
  var weight = obj.weight;
  var height = obj.height;
  var toggle = obj.toggle;
  var divisor = 100;
  var multiplier = 1;
  // debugger;
  if ( weight > 0 && height > 0 ) {
    if (toggle === 'true') {
      divisor = 1;
      multiplier = 703;
    }
    // console.log('w: ' + weight + ', h: ' + height + ', t: ' + toggle + ', d: ' + divisor + ', m: ' + multiplier);
    // debugger;
    var finalBmi = (weight * multiplier) / Math.pow((height / divisor),2);
    obj.bmiValue =  parseFloat(finalBmi.toFixed(2));
    // console.log('obj.bmiValue = ' + obj.bmiValue );
    setBMIMessage(obj);
    // console.log(obj.bmiMessage);
  }
};

function setBMIMessage (obj) {
  // console.log('obj.bmiValue = ' + obj.bmiValue );
  if (obj.bmiValue < 18.5) {
    obj.bmiMessage = "Underweight";
  }
  if (obj.bmiValue >= 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = "Normal";
  }
  if (obj.bmiValue >= 25 && obj.bmiValue < 30) {
    obj.bmiMessage = "Overweight";
  }
  if (obj.bmiValue >= 30) {
    obj.bmiMessage = "Obese";
  }
}
