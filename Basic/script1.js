//DATA TYPES
//13,harsh,true,{},[],(),null,undefined,Nan,Symbol,BigInt

//Primitive And Reference
// Primitive-->aisi saari values jinko copy krne pe real copy mil jaye(string,number,bool,null,undefined,symbol,bigint)
// let a = 12;
// let b = a;
// a = a + 3;

//References--> inko copy karne par real copy nahi milega but aapko reference milega parent ka(arrays[],objects{},functions())
// let x = [1, 2, 3, 4];
// let y = x;
// y.pop(); //pop also from a not the real copy of x

// string form-single,double,backtick
//number -12,12.3,
//boolean-true/false
//null--jaan bujh kr value nahi di(null aap khudse dete ho)
//undefined--ki aapne ek variable bnaya aur use value nahi di to jo value by default mili o undefined(undefined js engine deta hai)
//symbol--unique immutable value create krega(let a = symbol("uid"))
//bigint--max-safe-int+123n--use n after any big number to make them bigint

//DYNAMIC TYPING-->js me static typing nahi hai ,yaha par hai static typing --jishka matlab hai aap data ko change kr skte ho ku ki yha me dynamic typing hai
/*
let a=4;
a=true;
a="dkd";**u can change in any type
*/

//TYPE QUIRKS(typeof null--"object")
/*how to check type
type of 12--number
typeog harsh --string
//this a quirk
typeof NaN --number
typeof null--object
Nan==Nan
1=="1"
1==="1"
*/

//TYPE COERCION
//--->concept jisme aapka ek type automatically convert ho jyega

//let a = "5" + 1;--**here plus concatenate and make 51 a string
//but -,*,/ make them number not to string like "5"-1=4(number)

//TRUTHY AND FALSY VALUES
//0,false,"",null,undefined,NaN,document.all(chenking console use --!!0,null---.all)

//Why NaN is number
//is a failed operation but this is nan previously number

//undefined vs null
//by default undefined by js
//manualllly said no value provide
