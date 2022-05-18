'use strict'; 
(function() {

function Person(FName ,LName,age){
  this.FName=this.FName,
  this.LName=this.LName,
  this.age=age;
  Object.defineProperty(this,'fullName', {
    get: function(){
      return this.FName +' '+ this.LName
    },
    enumerable:true
  } );
  }
function Student(FName,LName,age){
  Person.call(this, FName,LName,age)
  this._enrolledCourses=[]

  this.enroll=function(courseId){
    this._enrolledCourses.push(courseId)
  }
  this.getCourses=function(){
return this.fullname+'s enroled to courses'+this._enrolledCourses.join(',')


  };
  }
  Student.prototype=Object.create(Person.prototype)
  Student.prototype.constructor=Student

  let Jim=new Student("Jim",'Coper',28)
  display(Jim)

  Jim.enroll('2222')
  Jim.enroll('asds')

  display(Jim.getCourses())

display('2=2')
})();