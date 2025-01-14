import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import {loadStripe} from '@stripe/stripe-js';
import {
    Elements,
  } from '@stripe/react-stripe-js';
import CheckoutFrom from "./CheckoutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
  return (
    <div>
      <SectionTitle heading={'Payment'} subHeading={'Plase pay to eat'}></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
            <CheckoutFrom/>
        </Elements>
      </div>
    </div>
  )
}

export default Payment
