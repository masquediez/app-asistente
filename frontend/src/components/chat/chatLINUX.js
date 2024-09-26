import React, { useEffect } from "react";
//import "@n8n/chat/style.css"; // Importar los estilos predeterminados
//import "./chat.css"; // Importar los estilos personalizados
import { createChat } from "@n8n/chat";

const ChatLinux = ({ username }) => {
  useEffect(() => {
    if (username) {
      createChat({
        webhookUrl:
          "http://192.168.178.90:5678/webhook/aafa0b9b-0a89-4038-ac78-6fb3e690551d/chat",
        webhookConfig: {
          method: "POST",
          headers: {},
        },
        target: "#chat-container",
        mode: "window",
        chatInputKey: "chatInput",
        chatSessionKey: "sessionId",
        metadata: {},
        showWelcomeScreen: false,
        defaultLanguage: "de",
        initialMessages: [
          `Hallo  ${username}    Willkommen zum Linux-Training.`,
        ],
        i18n: {
          en: {
            title: "¡Prüfungsassistent!  ",
            subtitle: "Ich bin hier, um Ihnen zu helfen !! ",
            getStarted: "Nueva conversación",
            inputPlaceholder: "Schreiben Sie Ihre Frage ..",
          },
        },
      });
    }
  }, [username]);

  return <div id="chat-container"></div>;
};

export default ChatLinux;
