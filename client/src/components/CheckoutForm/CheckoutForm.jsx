import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosFetch } from "../../utils";
import "./CheckoutForm.scss";

const RazorpayCheckout = ({ orderDetails }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState(10);
  const { _id } = useParams();

  useEffect(() => {
    async function getAmount() {
      const { data } = await axiosFetch.get(`/gigs/single/${_id}`);
      setAmount(data.price * 100);
    }
    getAmount();
  }, []);

  const handlePayment = () => {
    setIsLoading(true);
    setError(null);

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: amount,
      currency: "INR",
      name: "Fixify",
      description: "Payment for Order",
      order_id: orderDetails.razorpayOrderId,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGFT9HG9p0mc0utpf7p1X0RAvnafonnLEfQ&s",
      handler: async (response) => {
        try {
          const { data } = await axiosFetch.patch("/orders/", {
            payment_intent: orderDetails.razorpay_order_id,
            orderId: orderDetails._id,
          });

          // Payment successful
          navigate("/success");
        } catch (error) {
          console.error(error);
          setError("Payment verification failed");
          setIsLoading(false);
        }
      },
      prefill: {
        email: orderDetails.email || "",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", (response) => {
      setError("Payment failed: " + response.error.description);
      setIsLoading(false);
    });
    rzp.open();
  };

  return (
    <div className="payment-form">
      <button onClick={handlePayment} disabled={isLoading} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>

      {error && (
        <div id="payment-message" className="error">
          {error}
        </div>
      )}
    </div>
  );
};

export default RazorpayCheckout;
