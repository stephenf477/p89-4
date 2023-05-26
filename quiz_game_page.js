function send(){
    number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) * parseInt(number2)

	question_number = "<h4>" + number1 +  " X "+ number2 +"</h4>";
	input_box = "<br>Answer : <input type='text' id='input_check_box'> ";
	check_button = "<br><br><button class = 'btn btn-info' onclick='check()'>Check</button>";
	row = question_number + input_box + check_button ;

	document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";



    
}

question_turn = "player1";
answer_turn = "player2";

function check()
{
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)
	{
		update_player1_score = player1_score +1
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;

	}
	else
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player_name ;

	}


}


