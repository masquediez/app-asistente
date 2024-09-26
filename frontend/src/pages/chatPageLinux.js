import React from "react";
import ChatLinux from "../components/chat/chatLINUX";
import { useLocation } from "react-router-dom";

const ChatPageLinux = () => {
  const location = useLocation();
  const { username } = location.state || { username: "Gast" };

  return (
    <div className="chat-page">
      <h1>Linux Training Chat</h1>
      <ChatLinux username={username} />
      <div>
        <p>.</p>
      </div>
    </div>
  );
};

export default ChatPageLinux;
