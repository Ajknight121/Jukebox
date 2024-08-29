import React from "react";
import { useState } from "react";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSignup) {
      signin(formData)
    } else {
      isSignup(formData)
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // TODO check out react router forms
  return (
    <div className="min-h-screen w-full flex-grow flex flex-col items-center gap-2 text-white bg-neutral-800">
      <div className="avatar"></div>
      <div className="user-form">
        {isSignup ? "Sign Up" : "Sign In"}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <input
                name="firstName"
                type="text"
                className="text-black px-1 block w-full text-base max-w-[480px]"
                value={formData.firstName}
                placeholder="First Name"
                onChange={handleChange}
              />
              <input
                name="lastName"
                type="text"
                className="text-black px-1 block w-full text-base max-w-[480px]"
                value={formData.lastName}
                placeholder="Last Name"
                onChange={handleChange}
              />
            </>
          )}
          <input
            name="email"
            type="text"
            className="text-black px-1 block w-full text-base max-w-[480px]"
            value={formData.email}
            placeholder="UIC email"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            className="text-black px-1 block w-full text-base max-w-[480px]"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
          />
          {isSignup && (
            <input
              name="passwordConfirm"
              type="password"
              className="text-black px-1 block w-full text-base max-w-[480px]"
              value={formData.passwordConfirm}
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          )}
          <div className="flex flex-col">
            <button type="submit">{isSignup ? "Sign Up" : "Sign In"}</button>
            <button
              className="swap-mode"
              onClick={() => setIsSignup((prev) => !prev)}
            >
              {isSignup
                ? "Already have and account? Sign In"
                : "Don't have an account? Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
