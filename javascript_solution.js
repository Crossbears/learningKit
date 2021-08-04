function p01Func() {
    var w = parseInt(document.getElementById("num1").value);
    var h = parseInt(document.getElementById("num2").value);
    var s = w + h;
    document.getElementById("output").innerHTML = "sum: " + s;
}

function p02Func() {
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var c = parseInt(document.getElementById("num3").value);
    var p = ( a + b + c ) / 2
    var s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    var n = s.toFixed(2);
    document.getElementById("output").innerHTML = "sum: " + n;
}

function p03Func() {
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var c = parseInt(document.getElementById("num3").value);
    var p =  b * b - 4 * a * c;
    var r1 = ( -b + Math.sqrt(p) ) / ( 2 * a );
    var r2 = ( -b - Math.sqrt(p) ) / ( 2 * a );
    var m = r1.toFixed(2);
    var n = r2.toFixed(2);
    document.getElementById("output").innerHTML = "one root: " + m +"<br>" + "another: " + n;  
   }

   function p04Func() {
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var c = parseInt(document.getElementById("num3").value);
    var d =  b * b - 4 * a * c;
    if(d == 0) {
        document.getElementById("output").innerHTML = "its root are identical";
        }
        else if(d > 0) {
        document.getElementById("output").innerHTML = "it has 2 distict roots";  
        }
        else {
        document.getElementById("output").innerHTML = "it has no roots in real numbers";      
        }

  }

  function p05Func(){
    var a = parseInt(document.getElementById("num1").value);
    switch (true){
        case (a>89): 
           answer="A+";
           break;
        case (a>79): 
           answer="A";
           break;
           case (a>74): 
           answer="B+";
           break;
           case (a>69): 
           answer="B";
           break;
           case (a>64): 
           answer="C+";
           break;
           case (a>59): 
           answer="C";
           break;
           case (a>54): 
           answer="D+";
           break;
           case (a>49): 
           answer="D";
           break;
           case (a>39): 
           answer="E";
           break; 
           default:
            answer="F";
        }
        document.getElementById("output").innerHTML = answer;      
  }

  function p06Func(){
    var a = parseInt(document.getElementById("num1").value);
    var b = "";
    if (a == 0) {
       document.getElementById("button").disabled = true;
    } else if (a > 0) {
       b = "positive";
    } else {
       b = "negative";
    }
    
    document.getElementById("output").innerHTML = b;
  }

  var p = 0;
  var n = 0;
  function p07Func(){
    var a = parseInt(document.getElementById("num1").value);
    var b = "";
   
    if (a == 0) {
       document.getElementById("positives_counter").innerHTML =  p; 
       document.getElementById("negatives_counter").innerHTML =  n;  
       document.getElementById("output").innerHTML ="";
       document.getElementById("button").disabled = true;
    } else if (a > 0) {
       b = "positive";
       p++;
       document.getElementById("output").innerHTML = b;
    } else {
       b = "negative";
       n++;
       document.getElementById("output").innerHTML = b;
    }
  }

  var count = 0;
  function p08Func(){
   var a = parseInt(document.getElementById("input").value);
   
   if (a == 0) {
      document.getElementById("button").disabled = true;
      document.getElementById("divBy6").innerHTML = count;
   } else if (a % 3 == 0 && a % 2 == 0) {
      count++;
   }
}
  

  function p09Func(){
    var outputObj=document.getElementById("output");
    var a = parseInt(prompt("Please enter a number: ", ""));
    outputObj.innerHTML="number: "+a+"<br><br>its digits: ";
    while(a >= 1) {
        outputObj.innerHTML += a%10 + ", ";
        a = Math.floor(a/10);
    }
    outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
  }

  function p10Func(){
    var outputObj=document.getElementById("output");
    var a = parseInt(prompt("Please enter a number: ", ""));
    var counter = 0;
    outputObj.innerHTML="number: "+a+"<br><br>number of 7’s: ";
    while(a >= 1) {
        var digit = a%10;
       
        if(digit == 7) {
        counter = counter +1;
      
        }
          a = Math.floor(a/10);
    
    }
      outputObj.innerHTML += counter;
      outputObj.innerHTML=outputObj.innerHTML +"<br><br>"+"program ended";
      document.getElementsByTagName("button")[0].setAttribute("disabled","true");
  }

  function p11Func(){
    var outputObj=document.getElementById("output");
    var a = parseInt(prompt("Please enter a number: ", ""));
  var sum = 0;
  outputObj.innerHTML="number: "+a+"<br><br>sum of digits: ";
  while(a >= 1) {
    sum = sum +a%10;
    a = Math.floor(a/10);
  
  }
    outputObj.innerHTML += sum;
    outputObj.innerHTML=outputObj.innerHTML +"<br><br>"+"program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
  }
  
  function p12Func(){
    var outputObj=document.getElementById("output");
    var a = parseInt(prompt("Please enter a number: ", ""));
  var reverse = 0;
  var temp = a;
  outputObj.innerHTML="number: "+a+"<br><br>equal to its reverse? ";
  while(a != 0) {
     
    reverse = reverse * 10 + a%10;
    a = Math.floor(a/10);
  }
 
  if(temp == reverse) {
    outputObj.innerHTML=outputObj.innerHTML += "yes";

  }
  else {
    outputObj.innerHTML=outputObj.innerHTML += "no";
  }
  outputObj.innerHTML=outputObj.innerHTML +"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
  }

  function p13Func(){
    var outputObj=document.getElementById("output");
    var n = parseInt(prompt("Please enter a number: ", ""));
    var a = 1;
    outputObj.innerHTML="number: "+ n + "<br><br>" + n +"!=" ;
    for (i=2;i<=n;i=i+1) {
        a = a * i;
        }
        outputObj.innerHTML=outputObj.innerHTML + a;
        outputObj.innerHTML=outputObj.innerHTML +"<br><br>"+"program ended";
        document.getElementsByTagName("button")[0].setAttribute("disabled","true");
  }

  function p14Func(){
    var outputObj=document.getElementById("output");
    var n = parseInt(prompt("Please enter a number: ", ""));
  var secondLast=0;
  var last=1;
  var newValue;
  outputObj.innerHTML="number: "+n+"<br><br>Fibonacci:" ;
  if (n == 1){
    outputObj.innerHTML += 0 + ", "; 
  }
  else if (n == 2) {
    outputObj.innerHTML += "0, 1" + ", ";   
  }

  else {
      outputObj.innerHTML += "0, 1, ";
  for ( i = 0; i < n - 2; i = i + 1) {
  newValue=secondLast + last;
  secondLast = last;
  last = newValue;
  outputObj.innerHTML = outputObj.innerHTML + newValue + ", ";

  }
}
outputObj.innerHTML=outputObj.innerHTML +"<br><br>"+"program ended";
document.getElementsByTagName("button")[0].setAttribute("disabled","true");
  }

  function p15Func(){
    var outputObj=document.getElementById("output");
    outputObj.style.fontSize = "11px";
    outputObj.style.textAlign = "left";
    var n = parseInt(prompt("Please enter a number: ", ""));
    outputObj.innerHTML="number: "+n+"<br><br>" ;
    for (row = 0; row < n; row = row + 1) {
     
        for(pairs = 0; pairs < row; pairs = pairs +1) {
    
            outputObj.innerHTML += "XX ";
        }
    
      outputObj.innerHTML = outputObj.innerHTML + "XX " + "<br>";
    
      }
      outputObj.innerHTML=outputObj.innerHTML +"<br><br>"+"program ended";
      document.getElementsByTagName("button")[0].setAttribute("disabled","true");
  }

  function p16Func(){
    var output=document.getElementById("output");
    
    var sum1 = 0;
    var sum2 = 0;
    
      for(i = 1; i <= 4;i = i + 1) {
        var num = parseInt(prompt("Please enter a number: ", ""));
        sum1 = sum1 + num ;
      }

      for(i = 1; i <= 4;i = i + 1) {
        var num = parseInt(prompt("Please enter a number: ", ""));
        sum2 = sum2 + num ;
      }
      
      if(sum1 == sum2) {
        output.innerHTML="yes";
      }
      output.innerHTML="no";
  }

  function p17Func(){
    var output=document.getElementById("output");
    var num = parseInt(prompt("Please enter a number: ", ""));
    var prime = "true";
    var d = 2;
    
      while(d <= num/2 && prime =="true") {
          
        if(num % d == 0) {
    prime = "false";
        }
        d = d + 1;
      }
      
      if(prime == "true") {
        output.innerHTML=num + "is prime";
      }
      output.innerHTML=num + " is not prime";
    }

  function p18Func(){
    var num = parseInt(prompt("Please enter a number: ", ""));
	var result = "";
	for (var i = 1; i < num; i = i + 1) {
		if (prime(i) && has7(i)) {
			result += i + " ";
		}
	}
	alert(result);
}
function prime(num){
  var flag=true;
  var d=2;
  while(flag==true && d<=num/2) {
 if(num % d == 0) {
     flag=false;
 }else{
     d = d + 1;
 }
  }
  return flag;
 }
