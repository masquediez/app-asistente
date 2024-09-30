import React, { useEffect } from "react";
//import "@n8n/chat/style.css"; // Importar los estilos predeterminados
//import "./chat.css"; // Importar los estilos personalizados
import { createChat } from "@n8n/chat";

const ChatLinux = ({ username }) => {
  useEffect(() => {
    if (username) {
      createChat({
        webhookUrl:
          "https://n8nencasa.duckdns.org/webhook/79189d12-be31-4de6-a38e-5d8aac499cb2/chat",
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
