/*
document.querySelector('.message').textContent = 'What is the number?';
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 10
console.log(document.querySelector('.guess').value);
*/


let secretNumber = Math.trunc(Math.random() * 20)+1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function(){

  const guess = Number((document.querySelector('.guess').value));
  console.log(guess);

  if(!guess){
    document.querySelector('.message').textContent = '❌ No Number Input';
  }
  else if(guess === secretNumber){
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  else if(guess > secretNumber){
    if(score > 1){
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = '⛔ Game Is Over';
      document.querySelector('.score').textContent = 0;
    }
    newScore = score;
  }
  else if(guess < secretNumber){
    if(score > 1){
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
    else{
      document.querySelector('.message').textContent = '⛔ Game Is Over';
      document.querySelector('.score').textContent = 0;
    }
  }  
})

// TODO working on again button
document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  
  secretNumber = Math.trunc(Math.random() * 20)+1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'
})