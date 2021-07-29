function myFunction(){
	var score=0,response=0,total=0;
	do{
		var generatedNumber=Math.floor(Math.random()*10+1);
		var guessedNumber=prompt("Enter your number");

		if(generatedNumber==guessedNumber)
			{
				alert("Congo!!! \n You guessed the correct number");
				score++;
			}
		else
			alert("Opps!!! \n Wrong guess");
			total++;
		response=prompt("ONCE MORE?\n 1.YES\n 2.NO");
	}while(response==1);
	alert("\n Number of times guessed= " + score + "/" + total);
}