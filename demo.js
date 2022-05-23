'use strict'; 
(function() {
function checkPass(password){
  let regex=new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[\\d]).{8,}$')
return regex.test(password)
}

display(checkPass('Stronger1'))

})();