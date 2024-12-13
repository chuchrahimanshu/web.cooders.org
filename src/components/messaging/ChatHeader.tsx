import React from 'react'

const ChatHeader: React.FC = () => {
  const user = {
    id: 1,
    image: "https://github.com/shadcn.png",
    fullName: "Himanshu Chuchra",
    username: "@himanshuchuchra",
    messageTime: "10:24 AM",
    isPinned: false,
  };

  return (
    <>
      {user &&
        <div
          key={user.id}
          className="h-[75px] border-b border-b-base-border flex justify-between px-3 py-[10px] hover:bg-base-border transition-all duration-300 ease-in-out cursor-pointer">
          <div className="flex gap-2 items-center w-[80%]">
            <img
              src={user.image}
              alt="User"
              className="h-11 w-11 rounded-full object-cover"
            />
            <div className="flex flex-col gap-0">
              <p className="text-[17px] font-medium line-clamp-1">{user.fullName}</p>
              <p className="text-[14px] opacity-70 line-clamp-1">{user.username}</p>
            </div>
          </div>
          
        </div>
      }
    </>
  )
}

export default ChatHeader