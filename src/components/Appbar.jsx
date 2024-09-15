import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Appbar({ firstLetter }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      <div className="bg-black rounded-full w-12 h-12 flex justify-center items-center m-2.5">
        <p className="text-white text-2xl">{firstLetter.toUpperCase()}</p>
      </div>
      <div className="font-extrabold text-3xl m-2.5">PayTM</div>
      <Button
        onClick={() => {
          localStorage.removeItem("token");
          return navigate("/signin");
        }}
        label={"Log Out"}
      />
    </div>
  );
}

export default Appbar;
