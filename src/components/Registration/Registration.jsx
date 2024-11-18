import React, { useState } from "react";
// import { TextField, Button } from "@material-ui/core";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { LockKeyhole } from 'lucide-react';
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';





const Registration = () => {
  const [signupData, setSignupData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    full_name: "",
  });

  const [hidden, setHidden] = useState(true);
  const [errMsgFirstName, setErrMsgFistName] = useState("");
  const [errMsgLastName, setErrMsgLastName] = useState("");
  const [errMsgPhone, setErrMsgPhone] = useState("");
  const [errMsgEmail, setErrMsgEmail] = useState("");
  const [errMsgPassword, setErrMsgPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState(false);

  const toggleShow = () => {
    setHidden(!hidden);
  }

  const onChangeHandler = (e, key) => {
    let tmpSignup = { ...signupData };
    tmpSignup[e.target.name] = e.target.value.trim();
    setSignupData(tmpSignup);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("first_name", signupData.first_name);
    formdata.append("last_name", signupData.last_name);
    formdata.append("email", signupData.email);
    formdata.append("password", signupData.password);
    formdata.append("phone", signupData.phone);

    var requestOptions = {
      method: "POST",
      body: formdata,
    };
    fetch(
      `${process.env.REACT_APP_API_URL}/api/user/register`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "success") {
          setSignupData({
            first_name: "",
            last_name: "",
            password: "",
            email: "",
            phone: "",
          });
          setErrMsgFistName("");
          setErrMsgLastName("");
          setErrMsgPhone("");
          setErrMsgEmail("");
          setSuccessMsg("");
          setErrMsgPassword("");
          setError(false);

        }
        setTimeout(() => {
          setSuccessMsg(result.message);
        }, 1000);
        if (result.status === "error" && result.validation_errors.first_name) {
          setError(true);
          setErrMsgFistName(result.validation_errors.first_name[0]);
        }
        if (result.status === "error" && result.validation_errors.last_name) {
          setError(true);
          setErrMsgLastName(result.validation_errors.last_name[0]);
        }
        if (result.status === "error" && result.validation_errors.phone) {
          setError(true);
          setErrMsgPhone(result.validation_errors.phone[0]);
        }
        if (result.status === "error" && result.validation_errors.email) {
          setError(true);
          setErrMsgEmail(result.validation_errors.email[0]);
        }
        if (result.status === "error" && result.validation_errors.password) {
          setError(true);
          setErrMsgPassword(result.validation_errors.password[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="themed-container mt-2" fluid="sm">
      <div className="flex flex-col items-center text-orange-500 mt-10 ">
      <LockKeyhole  />
        <div className="text-orange-500">Signup</div>
        <div className="hr"></div>
      </div>
      <div >
        <div className="flex  justify-center items-center space-x-5 mb-5 w-[85%] mx-auto my-0 mt-[5%]">
          <div className="flex-1">
            <TextField
              error={error}
              name="first_name"
              label="First Name"
              fullWidth
              // hintText="Phone"
              color="primary"
              variant="outlined"
              value={signupData.first_name}
              onChange={onChangeHandler}
              autoFocus
              helperText={errMsgFirstName}
            />
          </div>
          <div className="flex-1">
            <TextField
              error={error}
              name="last_name"
              label="Last Name"
              color="primary"
              variant="outlined"
              value={signupData.last_name}
              onChange={onChangeHandler}
              fullWidth
              helperText={errMsgLastName}
            />
          </div>
        </div>
        <div className="w-[85%] mx-auto my-0 mt-[5%] space-y-4">
          <TextField
            error={error}
            name="phone"
            label="Phone"
            type="number"
            fullWidth
            variant="outlined"
            value={signupData.phone}
            onChange={onChangeHandler}
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 10);
            }}
            min={0}
            helperText={errMsgPhone}
          />
          <TextField
            error={error}
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={signupData.email}
            onChange={onChangeHandler}
            helperText={errMsgEmail}
          />
          <div className="relative ">
            <TextField
              error={error}
              name="password"
              label="Password"
              // type={hidden ? "password" : "text"}
              fullWidth
              variant="outlined"
              value={signupData.password}
              onChange={onChangeHandler}
              helperText={errMsgPassword}
            />
          </div>
          <div className="alert alert-success">{successMsg}</div>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={onSubmitHandler}
          >
            SIGN UP
          </Button>
          <p className="text-xs  ml-5 text-yellow-500 text-right mt-[-30px]">
            Already have an account?
            <Link to="/login" className=" text-yellow-500 font-bold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Registration;