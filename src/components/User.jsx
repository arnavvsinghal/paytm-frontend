import Button from "./Button";
import { useNavigate } from "react-router-dom";

function User({ user, loggedInUser }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-5 py-2.5">
      <div className="flex items-center">
        <div className="bg-black rounded-full w-9 h-9 flex justify-center items-center">
          <p className="text-white text-xl">{user.firstName[0]}</p>
        </div>
        <div className="text-xl pl-5">
          {user.firstName + " " + user.lastName}
        </div>
      </div>
      <Button
        onClick={() => {
          return navigate("/send",  { state : user});
        }}
        label={"Send Money"}
      />
    </div>
  );
}

export default User;
