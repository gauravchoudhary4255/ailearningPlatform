import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notify } from "../utils/notify";
import  {authService}  from '../services/api/authService'
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
   const navigate =  useNavigate()
  const handleEmailLogin = (e : React.FormEvent<HTMLFormElement>) : void => {
    e.preventDefault();
  };

  const handleLogin = async ()=>{
    if(!otp || !email){
      notify.warning("Please Add email and Otp")
    }else{
      let data = {
       email,
       otp : Number(otp)
      }
     const apiData : any=  await authService.login(data);
     if(Number(apiData?.status) !== 200){
      notify.error(apiData?.data?.message || apiData?.data?.msg);
     }else{
      const token = apiData.data.data.tokenData.token
      localStorage.setItem("token", token);
      notify.success(apiData?.data?.message)
      navigate('/')
     }
    } 
  }
  const handleGoogleLogin = () => {
    console.log("Google Sign-In clicked");
    // TODO: integrate Google OAuth here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h2>

        {/* Google Sign-In */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>

        <div className="flex items-center mb-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Email + OTP Form */}
        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              OTP (use 9898 otp)
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter OTP"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={()=>{
              // navigate('/'),
              handleLogin()
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
