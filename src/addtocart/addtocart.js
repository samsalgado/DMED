import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';

// Replace with your actual Stripe publishable key (from environment variables)
const REACT_APP_STRIPE_PUBLISHABLE_KEY = 'pk_live_51PTcBaLMNjybuRkpvJ5iJ6WUESTrDzxro9uRUL16zbXtIkw3cXgyfo6bkhVGOXZV71sYEQswQ7j6X9gdIlc7QAQO00g4EqxImR';

const AddtoCart = () => {
const [name, setName] = useState('');
const [practice, setPractice] = useState('');
const [bitcoinAddress, setBitcoinAddress] = useState('');
const [stripePromise, setStripePromise] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Waiting for Stripe.js to load asynchronously
    const stripe = await stripePromise;

    // Get a reference to the CardElement
    const cardElement = stripe.elements().getElement(CardElement);
    const userData = {
      name,
      practice,
      paymentType: bitcoinAddress ? 'Bitcoin' : 'Card',
      ...(bitcoinAddress && { bitcoinAddress }), // Include address if provided
    };
    // Create a PaymentIntent on your server (explained later)
    const paymentIntentResponse = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 100 }),  // Replace with your actual amount
    });
    const paymentIntent = await paymentIntentResponse.json();

    // Use Stripe.js to confirm the payment
    const { paymentError, paymentIntentClientSecret } = await stripe.confirmCardPayment(
      paymentIntent.client_secret,
      {
        payment_method: {
          card: cardElement,
        },
      }
    );

    if (paymentError) {
      // Handle payment errors
      console.error('Payment error:', paymentError);
    } else {
      // Payment successful!
      console.log('Payment successful:', paymentIntentClientSecret);
    }
  };

  useEffect(() => {
    // Load Stripe.js asynchronously
    const initializeStripe = async () => {
      const stripePromise = loadStripe(REACT_APP_STRIPE_PUBLISHABLE_KEY);
      setStripePromise(stripePromise);
    };

    initializeStripe();
  }, []);

  return (
    <div>
      {/* Replace with your product information and quantity selection */}
      <h4>Join the Coalition</h4>
      <p>Initial Payment of $100 [0.0017 BTC] (BTC Preferred). Coalition members get access to Databases, Admin privileges in both Applications, and Telehealth Directory. Buy now and join the Coalition, a subscription fee and price increase is coming soon!</p>
      {/* Consider adding a price display here */}
      {stripePromise && (
        <Elements stripe={stripePromise}>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Medical Practice" value={practice} onChange={(e) => setPractice(e.target.value)} />
            <input type="text" placeholder="Bitcoin Address (Optional)" value={bitcoinAddress} onChange={(e) => setBitcoinAddress(e.target.value)} />
            <CardElement options={{}} />
            <button type="submit">Pay Now</button>
          </form>
        </Elements>
      )}
    </div>
  );
};

export default AddtoCart;