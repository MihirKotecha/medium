import { useNavigate } from "react-router-dom"
import { formSubmit } from "../utils/formSubmit"

interface currValuesType {
    username: string,
    password: string,
    email?: string
}

interface inputType {
    isSignUpPage: boolean,
    currValues: currValuesType,
    setCurrValue: Function,
}

const FormInput = ({ isSignUpPage, currValues, setCurrValue }: inputType) => {

    const navigate = useNavigate()

    const handleClick = async () => {
        await formSubmit(isSignUpPage, currValues);
        navigate("/blogs");
    }

    return (
        <div className="flex justify-center items-center w-1/2 mt-4">
            <div className="flex flex-wrap w-full">

                <div className="mb-2 font-bold text-gray-900 w-full">Username</div>
                <input type="text" id="first_name" className="placeholder-slate-500 bg-gray-50 border border-gray-300 text-slate-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter Your Username"
                    onChange={(e) => {
                        setCurrValue({
                            ...currValues,
                            username: e.target.value
                        })
                    }}
                    required />

                <div className="mb-2 mt-2 font-bold text-gray-900 w-full">Password</div>
                <input type="password" id="first_name" className="placeholder-slate-500 bg-gray-50 border border-gray-300 text-slate-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your password"
                    onChange={(e) => {
                        setCurrValue({
                            ...currValues,
                            password: e.target.value
                        })
                    }}
                    required />
                {isSignUpPage && <div className="mb-2 mt-2 font-bold text-gray-900 w-full">Email</div>}
                {isSignUpPage && <input type="password" id="first_name" className="placeholder-slate-500 bg-gray-50 border border-gray-300 text-slate-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your email"
                    onChange={(e) => {
                        setCurrValue({
                            ...currValues,
                            email: e.target.value
                        })
                    }}
                    required />
                }

                <button type="button" className="mt-6 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2" onClick={handleClick}>Submit</button>

            </div>
        </div>
    )
}

export default FormInput