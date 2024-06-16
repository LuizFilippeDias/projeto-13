/* 
  throw
*/

function sayMyName(name = ""){
  if(name === ""){
    throw new Error("Nome não pode ser vazio")
  }

  console.log(name)
}

// try...catch (não deixa a aplicação parar se achar erro, se nao tiver assim que achar um erro a aplicação nao continua)
try{
  sayMyName("Luiz")
}catch(e){
  console.log(e)
}

console.log("após o try/catch")