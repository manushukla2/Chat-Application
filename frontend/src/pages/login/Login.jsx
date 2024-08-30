import { useState } from "react";
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const [userName, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const {loading, login} = useLogin();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await login(userName,password);

  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto shadow-2xl">
      <div className="w-[20rem] md:w-full p-6 rounded-lg shadow-md bg-red-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <div className="flex flex-col items-center mb-4">
          <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path>
            <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom" fill="#312ECB"></path>
          </svg>
          <h1 className="text-3xl font-bold text-center text-blue-600 mt-2">
            Login<span className="text-blue-900">ChatApp</span>
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base text-white label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base text-white label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/signup" className="text-sm hover:underline text-white hover:text-blue-600 mt-2 inline-block">
            {"Don't"} have an account?
          </Link>
          <div>
            <button className="btn btn-block text-white btn-sm mt-2" 
            disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;