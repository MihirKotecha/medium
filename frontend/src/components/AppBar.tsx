import { useNavigate } from "react-router-dom"
import AuthorAvatar from "./AuthorAvata"
import { useSelector } from "react-redux";
import { RootState } from "../utils/store/appstore";

const AppBar = () => {
  const userName = useSelector((store:RootState)=>store.userDetails.userName)
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/blogpost")
  }

  const handleUserPage = () => {
    navigate("/user")
  }
  return (
    <div className="flex justify-between px-12 pb-6 shadow-lg items-center">
      <div className="font-bold text-lg cursor-pointer" onClick={()=>{navigate("/blogs")}}>BlogIt</div>
      <div className="flex justify-center items-center">
        <button className="mr-10 w-20 h-8 rounded-2xl text-lg text-black bg-green-500" onClick={handleClick}>Post</button>
        <div onClick={handleUserPage}  className="cursor-pointer">
          <AuthorAvatar authorName={userName} />
        </div>
      </div>

    </div>
  )
}

export default AppBar