function has7(num) {
	var flag = false;
	while(num > 0 && flag==false) {
		if (num % 10 == 7) {
			flag = true;
			
		} else {
			num = Math.floor(num / 10);
		}
	}
	return flag;
}


  function p19Func(){
    var a = parseInt(prompt("Please enter a number: ", "")) ;
    var sum=0;
    for(i=1;i<=a/2;i=i+1){
        if(a%i==0){
            sum=sum+i;
        }
    }
    if(sum==a){
    alert("It's perfect");
    }
    else {
    alert("It's IMperfect");
}
  }

  function p20Func(){
      var a = parseInt(prompt("Please enter a number: ", "")) ;
      var result = 0;
      var x = 0;
      while(a > 0){
          result=result + a % 8 * Math.pow(10,x);
          x++;
          a = Math.floor(a/8);
      }
     alert(result);
  }

  function Row(){
    var outputObj=document.getElementById("output");
    var n = parseInt(prompt("Please enter a number: ", ""));
    outputObj.innerHTML="number: "+n+"<br><br>" ;
    for (row = 0; row < n; row = row + 1) {
     
        for(pairs = 0; pairs < row; pairs = pairs +1) {
    
            outputObj.innerHTML += "[] ";
        }
    
      outputObj.innerHTML = outputObj.innerHTML + "[] " + "<br>";
    
      }
      outputObj.innerHTML=outputObj.innerHTML +"<br><br>"+"program ended";
      document.getElementsByTagName("button")[0].setAttribute("disabled","true");
  }