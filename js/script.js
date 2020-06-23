const moveRock = 'kamień',
      movePaper = 'papier',
      moveShears = 'nożyce';

const playGame = (playerInput) => {

  clearMessages();
        
  const getMoveName = (argMoveId) => {
      
    const unknownMove = 'nieznany ruch!';

    if (argMoveId === 1) {
      return moveRock;
    } else if (argMoveId === 2) {
      return movePaper;
    } else if (argMoveId === 3) {
      return moveShears;
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return unknownMove;
    }
  }
  
  const randomNumber = Math.floor(Math.random() * 3 + 1),
        computerMove = getMoveName(randomNumber),
        playerMove = getMoveName(playerInput);

  printMessage('Mój ruch to ' + computerMove + '. ' + 'Twój ruch to ' + playerMove + '.');

  const getRoundScore = (argPlayerMove, argComputerMove) => {

    const evenScore = 'Tym razem jest remis!',
          playerScore = 'Ty wygrałeś!',
          computerScore = 'Ja wygrałem!';

    if (argComputerMove === argPlayerMove) {
      return evenScore;
    }
      
    if (
      (argPlayerMove === moveRock && argComputerMove === moveShears) ||
      (argPlayerMove === movePaper && argComputerMove === moveRock) ||
      (argPlayerMove === moveShears && argComputerMove === movePaper)
    ) {
      return playerScore;
    }
      
    return computerScore;
  }
    
  const displayResult = (argPlayerMove, argComputerMove) => {
    printMessage(getRoundScore(argComputerMove, argPlayerMove));
  }

  displayResult(computerMove, playerMove);

  console.log('Wylosowana liczba to: ' + randomNumber);

  console.log('Gracz wpisał: ' + playerInput);
}

document.getElementById('play-rock').addEventListener('click', function(){playGame(1);});

document.getElementById('play-paper').addEventListener('click', function(){playGame(2);});
  
document.getElementById('play-scissors').addEventListener('click', function(){playGame(3);});