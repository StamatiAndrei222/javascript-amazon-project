import { calculateCartQuantity } from '../../data/cart.js';

export function updateCartQuantity() {
  const cartQuantity = calculateCartQuantity();

  // Badge-ul din header
  const badge = document.querySelector('.cart-quantity');
  if (badge) {
    badge.innerHTML = cartQuantity;
  }

  // Textul din checkout (dacă există)
  const checkoutHeader = document.querySelector('.js-checkout-header-middle-section');
  if (checkoutHeader) {
    checkoutHeader.innerHTML = `Checkout (${cartQuantity})`;
  }
}