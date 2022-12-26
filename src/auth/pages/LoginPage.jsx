import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = (e) => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <button onClick={onLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default LoginPage;
