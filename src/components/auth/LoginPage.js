import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleSignIn } from "../../store/auth/thunkCreators";
import Input from "./Input";
import Navigation from "./Navigation";
import Submit from "./SubmitBtn";
import Title from "./Title";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isSignedIn } = useSelector((state) => state.auth);

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const signIn = (e) => {
    e.preventDefault();
    dispatch(handleSignIn(userDetails));
  };

  useEffect(() => {
    if (isSignedIn) {
      navigate("/app/emails", { replace: true });
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="container-fluid min-vh-100 bg-white">
      <div className="d-flex flex-column justify-content-center row-gap-4 mt-5 px-2">
        <div>
          <Navigation
            text="Don't have an account yet?"
            push="auth/register"
            btnText="Create an account"
          />
        </div>

        <form
          onSubmit={signIn}
          className="mx-auto w-100 w-md-50 d-flex flex-column gap-3"
        >
          <Title text="Welcome!" />

          <Input
            ariaLabel="email"
            label="Email"
            name="email"
            type="text"
            handle={handleInput}
          />

          <div className="position-relative">
            <Input
              label="Password"
              ariaLabel="password"
              type="password"
              name="password"
              handle={handleInput}
            />
          </div>

          <Submit title="Login" loading={isLoading} />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
