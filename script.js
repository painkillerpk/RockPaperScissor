let Inputs = ["rock","paper","scissor"];
let playerInput = '';
let initialiseControl = document.getElementById('controls');
	initialiseControl.addEventListener('click',(e) =>{
		setPlayerInput(e.target.id);
	});
let res = document.getElementById('result');
let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');
function playerWins(){
	playerScore.textContent = parseInt(playerScore.textContent) + 1;
	res.innerHTML = "Player Wins";
	res.style.display = 'block';
}
function CPUwins(){
	computerScore.textContent = parseInt(computerScore.textContent) + 1;
	res.innerHTML = "CPU Wins";
	res.style.display = "block";
}

function getcomputerInput(){
	return Inputs[(Math.floor(Math.random() * Inputs.length))];
}
function setPlayerInput(param){
	playerInput = param;
	playRound();
}

function playRound(){
	let computerInput = getcomputerInput();
	console.log(playerInput);
	console.log(computerInput);
	if (computerInput == playerInput){
		res.innerHTML = "Its a tie";
		res.style.display = "block";			
	}
	else if(computerInput == "rock"){
		if (playerInput == "paper")
			playerWins();
		else if (playerInput == "scissor")
			CPUwins();
	}
	else if(computerInput == "paper"){
		if (playerInput == "scissor")
			playerWins();
		else if (playerInput == "rock")
			CPUwins();	
	}
	else if(computerInput == "scissor"){
		if (playerInput == "rock")
			playerWins();
		else if (playerInput == "paper")
			CPUwins();	
	}
}
