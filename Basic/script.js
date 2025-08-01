//words vs keywords
//special word is keyword that has any meaning in js

//VAR,LET,CONST
var a;
var a = 23;
// let a; //  Declare
// let a = 33; //Declare and initialize
// const a = 3;

//var window mein add hota hai
//function scoped hota hai,not block
/*
    funtion abcd(){
    if(true){
    var a = 12;
     }
    }***in other language we are not use variable inside if else by function but here we use that is a problem
*/
//aap firse declare kr skte ho same name se and error nahi ayega
var a = 34; //here we declare more than one time and not get error
//const and let use majorly const for fixed value and let for other

//Scope(global,block,functional)

//global define variable use in whole code let a =34
//block scope-{let a = 34;}--use only in this block not outside**expect var
//function scope--excess inside function

//REAsSINGNMENT AND REDECLARATION
// var a =12;
//a =44;reassigne
//  var a = 33;redeclaration follow in var
//let a =4;
//let a =33;//reassingnment possible but redeclaration

//TEMPORAL DEAD ZONE
//console.log(x); //tdz is 38--39 to this line

let x = 12;
//but not have problem in var its give undefined

//Hoisting-->ek variable ko jab js me banaate hai to wo variable do hisso me toot jaata hai and  ushka declare part upar chala jaata hai and uushka initialization part neeche re jata hai
console.log(z); //this is hoisting
var z = undefined;
z = 33;
