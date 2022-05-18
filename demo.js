'use strict'; 
(function() {

class Person{
  constructor(Fname, LName,age){
    this.Fname=Fname,
    this.LName=LName,
    this.age=age
  }
  get fullName(){
    return this.Fname+' '+this.LName

  }
  set fullName(fullName){
    let nameParts=fullName.split(' ')
    this.Fname=nameParts[0]
    this.LName=nameParts[1]
  }
  isAdult(){
    return this.age>=18
  }
}

class Student extends Person{
  constructor(Fname,LName,age){
    super(Fname,LName,age)
    this._enrollCourses=[]
      }
      enroll(courseId){
        this._enrollCourses.push(courseId)
      } 
  getCourses(){
    return this.fullName +'s enrolled to cource'
    this._enrollCourses.join(',')
  }    

}
let Jim=new Person('Jim','Cooper',29)
Jim.enroll('Narhoz')
display('Jim.getCourses')
})();