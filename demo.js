'use strict'; 
(function() {

  function regUser(FName,LName){
  let person= {
     FName,
     LName,
    age:14,
    IsAdult() {return this.age>=18}
  }
  let healthStats={
    height: 188,
    weight:92
  }
  function mergeObj(person,healthStats){
 return Object.assign({},person, healthStats)}

let margetPerson =  mergeObj(person,healthStats)

display(margetPerson)
display(person)  }
  
regUser("Gim","Cooper")
})();