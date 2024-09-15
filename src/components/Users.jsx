import { useEffect, useState } from "react";
import InputBox from "./InputBox";
import User from "./User";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Users({ loggedInUser }) {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function useEffectAsync() {
      if (!localStorage.token) {
        return navigate("/signin");
      }
      try {
        const response = await axios.get(
          "https://paytm-backend-production.up.railway.app/api/v1/user/bulk",
          {
            params: {
              filter: filter,
            },
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
            },
          }
        );
        setUsers(response.data.users);
      } catch (err) {
        localStorage.removeItem("token");
        navigate("/signin");
      }
    }
    useEffectAsync();
  }, [filter]);

  return (
    <div className="">
      <p className="px-2.5 text-lg font-bold">Users</p>
      <InputBox
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        label={""}
        placeholder={"Search Users"}
      />
      <div className="h-[60vh] overflow-y-scroll mt-5 pt-2.5">
        <div>
          {users.map((user) => (
            <User user={user} loggedInUser={loggedInUser} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Users;
