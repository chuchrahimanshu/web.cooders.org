import React from "react";
import AVATAR from "../../assets/images/USER_LOGO.jpg";
import { MdPersonAdd } from "react-icons/md";

const Community: React.FC = () => {
  const users = [
    {
      firstName: "Alice",
      lastName: "Johnson",
      username: "alice_dev",
      avatar: AVATAR,
    },
    {
      firstName: "Bob",
      lastName: "Smith",
      username: "bob.codes",
      avatar: AVATAR,
    },
    {
      firstName: "Clara",
      lastName: "Lee",
      username: "clarabyte",
      avatar: AVATAR,
    },
    {
      firstName: "David",
      lastName: "Kim",
      username: "davidk",
      avatar: AVATAR,
    },
    {
      firstName: "Ella",
      lastName: "Patel",
      username: "ellap_ux",
      avatar: AVATAR,
    },
    {
      firstName: "Frank",
      lastName: "Wong",
      username: "frank.io",
      avatar: AVATAR,
    },
    {
      firstName: "Grace",
      lastName: "Martinez",
      username: "grace.codes",
      avatar: AVATAR,
    },
    {
      firstName: "Henry",
      lastName: "Nguyen",
      username: "hn_dev",
      avatar: AVATAR,
    },
  ];

  return (
    <section className="flex justify-between">
      <p>Community</p>
      {users && users.length > 0 && (
        <section className="w-[240px] bg-primary-overlay rounded-[10px]">
          <div className="flex items-center justify-between py-[10px] px-3 text-sm font-semibold text-white/60 border-b-2 border-b-primary-divider">
            <p>Suggestions</p>
            <p className="hover:text-palette-sky cursor-pointer ease-in-out duration-200">
              See all
            </p>
          </div>
          <div className="h-[225px] overflow-y-scroll hide-scrollbar my-1">
            {users.map((user) => (
              <section className="flex justify-between items-center px-3 hover:bg-secondary-overlay p-2 ease-in-out duration-300 cursor-pointer rounded-[10px] mx-1">
                <div className="flex gap-2 items-center">
                  <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-white/60">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-[12px] font-medium text-white/60">
                      @{user.username}
                    </p>
                  </div>
                </div>
                <MdPersonAdd size={22} className="mr-1 text-white/60" />
              </section>
            ))}
          </div>
        </section>
      )}
    </section>
  );
};

export default Community;
