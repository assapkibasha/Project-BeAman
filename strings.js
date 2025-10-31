//check the type
 function typeCheck(data){
   return typeof(data)
 }
console.log(typeCheck('hello'))
console.log(typeCheck(100))

//now let go to concatination

 let a = "hello" + "hello"
 console.log(a)

 let b = 'hello' +3//type coercion (auto;matic type conversion)
console.log(b)
;
//math in string
//javascript table of priority;
// (...)
// */;
// +-
;

console.log('$'+ 20.94 + 7.44);//not round;ed and not using priority table
//string also can follow order of operation in javascript
console.log('$'+ Math.round(20.94 + 7.44));;//rounded and using priority table
//when counting money we need true value not rounded
console.log('$'+ (2094 + 744)/100 +"  accurate value");//rounded and using priority table ie:removed point and we will later convert to cents again;;