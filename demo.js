'use strict'; 
(function() {

  
  let person= {
    name: "Jim",
    lastName: "Cooper",
    age:12,
    isAdoult:function(){return person.age>=18 }

  }

display(person.isAdoult())
})();