// how to iterate objects

const person = {
    name:"piyush",
    age:"27",
    "person hobbies":["swimming","listening music","trekking"]

}

//two ways 
//for in loop
//object.keys


//for in loop
/*
for(let a in person){
    console.log(a," ", person[a]);
}
*/


//object.keys
/*
console.log(typeof (Object.keys(person)));

for(let key of Object.keys(person)){
    console.log(person[key])
}
*/