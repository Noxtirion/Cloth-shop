import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey =
      "pk_test_51GuF5LA0JwOjNZfYbTR27EPDhEvgtgwhXwPx1xyF7Do1JaNWR0HZKvTfjgunL0khKlTWzFnkp9faUUtxkyNchecj00OkDvA7tn";

   const onToken = token => {
      console.log(token);
      alert("Payment Successful");
   };

   return (
      <StripeCheckout
         label="Pay Now"
         name="Cloth Shop"
         shippingAddress
         billingAddress
         image="https://svgshare.com/i/CUz.svg"
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel="Pay Now"
         token={onToken}
         stripeKey={publishableKey}
      />
   );
};

export default StripeCheckoutButton;
