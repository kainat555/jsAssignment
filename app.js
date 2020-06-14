// Chapter # 1
// Task 1 
alert("Welcome Visitor");

// Task 2 
alert("Error! Please enter a valid password.");

// Task 3 
alert("Welcome to JS Land... \n Happy Coding!");

// Task 4 
alert("Welcome to JS Land...");
alert("Happy Coding!");


// Chapter # 2
// Task 1
var username;

// Task 2
var myName = "Kainat Sharif";

// Task 3
var message;
message = "Hello World";
alert(message);

// Task 4
var studentName = "Jhone Doe";
var studentAge = "15 years old";
var studentCourse = "Certified Mobile Application Development";
alert(studentName);
alert(studentAge);
alert(studentCourse);

// Task 5
alert("PIZZA \n PIZZ \n PIZ \n PI \n P");

// Task 6
var email = "faryashah555@gmail.com";
alert("My email address is " + email);

// Task 7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

// Task 8
document.write("Yah! I can write HTML content through JavaScript");

// Task 9
var string = "--------------------^&*&^--------------------";
alert(string);


// Chapter # 3
// Task 1
var age = 22;
alert("I am " + age + " years old");

// Task 2
var tracker = 4;
alert("You have visited this page " + tracker + "times");

// Task 3
var birthYear = 1997;
document.write("My birth year is "  + birthYear); 
document.write("<br>");
document.write("Data type of my declared variable is number");

// Task 4
var visitorName = "Jhone Doe";
var productTitle = "T-shirt";
var quantity = 5;
document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s)" + " on XYZ Clothing Store");




// Chapter # 4
// Task 1
var name = "daniel",
    message = "hello" ,
    age = 23;

// Task 2
var legalName1;
var _legalName;
var $legalName3;
var legal4Name;
var legalName5_;

// var 1illegalNames; declare illegal names
// var +illegalNames;
// var *illegalNames;
// var illegal&Names;
// var ?illegalNames;

// Task 3
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain , numbers , $ and _ .For example : $my_1stVariable");
document.write("<br>");
document.write("Variable must begin with a letter, $ or _ .For example : $name, _name or name");
document.write("<br>");
document.write("Variable names are case sensiive");
document.write("<br>");
document.write("Variable names should not be JS Keywords");



// Chapter # 5
// Task 1
var num1 = 3;
var num2 = 5;
var num3 = num1 + num2;
document.write("Sum of "+ num1 + " and " + num2 + " is " + num3);

// Task 2
document.write("<br>");
var num3 = num2 - num1;
document.write("Subtraction of "+ num1 + " and " + num2 + " is " + num3);
document.write("<br>");
var num3 = num1 * num2;
document.write("Multiplication of "+ num1 + " and " + num2 + " is " + num3);
document.write("<br>");
var num3 = num2 / num1;
document.write("Division of "+ num1 + " and " + num2 + " is " + num3);
document.write("<br>");
var num3 = num2 % num1;
document.write("Modulus of "+ num1 + " and " + num2 + " is " + num3);

// Task 3
document.write("<br>");
var num;
document.write("Value after variable declation is " + num);
document.write("<br>");
num = 5;
document.write("Initial value: " + num);
document.write("<br>");
num++;
document.write("Value after increment is: " + num);
document.write("<br>");
var newNum = num + 7;
document.write("Value after addition is: " + newNum);
document.write("<br>");
newNum--;
document.write("Value after decrement is: " + newNum);
document.write("<br>");
var num1 = newNum % 3;
document.write("The remainder is: " + num1);
document.write("<br>");

// Task 4
var movieTicketprice = 600;
var numOftickets = 5;
var totalCost = movieTicketprice * numOftickets
document.write("Total cost to buy " + numOftickets + " tickets to a movie is " + totalCost + "PKR");
document.write("<br>");

