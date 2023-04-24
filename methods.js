let student={
name:"Ann",
age:20,
introduce:function () {
    console.log("hello");
    console.log(`Hello my name is ${this.name}`);
    console.log(`Hello my name is ${this.name='bella'}`);


}
}
student.introduce();
student.hobby=function(){
    console.log("I love swimming");
}
console.log({student});
student.hobby();


//to delete a property
delete student.age;
console.log(student);
(student.introduce());



