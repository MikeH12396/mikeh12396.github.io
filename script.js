function count(){
	for(i=99;i>=0;i--){
		document.getElementById("main").innerHTML+=i+" bottles of beer on the wall, "+i+" bottles of beer,<br />";
		document.getElementById("main").innerHTML+="Take one down and pass it around, "+(i-1)+" bottles of beer on the wall,<br />";
	}
}