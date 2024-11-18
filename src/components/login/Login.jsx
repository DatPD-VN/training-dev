import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [hidden, setHidden] = useState(true);
  const [errMsgEmail, setErrMsgEmail] = useState("");
  const [errMsgPassword, setErrMsgPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);

  const onChangeHandler = (e) => {
    let tmpLogin = { ...loginData };
    tmpLogin[e.target.name] = e.target.value;
    setLoginData(tmpLogin);
  };

  const onSubmitHandler = () => {
    sessionStorage.setItem("isLoggedIn", true);
    var formdata = new FormData();
    formdata.append("email", loginData.email);
    formdata.append("password", loginData.password);

    var requestOptions = {
      method: "POST",
      body: formdata,
    };
    // fetch(
    //   `${process.env.REACT_APP_API_URL}/api/user/login`,
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) => {
    //     if(result.status === 'success'){

    //       setAccessToken(result.token)
    //       sessionStorage.setItem('token', result.token)
    //       sessionStorage.setItem('userName', loginData.email)
    //       sessionStorage.setItem('isLoggedIn', true)
    //     }
    // if(result.status === 'failed'){
    //   setErrMsg(result.message)
    // }
    // if(result.status === "error"){
    //   setError(true);
    //   setErrMsgEmail(result.validation_errors.email[0]);
    //   setErrMsgPassword(result.validation_errors.password[0]);
    // }
    // if(result.error === false){
    //   setRedirect(true);
    // }
    //   })
    //   .catch((error) => {
    //     console.log("errro",error);
    //   });
  };

  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  if (redirect) {
    return navigate("/todo");
  }

  if (isLoggedIn) {
    return navigate("/todo");
  }

  return (
    <Container className="themed-container mt-2" fluid="sm">
      <div>
        <div>
          <div className=" flex flex-col items-center text-orange-500 mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <div className=" text-orange-500 ">Signin</div>
            <div className="hr"></div>
          </div>
          <div className=" w-[85%] mx-auto my-0 mt-[5%] space-y-4 ">
            <TextField
              error={error}
              helperText={loginData.email === "" ? error : errMsgEmail}
              label="Email"
              type="text"
              name="email"
              fullWidth
              variant="outlined"
              value={loginData.email}
              onChange={onChangeHandler}
            />
            <div className="relative">
              <TextField
                error={error}
                helperText={loginData.password === "" ? error : errMsgPassword}
                label="Password"
                name="password"
                type={hidden ? "password" : "text"}
                fullWidth
                variant="outlined"
                value={loginData.password}
                onChange={onChangeHandler}
              />
            </div>
            <p className="text-red-500">{errMsg}</p>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              onClick={onSubmitHandler}
              disabled={!loginData.email || !loginData.password}
            >
              SIGN IN
            </Button>
            <p to="/sign-up" className=" text-yellow-500 text-right text-xs mt-[-30px] ">
              Don't have an Account to Signin?{" "}
              <Link to="/" className="signup-txt font-bold text-yellow-500  ">
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
