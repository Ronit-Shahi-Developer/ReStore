import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { setBasket } from "../basket/basketSlice";
import { useAppDispatch } from "../../app/store/configureStore";
import LoadingComponent from "../../app/layout/LoadingComponent";

const stripePromise = loadStripe('pk_test_51OKw04Jw0crLz5a9h70OAENfB4AXaa8WgOhw4jYVCw0VRN9C1pxJg7mmjLhMatgONWmM3fz86SPtx4cOIPCmuweU00KXYXUXc0');

export default function CheckoutWrapper() {

    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Payments.createpaymentIntent()
            .then(basket => dispatch(setBasket(basket)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [dispatch]);

    if(loading) return <LoadingComponent message="Loading checkout..." />
    return (
        <Elements stripe={stripePromise}>
            <CheckoutPage />
        </Elements>
    )
}