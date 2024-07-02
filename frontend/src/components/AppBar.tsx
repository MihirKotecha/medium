import AuthorAvatar from "./AuthorAvata"

const AppBar = () => {
  return (
    <div className="flex justify-between px-12 pb-6 shadow-lg ">
        <div className="font-bold text-lg">BlogIt</div>
        <div>
            <AuthorAvatar authorName="Mihir"/>
        </div>
        
    </div>
  )
}

export default AppBar
