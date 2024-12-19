class Car {
carName
carModel
carYear
carColor
carSerialNumber
isOn=false
    constructor(name, model, year, color,serialNumber) {
        this.carName = name;
        this.carModel = model;
        this.carYear = year;
        this.carColor = color;
        this.carSerialNumber = serialNumber;
        }

    startEngine(){
        this.isOn = true
    }
    stopEngine(){
        this.isOn = false
    }
   #plate
   #owner
   setOwner(ownerName){
    this.#owner = ownerName
   }
   getOwner(){
    return this.#owner
   }
   setPlate(plate){
    this.#plate = plate
   }
   getPlate(){
    return this.#plate
   }
}
/*this is the car*/
const skoda = new Car("Skoda","OCTAVIA",2005,"blue",1);
const Kia = new Car("Skoda","toto",2005,"blue",2);
function setCarName(){

}
runEngine = setInterval(carRuning,5)
function carRuning(){
    if (skoda.isOn == true){
        document.getElementsByClassName("skodaWheel")[0].style.animationName = "rotate";
        document.getElementsByClassName("skodaWheel")[1].style.animationName = "rotate";
    }else{
        document.getElementsByClassName("skodaWheel")[0].style.animationName = null;
        document.getElementsByClassName("skodaWheel")[1].style.animationName = null;
    }
    if (Kia.isOn == true){
        document.getElementsByClassName("kiaWheel")[0].style.animationName = "rotate";
        document.getElementsByClassName("kiaWheel")[1].style.animationName = "rotate";
    }else{
        document.getElementsByClassName("kiaWheel")[0].style.animationName = null;
        document.getElementsByClassName("kiaWheel")[1].style.animationName = null;
    }
    
}


function updateInfo(){
    var carName1 = document.getElementById("carWithName1")
carName1.innerHTML = skoda.carName;
var carModelsYears1 =document.getElementById("modelYear1");
carModelsYears1.innerHTML = skoda.carModel+"<br>"+skoda.carYear+"<br>"+skoda.carColor;


let skodaOwner = document.getElementById("carOwnerName")
let skodaOwnerName = skoda.getOwner()
let skodaPlate = document.getElementById("carPlate")
let skodaOwnerPlate = skoda.getPlate()
let kiaOwner =document.getElementById("kiaOwnerName")
let kiasName = Kia.getOwner()
let kiaPlate =document.getElementById("kiaPlate")
let kiaownerPlate = Kia.getPlate()
if(skodaOwnerName){
    skodaOwner.innerHTML = "Owner name :"+skodaOwnerName
}
if (skodaOwnerPlate){
    skodaPlate.innerHTML = "owner Plate :"+skodaOwnerPlate
}
if(kiasName){
    kiaOwner.innerHTML = "owner name :"+ kiasName
}
if(kiaownerPlate){
    kiaPlate.innerHTML = "owner plate :"+kiaownerPlate
}

var carName2 = document.getElementById("carName2")
carName2.innerHTML = Kia.carName;
var carModelsYears2 = document.getElementById("modelYear2");
carModelsYears2.innerHTML = Kia.carModel+"<br>"+Kia.carYear+"<br>"+Kia.carColor;
}
updateInfo()
function submit(){
    let selector = document.getElementById("cars")
    if(selector.value == skoda.carSerialNumber){
    let skodaOwner = document.getElementById("skodaOwnerName")
    skoda.setOwner(skodaOwner.value)
    let skodaPlate = document.getElementById("skodaPlate")
    skoda.setPlate(skodaPlate.value)

}
if(selector.value == Kia.carSerialNumber){
    let kiaowner = document.getElementById("skodaOwnerName")
    Kia.setOwner(kiaowner.value)
    let kiaplate = document.getElementById("skodaPlate")
    Kia.setPlate(kiaplate.value)

}


    updateInfo()
}


// function timer1(){
//     engineSkodaStart = setInterval(startSkodaEngine,5)
// }
// function startSkodaEngine(){
    
//   document.getElementById("wheelBack1").style.transform = "rotate("+rotateSkodaDeg+"deg)";
//   document.getElementById("wheelFront1").style.transform = "rotate("+rotateSkodaDeg+"deg)";
//   rotateSkodaDeg++
//   document.getElementById("startSkoda").style.visibility = "hidden"
//   document.getElementById("stopSkoda").style.visibility = "visible"
// }
// function timer2(){
//     engineKiaStart = setInterval(startKiaEngine,5)
// }
// function startKiaEngine(){
    
//     document.getElementById("wheelBack2").style.transform = "rotate("+rotateKiaDeg+"deg)";
//     document.getElementById("wheelFront2").style.transform = "rotate("+rotateKiaDeg+"deg)";
//     rotateKiaDeg++
//     document.getElementById("startKia").style.visibility = "hidden"
//     document.getElementById("stopKia").style.visibility = "visible"
//   }
// function stopSkodaEngine(){
//     clearInterval(engineSkodaStart)
//     document.getElementById("startSkoda").style.visibility = "visible"
//     document.getElementById("stopSkoda").style.visibility = "hidden"

// }
// function stopKiaEngine(){
//     clearInterval(engineKiaStart)
//     document.getElementById("startKia").style.visibility = "visible"
//     document.getElementById("stopKia").style.visibility = "hidden"

// }

