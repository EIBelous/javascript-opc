'use strict'; 
(function() {


 

function Person(FName,LName,age){
  this.FName =FName,
  this.LName =LName,
  this.age=age,
  this.IsAdult=function(){return this.age>18}
}
let Jimmy=new Person("Jimmy","Butler",21)
let Lebron=new Person("Lebron", "James",17)
Jimmy['aye color']="black"

for (let Property in Lebron){
  display (Property + '  ' + Lebron[Property])
}


})();