const stops = ['Gisenyi Downtown','Rubavu Market', 'Nyundo','pfunda'];
const waiting = [45,120,70,25];
const busCapacity = 50;

//display stop and passengers waiting

const merged  = stops.map((stop,i)=>{
    const neededBuses =
     Math.ceil(waiting[i]/busCapacity);
    return{stop, passengers : waiting[i], Bus: neededBuses};
})

console.log(merged)