// Task 5 
var num = 4;
document.write("Table of " + num);
document.write("<br>");
document.write(num + "x" + "1" + "=" + num);
document.write("<br>");
document.write(num + "x" + "2" + "=" + num*2); 
document.write("<br>");
document.write(num + "x" + "3" + "=" + num*3); 
document.write("<br>");
document.write(num + "x" + "4" + "=" + num*4); 
document.write("<br>");
document.write(num + "x" + "5" + "=" + num*5); 
document.write("<br>");
document.write(num + "x" + "6" + "=" + num*6); 
document.write("<br>");
document.write(num + "x" + "7" + "=" + num*7); 
document.write("<br>");
document.write(num + "x" + "8" + "=" + num*8); 
document.write("<br>");
document.write(num + "x" + "9" + "=" + num*9); 
document.write("<br>");
document.write(num + "x" + "10" + "=" + num*10); 

// Task 6
document.write("<br>");
var celsiusTemp = 25;
var conversionFormula = (celsiusTemp * 9/5) + 32;
document.write(celsiusTemp + "C" + " is " + conversionFormula + "F");
document.write("<br>");
var fahrtemp = 70;
var conversionFormula2 = (fahrtemp - 32) * 5/9;
document.write(fahrtemp + "F" + " is " + conversionFormula2 + "C");

// Task 7
document.write("<br>");
var priceItem1 = 650;
var priceItem2 = 100;
var orderedQuantityofItem1 = 3;
var orderedQuantityofItem2 = 7;
var shippingCharges = 100;
var totalCost = priceItem1*orderedQuantityofItem1 + priceItem2*orderedQuantityofItem2 +shippingCharges 
document.write("<h1>Shopping Cart</h1>");
document.write("<br>");
document.write("Price of item 1 is " + priceItem1);
document.write("<br>");
document.write("Quantity of item 1 is " + orderedQuantityofItem1);
document.write("<br>");
document.write("Price of item 2 is " + priceItem2);
document.write("<br>");
document.write("Quantity of item 2 is " + orderedQuantityofItem2);
document.write("<br>");
document.write("Shipping charges " + shippingCharges);
document.write("<br>");
document.write("<br>");
document.write("Total cost of your order is " + totalCost);

// Task 8
document.write("<br>");
var totalMarks = 980;
var studentMarksobtained = 804;
var percentageFormula = (studentMarksobtained / totalMarks)*100;
document.write("<h1>Marks Sheet</h1>");
document.write("<br>");
document.write("Total marks: " + totalMarks);
document.write("<br>");
document.write("Marks obtained: " + studentMarksobtained);
document.write("<br>");
document.write("Percentage: " + percentageFormula + "%");

// Task 9
document.write("<br>");
var quantityUS$ = 10;
var quantitySuadiriyal = 25;
var coversionPKRforUS$ = 104.80;
var coversionPKRforSuadiriyal = 28; 
var totalCurrency = quantityUS$ * coversionPKRforUS$ + quantitySuadiriyal * coversionPKRforSuadiriyal;
document.write("<h1>Currency in PKR</h1>");
document.write("<br>");
document.write("Total Currency in PKR: " + totalCurrency);

// Task 10
document.write("<br>");
var num = 3;
var newNum = ((num + 5) * 10 ) / 2;
document.write("Answer is " + newNum);

//Task 11
document.write("<br>");
var currentYear = 2020;
var birthYear = 1999;
var possibleAge1 = currentYear - birthYear;
var possibleAge2 = currentYear - birthYear + 1 ;         
document.write("<h1>Age Calculator</h1>");
document.write("Current Year: " + currentYear);
document.write("<br>");
document.write("Birth Year: " + birthYear);
document.write("<br>");
document.write("Your Age is: " + possibleAge1);
document.write("<br>");
document.write("He is either " + possibleAge1 + " or " + possibleAge2);

// Task 12
document.write("<br>");
var radius = 20;
var circumferenceOfaCircle = 2 * 3.142 * radius;
document.write("<h1>The Geometrizer</h1>");
document.write("Radius of a circle: " + radius);
document.write("<br>");
document.write("The circumference is " + circumferenceOfaCircle);
document.write("<br>");
var areaOfaCircle = 3.142 * Math.pow(radius, 2);
document.write("The area is " + areaOfaCircle);

