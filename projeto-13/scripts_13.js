/* 
 Control flow

 if...else
*/

let temperature = 37.5
let highTemperature = temperature >= 38
let mediumTemperature = temperature <38 && temperature>= 37

if(highTemperature){
  console.log("Febre alta")
}else if(mediumTemperature){
  console.log("Febre moderada")
}else{
  console.log("Saudável")
}