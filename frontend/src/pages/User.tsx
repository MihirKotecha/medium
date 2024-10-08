import { useSelector } from "react-redux"
import AppBar from "../components/AppBar"
import { RootState } from "../utils/store/appstore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const User = () => {
  const userName = useSelector((store: RootState) => store.userDetails.userName);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userName) {
      alert("Please Log In Again!!");
      navigate("/");
    }
  },[userName]);

  return (
    <div className="grid grid-cols-1 justify-center items-center w-screen">
      <div className="my-6 w-full">
        <AppBar />
      </div>
      <div className="grid grid-cols-2 justify-center items-center w-full">
        <div>{userName}</div>
        <div>Ouiii</div>
      </div>
    </div>
  )
}

export default User
