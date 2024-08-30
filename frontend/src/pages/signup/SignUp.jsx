import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox"
import { useState } from "react"
import   useSignup  from "../../hooks/useSignup"
const SignUp = () => {
  const [inputs,setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender:"",
  });

  const {loading,signup} = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs,gender});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(inputs);
   

  }
  return (
   <div className="flex flex-col items-center min-w-96 mx-auto shadow-2xl">
      <div className="w-[20rem] md:w-full p-6 founded-lg shadow-2xl bg-red-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <div className="flex flex-col items-center mb-4">
          <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path>
            <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom" fill="#312ECB"></path>
          </svg>
          <h1 className="text-3xl font-bold text-center text-blue-600 mt-2">
            SignUp<span className="text-blue-800">ChatApp</span>
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base text-white label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter FullName"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base text-white label-text">UserName</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={inputs.userName}
              onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
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
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base text-white label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>
          <GenderCheckbox className="text-white" onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
          <Link to="/login" className="text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block">
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 border text-white shadow-2xl border-slate-700"disabled={loading}>
              {loading ?<span className="loading loading-spinner"></span>:"SignUp"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;