//objects inside array
//very useful in real life applications

const users = [
    {userId:"abcd",name:"piyush",gender:"male"},    {userId:"abcd",name:"mohan",gender:"male"},{userId:"abcd",name:"dnyanesh",gender:"male"}
]
//iterating object
/*
for(let user of users){
    console.log(user);
    console.log(user.name);//to access particular property
    
}
*/

//destructuring objects in array
const [user1, ,user2]=users;//assigning variables to objects user1 will get first object 
//user2 will be third object as we has left space in user1 and user2
console.log(user1);
console.log(user2);//print third object


//if we want specific properties of object use following method

const[{name,gender}, ,{userId,name:fname}] = users;//we can change name of property same property name will print same data
console.log(name);
console.log(gender);
console.log(userId,fname);