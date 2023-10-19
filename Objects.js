// Objects is reference type
// arrays are good but not sufficient for real world data
// Objects store key value pairs
// objects don't have index

// how to create objects

const person = {name:"piyush",age:20,hobbies:["guitar","music","swimminng"]}
console.log(person)


// how to access data from objects
//syntax
//object_name.key_name
//console.log(person.age);
//console.log(person.hobbies);

//or
//object_name["key_name"]
console.log(person["name"]);


// how to add key value pair to objects
//person.gender = "male";//ads gender:"male in object"
//person["gender"]="male";//this also used to add key value pair
//console.log(person);
