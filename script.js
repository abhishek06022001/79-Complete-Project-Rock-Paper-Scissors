

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let reponse;
    const index = Math.floor(Math.random() * 3);
    reponse = choices[index];
    return reponse;
}
function playRound(playerSelection, computerSelection) {
   let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();
    let result;
    if (ps === cs) {
        console.log("Its  a Tie");
        return 0;
    } else {
        if (ps == 'rock') {
            if (cs == 'paper') {
                console.log("You Lose! "+ cs.charAt(0).toUpperCase() +cs.slice(1) +" beats "+ps.charAt(0).toUpperCase()+ps.slice(1));
                return -1;
            } else {
                console.log("You Win! "+ ps.charAt(0).toUpperCase() +ps.slice(1) +" beats "+cs.charAt(0).toUpperCase()+cs.slice(1));
                return 1;
            }
        } else if (ps == 'paper') {
            if (cs == 'scissors') {
                console.log("You Lose! "+ cs.charAt(0).toUpperCase() +cs.slice(1) +" beats "+ps.charAt(0).toUpperCase()+ps.slice(1));
                return -1;
            } else {
                console.log("You Win! "+ ps.charAt(0).toUpperCase() +ps.slice(1) +" beats "+cs.charAt(0).toUpperCase()+cs.slice(1));
                return +1;
            }
        }else{
            if (cs == 'rock') {
                console.log("You Lose! "+ cs.charAt(0).toUpperCase() +cs.slice(1) +" beats "+ps.charAt(0).toUpperCase()+ps.slice(1));
                return 1;
            } else {
                console.log("You Win! "+ ps.charAt(0).toUpperCase() +ps.slice(1) +" beats "+cs.charAt(0).toUpperCase()+cs.slice(1));
                return +1;
            }

        }
    }
    // return result;
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
/**
 * Write a NEW function called playGame(). Use the previous function inside of this one to play a five round game that keeps score and reports a winner or loser at the end.
You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
At this point you should be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user. Read the docs here if you need to.
Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
Feel free to create more “helper” functions if you think it would be useful.
 */
function playGame(){
    let score =0 ;
    for ( let i = 0 ; i < 5 ; i++){
        // take input from console 
        // take comps input 
        let input = prompt("Wats your choice?");
        let compinput = getComputerChoice();
         score+= playRound(input,compinput);

    }
    if( score >0){
        return "You Win ";
    }else if( score == 0){
        return "Its  a Tie";
    }else{
        return "You Lose";
    }
}


