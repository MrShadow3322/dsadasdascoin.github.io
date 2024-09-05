// Simулируем хранилище данных на клиенте
let balance = localStorage.getItem('balance');
if (!balance) {
  balance = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
  localStorage.setItem('balance', balance);
}

document.getElementById('balance').textContent = `${balance} RatCoin`;

// Функция для подписки на канал
async function subscribe() {
  try {
    // Имитация подписки на канал
    const response = await fetch('https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates');
    const data = await response.json();
    
    // Проверьте подписку (этот шаг зависит от реального API проверки подписки)
    const subscribed = true; // Имитация успешной подписки
    if (subscribed) {
      const reward = 1000;
      balance = parseInt(localStorage.getItem('balance')) + reward;
      localStorage.setItem('balance', balance);
      document.getElementById('balance').textContent = `${balance} RatCoin`;
      alert('You have received 1000 RatCoin for subscribing!');
    } else {
      alert('Subscription failed. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