// Task 13
document.write("<br>");
var favSnacks = "lays";
var currentAge = 22;
var maxAge = 62;
var amountPerday = 3;
var totalQuantity = (maxAge - currentAge) * amountPerday;
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favourite Snacks: " + favSnacks);
document.write("<br>");
document.write("Current age: " + currentAge);
document.write("<br>");
document.write("Estimated Maximum Age: " + maxAge);
document.write("<br>");
document.write("Amount of snacks per day: " + amountPerday);
document.write("<br>");
document.write("You will need " + totalQuantity + " " + favSnacks + " to last until the ripe old age of " + maxAge);



// Chapter # 6-9
// Task 1
var a = 10;
document.write("Result:");
document.write("<br>");
document.write("The value of a is: " + a);
++a;
document.write("<hr>");
document.write("<br>");
document.write("The value of ++a is: " + a);
document.write("<br>");
document.write("Now the value of a is: " + a);
a++;
document.write("<br>");
document.write("<br>");
document.write("The value of a++ is: " + a);
document.write("<br>");
document.write("Now the value of a is: " + a);
--a;
document.write("<br>");
document.write("<br>");
document.write("The value of --a is: " + a);
document.write("<br>");
document.write("Now the value of a is: " + a);
a--;
document.write("<br>");
document.write("<br>");
document.write("The value of a-- is: " + a);
document.write("<br>");
document.write("Now the value of a is: " + a);


// Task 2
document.write("<br>");
var a = 2;
var b = 1;
document.write(--a);
document.write("<br>");
document.write(--a - --b);
document.write("<br>");
document.write(--a - --b + ++b);
document.write("<br>");
var result = --a - --b + ++b + b--;
document.write("a is " + a);
document.write("<br>");
document.write("b is " + b);
document.write("<br>");
document.write("Result is " + result);;


// Task 3
var userName = prompt("Enter your name");
alert("Welcome " + userName);
document.write("<br>");



// Task 4
var x = "Enter any number";
var y = 5;
var num = prompt(x,y);
document.write("Table of num");
document.write("<br>");
document.write(num + "x" + "1" + "=" + num);
document.write("<br>");
document.write(num + "x" + "2" + "=" + num*2); 
document.write("<br>");
document.write(num + "x" + "3" + "=" + num*3); 
document.write("<br>");
document.write(num + "x" + "4" + "=" + num*4); 
document.write("<br>");
document.write(num + "x" + "5" + "=" + num*5); 
document.write("<br>");
document.write(num + "x" + "6" + "=" + num*6); 
document.write("<br>");
document.write(num + "x" + "7" + "=" + num*7); 
document.write("<br>");
document.write(num + "x" + "8" + "=" + num*8); 
document.write("<br>");
document.write(num + "x" + "9" + "=" + num*9); 
document.write("<br>");
document.write(num + "x" + "10" + "=" + num*10);


// Task 6
document.write("<br>");
var subjectName1 = prompt("Enter first subject's name");
var subjectName2 = prompt("Enter second subject's name");
var subjectName3 = prompt("Enter third subject's name");
var totalMarksforEachsubject = 100;
var obtainedMarks1 = +prompt("Enter first subject's marks");
var obtainedMarks2 = +prompt("Enter second subject's marks");
var obtainedMarks3 = +prompt("Enter third subject's marks");
var totalObtainedmarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentageSubject1 = (obtainedMarks1 / totalMarksforEachsubject ) * 100;
var percentageSubject2 = (obtainedMarks2 / totalMarksforEachsubject ) * 100;
var percentageSubject3 = (obtainedMarks3 / totalMarksforEachsubject ) * 100;
var percentageTotal = totalObtainedmarks / (totalMarksforEachsubject * 3) * 100;
document.write("<table><tr><th>Subjects</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>")
document.write("<tr><td>" + subjectName1 + "</td><td>" + totalMarksforEachsubject + "</td><td>" + obtainedMarks1 + "</td><td>" + percentageSubject1 + "%" + "</td></tr>");
document.write("<tr><td>" + subjectName2 + "</td><td>" + totalMarksforEachsubject + "</td><td>" + obtainedMarks2 + "</td><td>" + percentageSubject2 + "%" + "</td></tr>");
document.write("<tr><td>" + subjectName3 + "</td><td>" + totalMarksforEachsubject + "</td><td>" + obtainedMarks3 + "</td><td>" + percentageSubject3 + "%" + "</td></tr>");
document.write("<tr><td>" + " " + "</td><td>" + totalMarksforEachsubject * 3 + "</td><td>" + totalObtainedmarks + "</td><td>" + percentageTotal + "%" + "</td></tr>");



