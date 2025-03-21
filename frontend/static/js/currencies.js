// currencies.js
import { shuffle, getCurrentTime } from './utils.js';

// DOM Element References
const container = document.getElementById('currencies-container');

// Currency Icons
const icons = [
  '<i class="bx bx-dollar" data-tooltip="USD"></i>',
  '<i class="bx bx-euro" data-tooltip="EUR"></i>',
  '<i class="bx bx-pound" data-tooltip="GBP"></i>',
  '<i class="bx bx-yen" data-tooltip="JPY"></i>',
  '<i class="bx bx-bitcoin" data-tooltip="BTC"></i>',
  '<i class="bx bx-ruble" data-tooltip="RUB"></i>',
  '<i class="bx bx-won" data-tooltip="KRW"></i>',
  '<i class="bx bx-rupee" data-tooltip="INR"></i>',
  '<i class="bx bx-lira" data-tooltip="TRY"></i>',
  '<i class="bx bx-shekel" data-tooltip="ILS"></i>',
];

// Generate Currency Rows
for (let i = 0; i < 10; i++) {
  const shuffledIcons = shuffle([...icons]);
  const currencyRow = document.createElement('div');
  currencyRow.className = 'currency';
  currencyRow.innerHTML = `
    <div class="currency-slide ${i % 2 === 1 ? 'reverse' : ''}">
      ${shuffledIcons.join('').repeat(5)}
    </div>
  `;
  container.appendChild(currencyRow);
}

// Hover Effects for Currency Icons
const currencyIcons = document.querySelectorAll('.currency-slide i');
currencyIcons.forEach((icon) => {
  icon.addEventListener('mouseover', () => {
    icon.style.setProperty('--random-hover-color', ['red', 'green', 'yellowgreen', 'darkred'][Math.floor(Math.random() * 4)]);
  });
  icon.addEventListener('mouseout', () => {
    icon.style.setProperty('--random-hover-color', '');
  });
});