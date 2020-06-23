document.getElementById('play-rock').addEventListener('click', function(){playGame(1);});

document.getElementById('play-paper').addEventListener('click', function(){playGame(2);});

document.getElementById('play-scissors').addEventListener('click', function(){playGame(3);});

function playGame(playerInput){
  
  clearMessages();
  
  function getMoveName(argMoveId) {

    if (argMoveId === 1) {
      return 'kamień';
    } else if (argMoveId === 2) {
      return 'papier';
    } else if (argMoveId === 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  function getRoundScore(argPlayerMove, argComputerMove) {

    if (argComputerMove === argPlayerMove) {
      return 'Tym razem jest remis!'
    }
    
    if (
      (argPlayerMove === 'kamień' && argComputerMove === 'nożyce') ||
      (argPlayerMove === 'papier' && argComputerMove === 'kamień') ||
      (argPlayerMove === 'nożyce' && argComputerMove === 'papier')
    ) {
      return 'Ty wygrałeś!'
    }
    
    return 'Ja wygrałem!'
  }
  
  function displayResult(argPlayerMove, argComputerMove) {
    printMessage(getRoundScore(argComputerMove, argPlayerMove));
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);
  
  console.log('Gracz wpisał: ' + playerInput);

  const playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);
  
  displayResult(computerMove, playerMove);
}