// Chapter # 9-11
// Task 1
var userInput = prompt("Enter your city name");
if(userInput === "karachi"){
    alert("Welcome to city of lights");
}
else(
    alert("Welcome to " + userInput)
)


// Task 2
var userGender = prompt("Enter your gender");
if(userGender === "male"){
    alert("Good Morning Sir");
}
else if(userGender == "female"){
    alert("Good Morning Ma'am");
}

// Task 3
var colorOftrafficSignal = prompt("Enter color of road traffic signal");
if(colorOftrafficSignal === "red"){
    alert("You must stop");
}
else if(colorOftrafficSignal === "yellow"){
    alert("Ready to move");
}
else if(colorOftrafficSignal === "green"){
    alert("Move now");
}

// Task 4
var userCarremainingFuel = +prompt("Enter your car remaining fuel");
if(userCarremainingFuel < 0.25){
    alert("Please refill the fuel in your car");
}
else if(userCarremainingFuel > 0.25){
    alert("You may drive")
}

// Task 5 
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
    }
if (++c < 14){
        alert("condition 3 is true")
}
if(c === 14){
    alert("condition 4 is true");
    }
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
    
if("car" < "cat"){
    alert("car is smaller than cat");
}


// Task 6
var userMarks1 = +prompt("Enter your first subject marks");
var userMarks2 = +prompt("Enter your second subject marks");
var userMarks3 = +prompt("Enter your third subject marks");
var totalMarks = 100;
var totalObtainedmarks = userMarks1 + userMarks2 + userMarks3;
var percentage = totalObtainedmarks / (totalMarks * 3) * 100;
document.write("<h1>Marks Sheet</h1>")
document.write("Total Marks : " + totalMarks * 3);
document.write("<br>");
document.write("Marks obtained : " + totalObtainedmarks);
document.write("<br>");
document.write("Percentage : " + percentage + "%");
document.write("<br>");
if(percentage >= 80){
    document.write("Grade: A-one");
document.write("<br>");
    document.write("Remarks: Excellent")
}
else if(percentage >= 70){
    document.write("Grade: A");
document.write("<br>");
    document.write("Remarks: Good")

}
else if(percentage >= 60){
    document.write("Grade: B");
document.write("<br>");
    document.write("Remarks: You need to improve")

}
else if(percentage < 60){
    document.write("Grade: Fail");
document.write("<br>");
    document.write("Remarks: Sorry");
}

// Task 7
var secretNumber = 5;
var userNumber = +prompt("Guess the secret numbe ranging from 1 to 10");
if(userNumber === secretNumber){
    alert("Bingo! Correct")
}
else if(userNumber === secretNumber + 1){
    alert("Close enough to the correct answer")
}
else if(userNumber !== secretNumber){
    alert("Wrong answer")
}

// Task 8
var userNumber = prompt("Enter any number");
var divisibleNoby3 = userNumber % 3;
if(divisibleNoby3  === 0){
    alert("Number is divisible by 3")
} 
else{
    alert("Number is not divisible by 3")
}

// Task 9
var userNumber = prompt("Enter any number");
if(userNumber % 2 === 0){
    alert("Given number is Even number");
} 
else if(userNumber % 2 !== 0){
    alert("Given number is Odd number");
}

