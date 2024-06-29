import { Link } from "react-router-dom"
import Quote from "../components/Quote"
import { useState } from "react"
import { signUpType } from "@mihirkotecha/medium-project";
import FormInput from "../components/FormInput";


const Signup = () => {

  const [signupInputs, setSignUpInput] = useState<signUpType>({
    username: "",
    email: "",
    password: ""
  });

  return (
    <div className="grid grid-cols-1 h-screen justify-center items-center lg:grid-cols-2">
      <div className="flex justify-center flex-col items-center w-full h-screen">
        <div className="text-3xl font-bold ">Create an account</div>
        <div className="w-full flex justify-center items-center mt-2">
          <h1 className="text-slate-400">Already have an account?</h1>
          <Link to="/signin" className="ml-1 underline text-slate-400">Login</Link>
        </div>
          <FormInput isSignUpPage={true} currValues={signupInputs} setCurrValue={setSignUpInput} />
      </div>
      <div className="invisible lg:visible">
        <Quote />
      </div>
    </div>
  )
}

export default Signup