import React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./Chatscreen.css";

const Chatscreen = () => {
  const [messages, setMessages] = useState([
    {
      name: "Jennifer",
      image: "",
      message: "what up",
    },
    {
      name: "Jennifer",
      image: "",
      message: "how it going",
    },
    {
      message: "all gud..",
    },
  ]);

  return (
    <div className="chatscreen">
      <p>You matched with Jennifer on 10/10/22</p>

      {messages.map((message) =>
        message.name ? (
          <div className="chatscreen__message">
            <Avatar className="chatscreen__image" alt={message.name} />
            <p className="chatscreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatscreen__message">
            <p className="chatscreen__textuser">{message.message}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Chatscreen;
