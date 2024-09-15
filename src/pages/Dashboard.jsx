import { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [user, setUser] = useState({
    firstName: "Arnav",
  });
  const navigate = useNavigate();

  useEffect(() => {
    async function useEffectAsync() {
      if (!localStorage.token) {
        return navigate("/signin");
      }
      try {
        const response = await axios.get(
          "https://paytm-backend-production.up.railway.app/api/v1/user/about",
          {
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
            },
          }
        );
        setUser(response.data);
      } catch (err) {
        localStorage.removeItem("token");
        navigate("/signin");
      }
    }
    useEffectAsync();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-between p-2">
      <Appbar firstLetter={user.firstName[0]} />
      <Balance />
      <Users loggenInUser={user} />
    </div>
  );
}

export default Dashboard;
