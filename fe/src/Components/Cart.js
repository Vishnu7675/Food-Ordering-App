import React from 'react';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Burger', price: 5.99, quantity: 2 },
    { id: 2, name: 'Pizza', price: 9.99, quantity: 1 },
    { id: 3, name: 'Pasta', price: 7.99, quantity: 3 },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h2>Your Cart</h2>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.name}</h5>
                  <p>Price: ₹{item.price.toFixed(2)} x {item.quantity}</p>
                </div>
                <div>
                  <button className="btn btn-outline-primary btn-sm me-2">-</button>
                  {item.quantity}
                  <button className="btn btn-outline-primary btn-sm ms-2">+</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h4>Order Summary</h4>
              <ul className="list-group list-group-flush">
                {cartItems.map((item) => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between">
                    <span>{item.name} x {item.quantity}</span>
                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between">
                  <strong>Total</strong>
                  <strong>₹{calculateTotal()}</strong>
                </li>
              </ul>
              <button className="btn btn-success mt-3 w-100">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
