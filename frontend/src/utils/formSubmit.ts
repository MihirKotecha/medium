import axios from "axios"


interface currValuesType {
    username: string,
    password: string,
    email?: string
}


export const formSubmit = async(isSignUp:Boolean,currValues:currValuesType) => {
    console.log(currValues)
    if(isSignUp){
        const token = await axios.post("https://backend.mihir-k1.workers.dev/api/v1/user/signup",currValues)
        localStorage.setItem("token",token.data);
    }else{
        const token = await axios.post("https://backend.mihir-k1.workers.dev/api/v1/user/signin",currValues)
        localStorage.setItem("token",token.data);
    }
}