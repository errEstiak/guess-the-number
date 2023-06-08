/*
document.querySelector('.message').textContent = 'What is the number?';
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 10
console.log(document.querySelector('.guess').value);
*/

// ** make the secret number
// ** show to the secret number
// ** match the number for equal
// ** implement too high / too low concept
// ** working on score

const secretNumber = Math.trunc(Math.random() * 20)+1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number((document.querySelector('.guess').value));
  console.log(guess);

  if(!guess){
    document.querySelector('.message').textContent = '❌ No Number Input';
  }
  else if(guess === secretNumber){
    document.querySelector('.message').textContent = '🎉 Correct Number';
  }
  else if(guess > secretNumber){
    if(score > 1){
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score
    }else{
      document.querySelector('.message').textContent = '⛔ Game Is Over';
      document.querySelector('.score').textContent = 0
    }
  }
  else if(guess < secretNumber){
    if(score > 1){
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score
    }
    else{
      document.querySelector('.message').textContent = '⛔ Game Is Over';
      document.querySelector('.score').textContent = 0
    }
  }
})