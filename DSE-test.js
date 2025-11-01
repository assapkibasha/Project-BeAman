const items = ['Rice','Beans','Flour','Oil','Sugar'];
const quantities = [25,8,5,15,30]

const merged = items.map((name,i)=>({name, Quantity : quantities[i]}));
console.log(merged)

//needing Reoder now

const reoderList = merged.filter(items => items.Quantity<10);
console.log(reoderList)

const count = reoderList.length;
console.log(`items needing reoder : ${count}`)

const average = quantities.reduce((a,b)=>a+b,0)/quantities.length;
console.log(`Total Items needing reoder :${average}`)
