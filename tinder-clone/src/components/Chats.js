import React from "react";
import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Jennifer"
        message="Hey!"
        timestamp="3 dyas ago"
        profilepic=""
      />
      <Chat
        name="Sandra"
        message="Hi, wassup"
        timestamp="1 day ago"
        profilepic=""
      />
      <Chat
        name="Natasha"
        message="Hey there.."
        timestamp="10 hr ago"
        profilepic=""
      />
      <Chat
        name="Kate"
        message="Wht ur doing?"
        timestamp="5 days ago"
        profilepic=""
      />
    </div>
  );
};

export default Chats;
