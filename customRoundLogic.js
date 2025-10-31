function customRound(number){
  if(number - Math.round(number)<0.5){
    return Math.ceil(number);
  }else{
    return Math.floor(number);
  }
}
console.log(customRound(2.2));
console.log(customRound(2.));
