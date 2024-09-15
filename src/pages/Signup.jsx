import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.token) {
      return navigate("/dashboard");
    }
  }, []);

  let firstName = "";
  let lastName = "";
  let username = "";
  let password = "";

  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg flex flex-col items-center px-8 py-12 border">
        <Heading label={"Sign Up"} />
        <SubHeading label={"Enter your information to create an account"} />
        <InputBox
          onChange={(e) => {
            // setFirstName(e.target.value);
            firstName = e.target.value;
          }}
          label={"First Name"}
          placeholder={"John"}
        />
        <InputBox
          onChange={(e) => {
            // setLastName(e.target.value);
            lastName = e.target.value;
          }}
          label={"Last Name"}
          placeholder={"Doe"}
        />
        <InputBox
          onChange={(e) => {
            // setUsername(e.target.value);
            username = e.target.value;
          }}
          label={"Email"}
          placeholder={"johndoe@gmail.com"}
        />
        <InputBox
          onChange={(e) => {
            password = e.target.value;
            // setPassword(e.target.value);
          }}
          label={"Password"}
          placeholder={"********"}
        />
        <Button
          onClick={async () => {
            try {
              const response = await axios.post(
                "https://paytm-backend-production.up.railway.app/api/v1/user/signup",
                {
                  firstName,
                  lastName,
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
          label={"Sign Up"}
        />
        <BottomWarning
          label={"Already have an account?"}
          buttonText={"Sign in!"}
          to={"/signin"}
        />
      </div>
    </div>
  );
}

export default Signup;
