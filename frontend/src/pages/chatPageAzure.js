import React from "react";
import { useLocation } from "react-router-dom";
import ChatAZURE from "../components/chat/chatAZURE";
import "./chatPageAzure.css";

const ChatPageAzure = () => {
  const location = useLocation();
  const { username } = location.state || { username: "Gast" }; // Valor predeterminado si no se pasa el username

  return (
    <div className="chat-page">
      <h1>Azure Training Chat</h1>
      <ChatAZURE username={username} />
    </div>
  );
};

export default ChatPageAzure;
