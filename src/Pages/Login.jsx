import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    await axios
      .post("https://documenter.getpostman.com/view/39168872/2sAY4xAMnz/api/auth/login", payload)
      .then((res) => {
        toast.success(res.data.message);
        setToken(res.data.token)
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
    setEmail("");
    setPassword("");
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email Id"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"} password
          </button>
        </p>
        <br></br>
        <button type="submit">Login</button>
      </form>
      <br />
      <br />
      <button>
        <Link to={"/"}> Don't Have An Account ? Register</Link>
      </button>
      <br />
      <br />
      <br />
      <button class="green-400">
        <Link to={"/forgot-password"}>Forgot Password</Link>
      </button>
    </div>
  );
};

export default Login;
