import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Signin() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.token) {
      return navigate("/dashboard");
    }
  }, []);

  let username = "";
  let password = "";

  return (
    <div>
      <div className="bg-[#7F7F7F] h-screen flex justify-center items-center">
        <div className="bg-white rounded-lg flex flex-col items-center px-6 py-9 border">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            onChange={(e) => {
              username = e.target.value;
            }}
            label={"Email"}
            placeholder={"johndoe@gmail.com"}
          />
          <InputBox
            onChange={(e) => {
              password = e.target.value;
            }}
            label={"Password"}
            placeholder={"********"}
          />
          <Button
            onClick={async () => {
              try {
                const response = await axios.post(
                  "https://paytm-backend-production.up.railway.app/api/v1/user/signin",
                  {
                    username,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                return navigate("/dashboard");
              } catch (err) {
                const errPath = err.response.data.issues;
                if (errPath) {
                  alert(errPath[0].path + " : " + errPath[0].message);
                } else {
                  alert(err.response.data);
                }
              }
            }}
            label={"Sign In"}
          />
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up!"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;
