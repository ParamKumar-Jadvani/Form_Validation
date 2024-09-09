import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LiveValidation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState("");

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const pswRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name !== "" && emailRegex.test(email) && pswRegex.test(password)) {
      toast.success("Form Submitted successFully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }
    toast.error("Please Check your Fields", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    form.reset();
    setName("");
    setEmail("");
    setPassword("");
  };

  const RedStyle = {
    border: "2px solid red",
    borderColor: "red",
    transition: "border-color 0.3s ease-out",
  };
  const GreenStyle = {
    border: "2px solid green",
    borderColor: "green",
    transition: "border-color 0.3s ease-out",
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} id="form">
          <div className="input-Div">
            <label>Name</label>
            <input
              type="text"
              style={{
                border: name !== "" ? "2px solid green" : "2px solid red",
                borderRadius: "5px",
                outline: "none",
              }}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-Div">
            <label>Email</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              style={{
                border: emailRegex.test(email)
                  ? "2px solid green"
                  : "2px solid red",
                borderRadius: "5px",
                outline: "none",
              }}
            />
          </div>
          <div className="input-Div">
            <label>Password</label>
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              style={{
                border: pswRegex.test(password)
                  ? "2px solid green"
                  : "2px solid red",
                borderRadius: "5px",
                outline: "none",
              }}
            />
          </div>
          <div id="submit-btn">
            <input type="submit" />
          </div>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default LiveValidation;
