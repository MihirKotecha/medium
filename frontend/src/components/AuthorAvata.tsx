const AuthorAvatar = ({ authorName }:{authorName:string} ) => {
    return (
        <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-500 rounded-full ">
            <span className="font-thin  text-white ">{authorName[0]}</span>
        </div>
    )
}

export default AuthorAvatar