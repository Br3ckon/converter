const metersEl = document.getElementById("meters__text")
const volumeEl = document.getElementById("volume__text")
const massEl = document.getElementById("mass__text")




"volume__text"
const btnEl = document.getElementById("heading__btn")
const numberInput = document.querySelector("input[type=number]")

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

btnEl.addEventListener("click", function(){

    inputNum = numberInput.value


   let feetCalc = inputNum * 3.281
    let metersCalc = inputNum / 3.281

   let litersCalc = inputNum * 0.264
   let gallonCalc = inputNum / 0.264


   let kiloCalc = inputNum * 2.284
   let poundsCalc = inputNum / 2.284

   
metersEl.innerHTML = `${numberInput.value} Feet = ${feetCalc.toFixed(1)} Meters & ${numberInput.value} Meters = ${metersCalc.toFixed(1)} Feet  `

volumeEl.innerHTML = `${numberInput.value} Liters = ${litersCalc.toFixed(1)} Gallons & ${numberInput.value} Gallons = ${gallonCalc.toFixed(1)} Liters  `

massEl.innerHTML = `${numberInput.value} Kilo's = ${kiloCalc.toFixed(1)} Pounds & ${numberInput.value} Pounds = ${poundsCalc.toFixed(1)} Kilos  `

numberInput.value = ""
   console.log(litersCalc, gallonCalc)
})

