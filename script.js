//Q1
var name = "Ben";
console.log(name);

var age = "22"
console.log(age);

//Q2
var string = "string";
console.log(string);

var num = 2
console.log(num);

var bool = true
console.log(bool);

//Q3
let rollnumber = Math.floor(Math.random() * (15 - 1 + 1) + 1);
if (rollnumber >= 10)
{
    console.log("The RollNumber is Greater Than Ten");
}
else{
    console.log("The RollNumber is Less Than Ten")
}

//Q4
var isMember = true;
if(isMember === true)
{
    console.log("Member Discount Applied");
}

//Q5
var startValue = 50
if(startValue >0)
{  
    console.log("The startValue is Positive");
}
else if(startValue <0)
{
    console.log("The startValue is Negative");
}
else
{
    console.log("The startValue is Zero");
}

//Q6
var a = 1
var b = 2

if(a==b)
{
    console.log("a equals b");
}
else
{
    console.log("a does not equal b");
}

if(a===b)
{
    console.log("a equals b and is the same type");
}
 else
{
    console.log("a does not equal b or/and is not the same type");
}

if(a!=b)
{
    console.log("a does not equal b");
}
 else
{
    console.log("a equals b");
}

if(a>b)
{
    console.log("a is greater than b");
}
else
{
    console.log("a is not greater than b");
}

if(a<b)
{
    console.log("a is less than b");
}
else
{
    console.log("a is not less than b");
}

if(a>=b)
{
    console.log("a equals or is greater than b");
}
else
{
    console.log("a is not equal or is greater than b");
}

if(a<=b)
{
    console.log("a equals or is less than b");
}
else
{
    console.log("a is not equal or is not less than b");
}

//Q7
var fname = "Benjamin"
var lname = "Kuipers"
var age = 22
console.log("Hello, " + fname + " " + lname + ", you are " + age + " years old.");

//Q8
var num=50
if(num >0 && num < 100 )
{
    console.log("The number is within range.");
}

//Q9
var hasCar = true
var hasLicence = true
var hasInsurance = true

if(hasCar === true && hasLicence === true && hasInsurance === true)
{
    console.log("You can drive legally");
}
else
{
    console.log("Check your eligibility");
}

//Q10
var num = 21
if(num % 2 == 0)
{
    console.log("The number is even");
}
else
{
    console.log("The number is odd");
}

//Q11
var score = 85
if(score >= 90)
{
    console.log("Grade A")
}
else if(score >= 80)
{
    console.log("Grade B");
}
else{
    console.log("Grade C")
}
