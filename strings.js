// //check the type
//  function typeCheck(data){
//    return typeof(data)
//  }
// console.log(typeCheck('hello'))
// console.log(typeCheck(100))

// //now let go to concatination

//  let a = "hello" + "hello"
//  console.log(a)

//  let b = 'hello' +3//type coercion (auto;matic type conversion)
// console.log(b)
// ;
// //math in string
// //javascript table of priority;
// // (...)
// // */;
// // +-
// ;

// console.log('$'+ 20.94 + 7.44);//not round;ed and not using priority table
// //string also can follow order of operation in javascript
// console.log('$'+ Math.round(20.94 + 7.44));;//rounded and using priority table
// //when counting money we need true value not rounded
// console.log('$'+ (2094 + 744)/100 +"  accurate value");//rounded and using priority table ie:removed point and we will later convert to cents again;;


// items(2):                 $28.94
//to do this use this way


// let i = 'items('+ 1+1 +')';//items(11) but to solve this we will use


let j = 'items('+ (1+1) +'):               '+ '$' + (2095 + 799)/100;
console.log(j);
//there are three wys to create strings in javascript
//1 '', 2 "" , and ` ` [escape charachters 3, /', 4. /n new line, /"]
//eg 1 a = 'hello' ,1 a = 'I/'am',  2. a = "hello", 3, 

// using string interpolation

let text = `Items (${1+1})   $${(2095+799) / 100}`
console.log(text)
//an other thing on temprate strings
let k = `items
in`;
console.log(k)