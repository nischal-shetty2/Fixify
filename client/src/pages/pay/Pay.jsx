import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosFetch } from "../../utils";
import "./Pay.scss";
import RazorpayCheckout from "../../components/CheckoutForm/CheckoutForm";

const Pay = () => {
  const { _id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosFetch.post(
          `/orders/create-payment-intent/${_id}`
        );

        setOrderDetails(data);
      } catch ({ response }) {
        console.log(response);
      }
    })();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pay mt-16">
      <h2 className=" text-2xl">Pay Securely with Razorpay</h2>
      {orderDetails && <RazorpayCheckout orderDetails={orderDetails} />}
    </div>
  );
};

export default Pay;
