import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSignUp } from "../../store/auth/thunkCreators";
import { replace, useNavigate } from "react-router-dom";
import Input from "./Input";
import Navigation from "./Navigation";
import Submit from "./SubmitBtn";
import Title from "./Title";

const RegisterPage = () => {
  const [formErrorMessage, setFormErrorMessage] = useState({});
  const { isLoading, isSignedUp } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (userDetails.password !== userDetails.confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    const { confirmPassword, ...registerDetails } = userDetails;

    dispatch(handleSignUp(registerDetails));
  };

  useEffect(() => {
    if (isSignedUp) {
      navigate("/auth/login", { replace: true });
    }
  }, [isSignedUp, navigate]);

  useEffect(() => {
    if (Object.keys(formErrorMessage).length) {
      const timer = setTimeout(() => {
        setFormErrorMessage({});
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formErrorMessage]);

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <div className="w-100 w-lg-75 mx-auto d-flex flex-column align-items-center justify-content-center px-4 py-5">
        <Navigation
          text="Already have an account?"
          push="auth/login"
          btnText="Login"
        />

        <form
          onSubmit={handleRegister}
          className="w-100"
          style={{ maxWidth: "600px", marginTop: "1.5rem" }}
        >
          <Title text="Create an account." />

          <div className="row g-3 mt-1">
            <div className="col-12 col-sm-6">
              <Input
                label="name"
                name="name"
                type="text"
                handle={handleInput}
                value={userDetails.name}
              />
            </div>

            <div className="col-12 col-sm-6">
              <Input
                label="email"
                name="email"
                type="email"
                handle={handleInput}
                value={userDetails.email}
              />
            </div>

            <div className="col-12 col-sm-6">
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control border-warning"
                  id="password"
                  name="password"
                  value={userDetails.password}
                  placeholder="Password"
                  onInput={handleInput}
                  required
                  minLength={6}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="form-floating">
                <input
                  type="password"
                  className={`form-control border-warning ${
                    formErrorMessage.confirmPassword ? "is-invalid" : ""
                  }`}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onInput={handleInput}
                  value={userDetails.confirmPassword}
                  required
                  minLength={6}
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                {formErrorMessage.confirmPassword && (
                  <div className="invalid-feedback">
                    {formErrorMessage.confirmPassword}
                  </div>
                )}
              </div>
            </div>

            <div className="col-12 mt-3">
              <Submit title="Register" loading={isLoading} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
