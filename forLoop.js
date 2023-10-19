//for loop 

//syntax
/*
for(let i = 0;i<=9;i++){
    //i= 0 - is intial condition and declaring variable
    //i<=9 - is limit till which we want to run condition
    //i++  - is increment or decrement
    console.log(i);
}
*/

//print  0 to 9
/*
let i = 1;//we can also declare variable outside for
for (;i <=9;i++){
    console.log(i);
}
console.log(i);//if we use var then only this statement will print 
//if we use let to declare variable in for loop this will show error as uncaught reference error 
//if i is declared outside for loop then it will not show reference error even if we use let to declare variable
*/

//add 1-10 using for loop
/*
let sum = 0;
for(var i = 0;i <= 10;i++){
    sum = sum + i;
}
console.log(sum);
*/