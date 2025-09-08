import { loadProductsFetch } from '../data/products.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';
import { loadCartFetch } from '../data/cart.js';
import { Car, car1, car2 } from '../data/car.js';
import { RaceCar } from '../data/racecar.js';


async function loadPage() {
  try {
    await Promise.all([
      await loadProductsFetch(),
      await loadCartFetch()
    ])
    
  } catch (error) {
    console.log('Unexpected error.')
  }

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();

}
loadPage();

/*
const raceCar = new RaceCar('McLaren', 'F1', 20);
raceCar.go();
raceCar.displayInfo();
raceCar.go();
raceCar.displayInfo();
*/

/*
Promise.all([
    //resolve a function that lets us control when to go to the next step
    loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
//resolve a function that lets us control when to go to the next step
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });

}).then((value) => {
  console.log(value);

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });
  
}).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
//a function without name
loadProducts(() => {
  loadCart(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
