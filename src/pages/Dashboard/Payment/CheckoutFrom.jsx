import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutFrom = () => {
    const stripe = useStripe()
    const elements = useElements()
    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)

        if(card === null){
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('payment error', error);
            
        }else{
            console.log('payment method', paymentMethod)
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-md btn-primary my-4" type="submit" disabled={!stripe}>
        Pay
      </button>

    </form>
  )
}

export default CheckoutFrom
