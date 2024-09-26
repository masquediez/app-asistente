import React from "react";
import ChatAWS from "../components/chat/chatAWS";
import { useLocation } from "react-router-dom";

const ChatPageAWS = () => {
  const location = useLocation();
  const { username } = location.state || { username: "Gast" };

  return (
    <div className="chat-page">
      <h1>AWS Training Chat</h1>
      <ChatAWS username={username} />
    </div>
  );
};

export default ChatPageAWS;