// Task 10
var userTemp = +prompt("Enter Current Temperature of your area");
if(userTemp > 40){
    alert("It is too hot outside");
}
else if(userTemp > 30){
    alert("The Weather today is Normal");
}
else if(userTemp > 20){
    alert("Today's Weather is cool");
}
else if(userTemp > 10){
    alert("OMG! Today's Weather is so Cool");
}

// Task 11
var firstNumber = prompt("Enter first number");
var secondNumber = prompt("Enter second number");
var operator = prompt("Enter any operator");
if(operator === "+"){
    alert((+firstNumber) + (+secondNumber));
}
else if(operator === "-"){
    alert(firstNumber - secondNumber);
}
else if(operator === "*"){
    alert(firstNumber * secondNumber);
}
else if(operator === "/"){
    alert(firstNumber / secondNumber);
}
else if(operator === "%"){
    alert(firstNumber % secondNumber);
}


// Chapter # 12-13
// Task 1
var userInput = prompt("Enter any character");
var a = userInput.charCodeAt();
if(a>=65 && a <=90){
   alert("It's an uppercase letter");
}
else if(a>=97 && a<=122){
    alert("It's an lowercase letter");  
}
else{
   alert("It's a number");
}


// Task 2
var userInput1 = +prompt("Enter any first integer");
var userInput2 = +prompt("Enter any second integer");
if(userInput1 > userInput2){
    alert("First integer is larger")
}
else if(userInput1 < userInput2){
    alert("Second integer is larger")
}
else if(userInput1 === userInput2){
    alert("Both integers are equal")
}


// Task 3
var userInput = +prompt("Enter any number");
if(userInput > 0){
    alert("Number is positive")
}
else if(userInput < 0){
    alert("Number is negative")
}
else{
    alert("Number is zero")
}


// Task 4                      
var userInput = prompt("Enter any Alphabet");                      
if(userInput === "A" || userInput === "a" || userInput === "E" ||userInput === "e" || userInput === "I" 
||userInput === "i" || userInput === "O" || userInput === "o" || userInput === "U" || userInput === "u"){
        alert("True: Alphabet is a vowel");
}
else{
    alert("False: Alphabet is not a vowel")
}


// Task 5
var correctPassword = "12345";
var userPassword = prompt("Enter Your Password");
if(userPassword === correctPassword){
    alert("Correct! The password you entered matches the original password.");
}
else if(userPassword === ""){
    alert(" Please enter your password");
}
else{
    alert("Incorrect password");
}


// Task 6
var greeting;
var hour = 13;
if (hour < 18) {
alert(greeting = "Good day");
}
else{
    alert(greeting = "Good night");
}


// Task 7
var userInput = +prompt("Enter current time");
if(userInput >= 0000 & userInput < 1200){
   alert("Good Morning");
}
else if(userInput >= 1200 & userInput < 1700){
    alert("Good Afternoon");
 }
else if(userInput >= 1700 & userInput < 2100){
    alert("Good Evening");
 }
else if(userInput >= 2100 & userInput < 2359){
    alert("Good Night");
 }



// Chapter 14-16
// Task 1
var studentNames = [];
studentNames[0] = "ali";
studentNames[1] = "raza";
studentNames[2] = "daniel";
studentNames[3] = "danish";
studentNames[4] = "daniya";


// Task 2



// Task 3
var stringArray = ["Karachi" , "Lahore" , "Islamabad" , "Peshawar"];
alert("City name: " + stringArray);


// Task 4
var numArray = [1 , 2 , 3 , 4 , 5];
alert("Counting: " + numArray);


// Task 5
var booleanArray = [true , false];
alert("Options: " + booleanArray);


// Task 6
var mixedArray = ["ali" , true , 2 , "daniel" , 6 , false];
alert("Mixed Array: " + mixedArray);


