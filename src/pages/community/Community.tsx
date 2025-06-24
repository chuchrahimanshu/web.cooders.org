import React from "react";
import { FollowRequests, Suggestions } from "../../components";

const Community: React.FC = () => {
  return (
    <section className="flex justify-between">
      <p>Community</p>
      <div className="flex flex-col gap-[10px]">
        <FollowRequests />
        <Suggestions />
      </div>
    </section>
  );
};

export default Community;
