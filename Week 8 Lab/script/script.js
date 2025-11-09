function game(){
	
	userInput1=prompt("Please enter either 'Rock', 'Paper' or 'Scissors'");
	userInput2=prompt("Please enter either 'Rock', 'Paper' or 'Scissors'");
	
	if(userInput1=="Paper" && userInput2=="Rock"){
		document.getElementById("answer").innerHTML="Player 1 wins."
	}
	else if(userInput1=="Rock" && userInput2=="Paper"){
		document.getElementById("answer").innerHTML="Player 2 wins."
	}
	else if(userInput1=="Paper" && userInput2=="Scissors"){
		document.getElementById("answer").innerHTML="Player 2 wins."
	}
	else if(userInput1=="Scissors" && userInput2=="Paper"){
		document.getElementById("answer").innerHTML="Player 1 wins."
	}
	else if(userInput1=="Scissors" && userInput2=="Rock"){
		document.getElementById("answer").innerHTML="Player 2 wins."
	}
	else if(userInput1=="Rock" && userInput2=="Scissors"){
		document.getElementById("answer").innerHTML="Player 1 wins."
	}
	else if(userInput1=="Rock" && userInput2=="Scissors"){
		document.getElementById("answer").innerHTML="Player 1 wins."
	}
	else{
		document.getElementById("answer").innerHTML="Please enter a valid input."
	}
}