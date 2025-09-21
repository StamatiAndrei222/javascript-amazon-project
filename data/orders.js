export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
  console.log('Aici e orderu', order)
  console.log('item.deliveryOptionId:', item.deliveryOptionId);
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}