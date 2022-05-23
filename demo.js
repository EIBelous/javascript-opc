'use strict'; 
(function() {
function findAlerts(logData){
  let regex=/ERROR(.*?):(.*?)/g
  displayRegexArray(regex.exec(logData))
  display('---------------------------')
  display(regex.exec(logData))
}
let logData='INFsssO:OK, ERROR(HIGH): Something is broke, ERROR(Low):Pohui'
let result=findAlerts(logData)
display(result)
})();