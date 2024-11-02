import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
          .post("https://fsd-auth-backend-ejk8.onrender.com/api/auth/forgot-password", {email})
          .then((res) => {
            toast.success(res.data.message);
           navigate("/login")
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.response.data.message);
          });
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
        <button type="submit">Send</button>
      </form>
    </div>
    );
};

export default ForgotPassword;