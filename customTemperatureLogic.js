function customTemperatureF(celicius){
  let fahreneiht =(celicius * 9/5) + 32;
  return (fahreneiht);
  
}
console.log(`2 degrees celicius = ${customTemperatureF(2)}`);

function customTemperatureC(fahreneiht){
  let celicius = (fahreneiht -32)* 5/9;
  return celicius;
}
console.log(`35.6 fahreneiht to celicius = ${customTemperatureC(35.6)}`);//not rounded
let round =customTemperatureC(35.6);
console.log("35.6 fahreneiht to celicius =" + Math.round(round));//rounded value