window.onload = function(){
        
        var Caption = ["Addition", "Triangle", "Real-Roots", "Roots", "GPA", 
							 "Number-Sign", "Total-Sign", "Divisible By 6", "Separate", "equal 7", 
							 "Digit Sum", "Palindrome", "Factorial", "Fibonacci", "XX", 
                      "first equal last", "Prime", "Prime digit 7", "Perfect num", "Base 8",
                       "Sum", "For Sum", "Row", "Circle", "Array len", 
                       "Date", "Longest", "Most", "Array pri", "Largest even", 
                       "Sum range", "16bit", "Value", "Subset", "Noreapted", 
                       "Iterate", "Multiple", "Even & odd", "Sort", "RetrieveV"];
        
        for (var i = 0; i < 40; i++){

              var newBtn = document.createElement("button"); 
              $("nav").append(newBtn); 
              $(newBtn).attr("id", "button" + (i+1));  
              $(newBtn).html(Caption[i]);  
              $(newBtn).attr("onClick", "lab08("+i+");");
              $(newBtn).attr("class", "button"); 


        }
}

function lab08(problemId) {
        var descriptionOfProblem = ["receive two numbers and output their sum.", 
                                    "receive three numbers and store them within memory spaces called a, b, and c to represent a triangle\'s three sides and, by using Heron\'s formula, calculate and output the triangle\'s area. ", 
                                    "receive three numerical coefficients of a quadratic equation (store them in memory spaces called a, b, and c) and calculate and output its roots. (assume coefficients are good enough such that a solution in real number exists. Don’t worry about cases that a solution does not exist). ", 
                                    "receive three numerical coefficients of a quadratic equation and determines if it has two distinct real roots, one root, or no roots in real numbers. ", 
                                    "receive a number and map it to a letter grade based on York University's standard. ", 
                                    "Draw a flowchart that outputs whether the input is positive or negative until a zero is received. When a zero is received, the button is disabled. ", 
                                    "Draw a flowchart to continue receiving numbers and output if they are positive or negative until a zero is entered. When a zero is entered, the program should output how many positive and how many negative numbers have been entered, then it stops.",
                                    "receiving numbers and output if they are divisible by 6 or not until a zero is entered. When a zero is entered, the program should output how many of the entered numbers were divisible by 6, then it stops. IMPORTANT RESTRICTION: you are not allowed to divide the number by 6; therefore, you are not allowed to use the modulus operator (%) over 6 to verify the remainder when the number is divided by 6. ",
                                    "Receive a positive number and output each digit separately.",
                                    "Receive a positive number and output how many of its digits are equal to 7 ", 
                                    "Receive a positive number and output sum of its digits.",
                                    "Receive a positive number and output yes.if it's equal to its reverse; otherwise, output no.",
                                    "Receive a positive number, as n, and output n!", 
                                    "Devise an algorithm to input an integer greater than 1, as n, and output the first n values of the Fibonacci sequence.", 
                                    "Devise an algorithm to input a positive integer, n, – and by using XX characters – output the figure below that has n rows and each row k has k pairs of XX ", 
                                    "Receive 8 numbers and it will output 'yes' if the sum of the first four numbers is equal to the sum of the last four numbers, otherwise it will output 'no'. ",
                                    "receive a natural number greater than 1 and it will output if the natural number that the user has inputted is a prime number or not. ",
                                    "Devise an algorithm to receive a positive number, n, and output all prime numbers that are smaller than nand have a digit 7.", 
                                    "Write a flowchart to input a whole number and output “It’s PERFECT” if the input is a “perfect number”; otherwise, it should output “It’s IMperfect”. A “perfect number” is a positive whole number that is equal to the sum of all its positive divisors except itself.",
                                    "Devise an algorithm to input a positive integer and output it in base 8",
                                    "compute the sum of numbers between 10 and 30,inclusively.",
                                    "compute the sum of numbers between 10 and 30 use for loop.",
                                    "input a positive integer, as n, and by using [] characters — output a figure below that has n rows and each row k has k pairs of [].",
                                    "receive the diameter of a circle and output its perimeter and area. ",
                                    "Compute the sum of three elements of a given array of integers of length 3",
                                    "Write a JavaScript program to get the current date.",
                                    "Find the longest string from an given array of strings.",
                                    "Find the number which appears most in a given array of integers.",
                                    "Sort an array of all prime numbers between 1 and a given integer",
                                    "Get the largest even number from an array of integers.",
                                    "Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.",
                                    "Write a JavaScript program to reverse the bits of a given 16 bits unsigned short integer.",
                                    "Compute the value of bn where n is the exponent and b is the bases",
                                    "Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.",
                                    "Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.",
                                    "Iterates the integers from 1 to 100",
                                    "Write a JavaScript program to sum the multiples of 3 and 5 under 1000.",
                                    "For loop that will iterate from 0 to 15 to find even and odd numbers",
                                    "Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.",
                                    "Write a JavaScript function to retrieve the value of a given property from all elements in an array."
                                    ];

                                    
        document.getElementById("description").innerHTML= "<p> Computational thinking problem for a program to "+descriptionOfProblem[problemId] +"</p>"; // Getting the corresponding description of the problem from discription array
        
        document.getElementById("flowchart").setAttribute("src","./images/img_" + (problemId+1) + ".jpg");
        document.getElementById("flowchart").style.display="none";

        $("#javaScript").attr("src","./images/js_" + (problemId+1) + ".jpg"); 
        $("#javaScript").css("display","none");

        $("#anotherSolution").css("display","none");

        document.getElementById("checkbox1").checked=false;
        document.getElementById("checkbox2").checked=false;
        document.getElementById("checkbox3").checked=false;
}


function checkUncheck1(){
   if (document.getElementById("flowchart").style.display==="none") {
      document.getElementById("flowchart").style.display="inline";
   }
   else {
      document.getElementById("flowchart").style.display="none";
   }
}

function checkUncheck2(){
   if (document.getElementById("javaScript").style.display==="none") {
      document.getElementById("javaScript").style.display="inline";
   }
   else {
      document.getElementById("javaScript").style.display="none";
   }
}
function checkUncheck3(){
     if (document.getElementById("anotherSolution").style.display==="none"){
      document.getElementById("anotherSolution").style.display="inline";
     }
     else {
      document.getElementById("anotherSolution").style.display="none";
     }
}