function BMICalculator(){

  BMICalculator.prototype.bmi = function(obj){
    var weight = obj.weight;
    var height = obj.height;
    // if ( weight > 0 && height > 0 ) {
      var finalBmi = weight / Math.pow((height/100),2);
      obj.bmiValue =  parseFloat(finalBmi.toFixed(2));
    // }
  };
}