// Task 7
var availableQualifications = ["SSC" , "HSC" , "BCS" , "BS" ,"BCOM" , "MS" , "M. Phil." , "PhD"];
document.write("<h1>Qualifications</h1>")
document.write(availableQualifications[0] + "<br>");
document.write(availableQualifications[1] + "<br>");
document.write(availableQualifications[2] + "<br>");
document.write(availableQualifications[3] + "<br>");
document.write(availableQualifications[4] + "<br>");
document.write(availableQualifications[5] + "<br>");
document.write(availableQualifications[6] + "<br>");
document.write(availableQualifications[7] + "<br>");


// Task 8
var studentNames = ["daniel" , "daniya" , "dani"];
var studentMarks = [320 , 230 , 480];
var studentPrcntge1 = (studentMarks[0] / 500) * 100;
var studentPrcntge2 = (studentMarks[1] / 500) * 100;
var studentPrcntge3 = (studentMarks[2] / 500) * 100;
document.write("<h1>Result Sheet</h1>")
document.write("Score of " + studentNames[0] + " is " + studentMarks[0] + " ." + "Percentage is " + studentPrcntge1 + "%");
document.write("<br>");
document.write("Score of " + studentNames[1] + " is " + studentMarks[1] + " ." + "Percentage is " + studentPrcntge2 + "%");
document.write("<br>");
document.write("Score of " + studentNames[2] + " is " + studentMarks[2] + " ." + "Percentage is " + studentPrcntge3 + "%");




// // Task 9
var colorName = ["red" , "green" , "yellow"];
document.write("<h1>User Color Choices:</h1>")
document.write(colorName);
document.write("<br>");
var userChoice = prompt("Which color do you want to add in the beginning?");
colorName.unshift(userChoice);
document.write(colorName);
document.write("<br>");
var userChoice1 = prompt("Which color do you want to add to the end?");
colorName.push(userChoice1);
document.write(colorName);
document.write("<br>");
colorName.unshift(["blue"],["pink"]);
document.write(colorName);
document.write("<br>");
colorName.shift();
document.write(colorName);
document.write("<br>");
colorName.pop();
document.write(colorName);
document.write("<br>");
var userChoice3 = prompt("Which color do you want to add now?");
var userChoice4 = prompt("On which position you want to add your desired color?");
colorName.splice(userChoice4 , 0 , userChoice3);
document.write(colorName);
document.write("<br>");
var userChoice5 = prompt("How many color(s) do you want to delete?");
var userChoice6 = prompt("At which index you want to delete color(s)?");
colorName.splice(userChoice6 , userChoice5);
document.write(colorName);


// Task 10
var studentScore = [320 , 280 , 430 , 120];
document.write("<h1>Score of Students</h1>")
document.write("Score of Students : " + studentScore);
document.write("<br>");
studentScore.sort();
document.write("Ordered Scores of Students : " + studentScore);


// Task 11
var cityNames = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar , Hyderabad"];
var selectedCities = cityNames.slice(2 , 5);
document.write("<h1>Cities List</h1>");
document.write("Cities List : " + cityNames);
document.write("<br>");
document.write("Selected cities list : " + selectedCities);


// Task 12
var arr = ["This" , "is"  , "my" , "cat"];
var str = arr.join(" ");
document.write("<h1>Converted Array to Sting</h2>")
document.write("Array : " + arr);
document.write("<br>");
document.write("String : " + str);


// Task 13
var arr = [];
document.write("<br>");
arr[0] = "keyboard";
arr[1] = "mouse";
arr[2] = "printer";
arr[3] = "monitor";
document.write("<h1>Devices</h1>");
document.write(arr);
document.write("<br>");
var arrOut = arr.shift();
document.write("Out : " + "<br>" + arrOut);
document.write("<br>");
var arrOut = arr.shift();
document.write("Out : " + "<br>" + arrOut);
document.write("<br>");
var arrOut = arr.shift();
document.write("Out : " + "<br>" + arrOut);
var arrOut = arr.shift();
document.write("<br>");
document.write("Out : " + "<br>" + arrOut);


