import { Link } from "react-router-dom"
import Quote from "../components/Quote"
import { useState } from "react"
import { signUpType } from "@mihirkotecha/medium-project";
import FormInput from "../components/FormInput";


const Signin = () => {
  const [signinInputs, setSignInInput] = useState<signUpType>({
    username: "",
    email: "",
    password: ""
  });

  return (
    <div className="grid grid-cols-1 h-screen justify-center items-center lg:grid-cols-2">
      <div className="invisible lg:visible">
        <Quote />
      </div>
      <div className="flex justify-center flex-col items-center w-full h-screen">
        <div className="text-3xl font-bold ">Log In to your account</div>
        <div className="w-full flex justify-center items-center mt-2">
          <h1 className="text-slate-400">Don't have an account?</h1>
          <Link to="/signup" className="ml-1 underline text-slate-400">Sign Up</Link>
        </div>
        <FormInput isSignUpPage={false} currValues={signinInputs} setCurrValue={setSignInInput} />
      </div>
    </div>
  )
}

export default Signin