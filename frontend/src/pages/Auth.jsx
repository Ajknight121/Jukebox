import React from 'react'
import { useState } from 'react';
import { googleLogin }
export default function Auth() {

  const [isSignup, setIsSignup] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    LastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // TODO check out react router forms
  return (
    <div className='min-h-screen w-full flex-grow flex flex-col items-center gap-2 text-white bg-neutral-800'>
      <div className='avatar'>

      </div>
      <div className='user-form'>
        {isSignup ? "Sign Up" : "Sign In"}
        <form onSubmit={handleSubmit}>
          { isSignup && (
            <>
              <input
              type="text"
              className="text-black px-1 block w-full text-base max-w-[480px]"
              value={formData.firstName}
              placeholder="First Name"
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value})}
            />
            <input
              type="text"
              className="text-black px-1 block w-full text-base max-w-[480px]"
              value={formData.lastName}
              placeholder="Last Name"
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value})}
              />
            </>
          )}
          <input
              type="text"
              className="text-black px-1 block w-full text-base max-w-[480px]"
              value={formData.email}
              placeholder="UIC email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value})}
            />
            <input
              type="password"
              className="text-black px-1 block w-full text-base max-w-[480px]"
              value={formData.password}
              placeholder="Password"
              onChange={(e) => setFormData({ ...formData, password: e.target.value})}
            />
            { isSignup && <input
              type="password"
              className="text-black px-1 block w-full text-base max-w-[480px]"
              value={formData.passwordConfirm}
              placeholder="Confirm Password"
              onChange={(e) => setFormData({ ...formData, passwordConfirm: e.target.value})}
            />}
            <div className='flex flex-col'>
              <button type='submit'>
                {isSignup ? "Sign Up" : "Sign In"}
              </button>
              <button className='swap-mode' onClick={() => setIsSignup((prev) => !prev)}>
                {isSignup ? "Already have and account? Sign In" : "Don't have an account? Sign Up"}
              </button>
            </div>
        </form>
      </div>
    </div>
  )
}
