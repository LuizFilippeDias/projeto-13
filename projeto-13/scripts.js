/* 
  FOR...IN
*/
let person ={
  name: "luiz",
  age: 23,
  weight: 78.9
}

for(let property in person){
  console.log(property)
  console.log(person[property])
}