// Task 14
var arr = [];
document.write("<br>");
arr[0] = "keyboard";
arr[1] = "mouse";
arr[2] = "printer";
arr[3] = "monitor";
document.write("<h1>Devices</h1>");
document.write(arr);
document.write("<br>");
var arrOut = arr.pop();
document.write("Out : " + "<br>" + arrOut);
document.write("<br>");
var arrOut = arr.pop();
document.write("Out : " + "<br>" + arrOut);
document.write("<br>");
var arrOut = arr.pop();
document.write("Out : " + "<br>" + arrOut);
var arrOut = arr.pop();
document.write("<br>");
document.write("Out : " + "<br>" + arrOut);


// Task 15
var mobManufacturer = ["Apple" , "Samsung" , "Motorola" , "Nokia" , "Sony" , "Haier"];
document.write("<h1>Mobile Manufacturers</h1>");
document.write("<select>");
for(i = 0;i< mobManufacturer.length ;i++)
document.write("<option>" + mobManufacturer[i] + "</option>")
document.write("</select>");


// Chapter # 17-20
// Task 1
var multidimensionalArray = [
    [],[],[],[],[]
];


// Task 2



// Task 3
document.write("<h1>Counting</h1>")
for(var num = 1 ; num <= 10 ;num++){
    document.write(num + "<br>");
}

// Task 4
var userTable = prompt("Enter a number to show its multiplication table");
var userLength = prompt("Enter length multiplication table");
document.write("<h1>Multiplication Table of " + userTable + "<br>" + "Length " + userLength + "</h1>");
document.write("<br>");
for(var i = 1 ; i <= userLength ; i++){
    document.write(userTable + "x" + i + "=" + userTable*i + "<br>");
}


// Task 5
var fruits = ["apple" , "banana" , "mango" , "orange" , "strawberry"];
document.write("<h2>Fruits Name</h2>")
for(var i = 0 ; i < fruits.length ;i++){
    document.write(fruits[i] + "<br>");
}


// Task 6
document.write("<h3>Counting</h3>");
for(var i = 1 ; i <= 15 ; i++){
    document.write(i + ",");
}
document.write("<h3>Reverse</h3>");
for(var i = 10 ; i >= 1 ; i--){
    document.write(i + ",");
}
document.write("<h3>Even</h3>");
for(var i = 0 ; i <= 20 ; i=i+2){
    if(i % 2 === 0){
    document.write(i + ",");
}
}
document.write("<h3>Odd</h3>");
for(var i = 1 ; i < 20 ; i=i+2){
    if(i % 2 !== 0){
    document.write(i + ",");
}
}
document.write("<h3>Series</h3>");
for(var i = 2 ; i <= 20 ; i=i+2){
    document.write(i + "k" + ",");
}



// // Task 7
var bakeryItems = ["cake" , "apple pie", "cookie" , "chips" , "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?" , "cookie");
var findUserchoice = bakeryItems.indexOf(userInput);
document.write(userInput + " is " + "available" + " at index " + findUserchoice + " in our bakery");
document.write("<br>");
var userInput = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?" , "pastry");
var findUserchoice = bakeryItems.indexOf(userInput);
document.write("We are sorry. " + "pastry is not available in our bakery");


// Task 8
var arr = [24, 53, 78, 91, 12];
var largest = 91;
document.write("<h1>Array Largest number finding</h1>");

for(i = 0 ; i < arr.length ; i++){
    if(largest <= arr[i]){
        document.write("Array items : " + arr);
        document.write("<br>");
        document.write("The largest number is " + largest);
    }
}


// Task 9
var arr = [24, 53, 78, 91, 12];
var smallest = 12;
document.write("<h1>Array Smallest number finding</h1>");

for(i = 0 ; i < arr.length ; i++){
    if(smallest === arr[i]){
        document.write("Array items : " + arr);
        document.write("<br>");
        document.write("The smallest number is " + smallest);
    }
}


// Task 10
// var multipleOf5 = [];
document.write("<h1>Multiples of 5</h1>");

for(var i = 5; i <=100 ; i=i+5){
   document.write(i + ",");
}
