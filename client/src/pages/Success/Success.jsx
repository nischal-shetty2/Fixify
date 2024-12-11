import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosFetch } from "../../utils";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms";
import "./Success.scss";

const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");
  const user = useRecoilValue(userState);

  useEffect(() => {
    (async () => {
      try {
        setTimeout(() => {
          navigate("/orders");
        }, 2000);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    })();
  }, []);

  return (
    <div className="pay-message text-xl">
      Payment <strong className=" text-[#1dbf73] ml-2"> successful</strong>. You are
      being redirected to the orders page. Please do not close the page
    </div>
  );
};

export default Success;
