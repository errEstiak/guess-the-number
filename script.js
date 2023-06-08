/*
document.querySelector('.message').textContent = 'What is the number?';
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 10
console.log(document.querySelector('.guess').value);
*/

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number((document.querySelector('.guess').value));
  console.log(guess);

  if(!guess){
    document.querySelector('.message').textContent = '❌ No Number Input';
  }
})