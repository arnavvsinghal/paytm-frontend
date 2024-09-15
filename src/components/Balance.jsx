import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Balance() {
  const [balance, setBalance] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function useEffectAsync() {
      if (!localStorage.token) {
        return navigate("/signin");
      }
      try {
        const response = await axios.get(
          "https://paytm-backend-production.up.railway.app/api/v1/account/balance",
          {
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
            },
          }
        );
        setBalance(response.data.balance);
      } catch (err) {
        localStorage.removeItem("token");
        navigate("/signin");
      }
    }
    useEffectAsync();
  }, []);
  return (
    <div className="font-semibold m-2.5 text-2xl">
      Your Balance is Rs {balance}.
    </div>
  );
}

export default Balance;
