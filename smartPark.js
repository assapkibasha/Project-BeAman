const maxSlots = 100;
const parkkingSlot = [];
const ratePerhour = 500;

//function for ar entry

function carEntry(carNumber){
    if(parkkingSlot.length >= maxSlots){
        console.log(`Car Parking lot full`);
    }
    const entryTime = new Date();
    parkkingSlot.push({carNumber,entryTime});
    console.log(`car entered ${carNumber} at ${entryTime}`);
}
carEntry('RAC 123');  
console.log(`Cars in the slot are:${parkkingSlot.length}`)

//function to check car exist and remove car

function makeCarVip(carNumber){
    const vipCar = parkkingSlot.find(c => c.carNumber === carNumber);
    if(!vipCar){
        console.log(`Car ${carNumber} is Not found`);
        return;
    }
    vipCar.vip = true;
    console.log(`car ${carNumber} is now a Vip`);
}
makeCarVip('RAC 123')


//function to exit the car

function carExit(carNumber){
    const index = parkkingSlot.findIndex(c => c.carNumber === carNumber);
    
    //check if car exist
    if(index == -1){
        console.log(`Car not Found ${carNumber}`)
        return;
    }
   
//exit Car
    const car = parkkingSlot[index];    
    const carExitT = new Date();
    const hours = (carExitT - car.entryTime)/1000 / 60 / 60;
    

    let count;
    //check time to determine the cost
    if(hours <= 1){
        count = 1000
    }
    else if(car.vipCar){
        count = 1000 + Math.ceil((hours - 1) * 500) /0.5
    }else {
        count = 1000 + Math.ceil((hours - 1) * 500);
    }
    parkkingSlot.splice(index, 1);
    console.log(`Car ${carNumber} Stayed : ${Math.ceil(hours)} Hour(s) cost is : ${count} Rwf`)

}
carExit('RAC 123')

