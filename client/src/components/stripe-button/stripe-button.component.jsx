import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_CHDejyKR4pkwhHZHfgvKn7c700IDntZLnc';

  const onToken = (token) => {
    axios({
      url    : 'payment',
      method : 'post',
      data   : {
        amount : priceForStripe,
        token
      }
    })
      .then((response) => {
        console.log('Payment successful: ', response);
        alert('Payment Successful');
      })
      .catch((error) => {
        console.log('Payment error: ', error);
        alert(
          'There was an error with your payment. Please be sure to use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
