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
  Object.assign(person,healthStats)
display(person)}
  
  
regUser("Gim","Cooper")
})();