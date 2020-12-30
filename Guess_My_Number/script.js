'use strict';
//khởi tạo random number ở ngoài bởi vì nếu trong hàm thì mỗi lần click sẽ ra số random mới không bao giờ tìm được
let serectNumber = Math.trunc(Math.random() * 20) + 1; //giữa 1-20 thì phải + 1
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // tại vì tất cả input nhập vào đều là string nên phải convert sang Number
  //khi người dùng không nhập gì
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No number! ';
  } else if (guess === serectNumber) {
    //khi người dùng nhập đúng
    document.querySelector('.number').textContent = serectNumber;
    document.querySelector('.message').textContent = '👏 Correct Number';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score; // lưu điểm cao nhất
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > serectNumber) {
    //khi người dùng nhập số lớn hơn
    if (score > 1) {
      document.querySelector('.message').textContent = 'too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < serectNumber) {
    //khi người dùng nhập số nhỏ hơn
    if (score > 1) {
      document.querySelector('.message').textContent = 'too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  serectNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
