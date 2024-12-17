import React from "react";

const BarUsers: React.FC = () => {
  const users = [
    {
      id: 1,
      image: "https://github.com/shadcn.png",
      fullName: "Himanshu Chuchra",
      lastMessage: "This is my last message where the chat was ended.",
      messageTime: "10:24 AM",
      isPinned: false,
    },
    {
      id: 2,
      image: "https://github.com/shadcn.png",
      fullName: "Satyam Chuchra",
      lastMessage: "This is my last message where the chat was ended.",
      messageTime: "10:24 AM",
      isPinned: true,
    },
  ];

  return (
    <div className="h-full pt-[6px]">
      {users &&
        users.length > 0 &&
        users.map((user) => (
          <div
            key={user.id}
            className="flex justify-between px-3 py-[10px] hover:bg-base-border transition-all duration-300 ease-in-out cursor-pointer">
            <div className="flex gap-2 items-center w-[80%]">
              <img
                src={user.image}
                alt="User"
                className="h-11 w-11 rounded-full object-cover"
              />
              <div className="flex flex-col gap-0">
                <p className="font-medium">{user.fullName}</p>
                <p className="text-[13px] line-clamp-1">{user.lastMessage}</p>
              </div>
            </div>
            <div className="flex flex-col justify-start pt-[2px] gap-[6px]">
              <p className="text-[10px] font-medium opacity-75 self-end">
                {user.messageTime}
              </p>
              <div className="self-end bg-action-button h-5 w-5 flex items-center justify-center rounded-full opacity-70">
                <p className="text-[14px] font-medium -ml-[1px] text-white">
                  1
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BarUsers;
