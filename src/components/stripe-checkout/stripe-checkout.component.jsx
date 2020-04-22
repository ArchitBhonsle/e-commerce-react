import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = (token) => {
  console.log(token);
  alert('Payment Successful');
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_CHDejyKR4pkwhHZHfgvKn7c700IDntZLnc';

  return (
    <StripeCheckout
      label='Pay Now'
      name='e-commerce react'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      token={onToken}
      currency='USD'
      amount={priceForStripe}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
