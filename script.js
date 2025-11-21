/* counting from -100 to 0
function count(){
	for(i=-100;i<=0;i++){
		document.getElementById("main").innerHTML+="<br />"+i+",";
	}
}
*/

/* counting from 100 to 0
function count(){
	for(i=100;i>=0;i--){
		document.getElementById("main").innerHTML+="<br />"+i+",";
	}
}
*/

/* counting every second number from -10 to 10 (i+=2)
function count(){
	for(i=-10;i<=10;i+=2){
		document.getElementById("main").innerHTML+="<br />"+i+",";
	}
}
*/

/* Take in 2 numbers from a user and print all numbers between these 2 
function count(){
	var num1=prompt("Please enter number1 *MAKE SURE THIS IS THE BIGGER NUMBER OTHERWISE PAGE WILL CRASH*");
	var num2=prompt("Please enter number2");

	for(i=num1;i>=num2;i--){
		document.getElementById("main").innerHTML+="<br />"+i+",";
	}
}
*/

/* Take in 3 numbers from a user and use them to set all 3 parts of the loop and print (Eg 1,10,2 would print from 1-10 in increments of 2) 
function count(){
	var num1=prompt("Please enter number1 *MAKE SURE THIS IS THE BIGGER NUMBER OTHERWISE PAGE WILL CRASH*");
	var num2=prompt("Please enter number2");
	var num3=prompt("Please enter the number that will be incremented");

	for(i=num1;i>=num2;i-=num3){
		document.getElementById("main").innerHTML+="<br />"+i+",";
	}
}
*/

/* Calculate the sum of all numbers 1-10 (1+2+3 etc) 
function count(){
	var sum=0;

	for(i=0;i<=10;i++){
		sum=sum+i;
		document.getElementById("main").innerHTML+="<br />"+sum+",";
	}
}
*/

/* Calculate the sum of all even numbers 1-100 and all odd numbers 1-100 (1+3+5 etc and 2+4+6 etc) 
function count(){
	var even=0;
	var odd=0;

	for(i=0;i<=100;i++){
		if(i%2==0){
			even=even+i;
		}
		else{
			odd=odd+i;
		}
		document.getElementById("main").innerHTML+="<br />"+even+",";
		document.getElementById("main").innerHTML+="<br />"+odd+",";
	}
}
*/

/* While loop example
function count(){

	var choice=false;
	while(choice==false){ //example of a while loop
		alert("Try again!"); 
		choice=confirm("Do you want to install this virus?"); //this also breaks the while loop
		if(choice==true){ //press OK to break the while loop
			alert("Virus installed!");
		}
	}
}
*/

/*Another while loop example
function count(){
	/*for(i=-100;i>=0;i++){
		document.getElementById("main").innerHTML+="<br />"+i+",";
	}
	var count=10; //you must declare your var outside the loop, biggest diff between for and while loops
	while(count>=0){
		document.getElementById("main").innerHTML+="<br />"+count+",";
		count=count-2;
	}
}
*/