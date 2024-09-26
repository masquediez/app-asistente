import React, { useEffect } from "react";
import { createChat } from "@n8n/chat";

const ChatAZURE = ({ username }) => {
  useEffect(() => {
    if (username) {
      createChat({
        webhookUrl:
          "http://192.168.178.90:5678/webhook/8b0dd06c-7894-403d-8b05-56c624f99f1c/chat",
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
          `Hallo, ${username}    Willkommen zum Azure-Training.`,
        ],
        i18n: {
          en: {
            title: "¡Prüfungsassistent!",
            subtitle: "Ich bin hier, um Ihnen zu helfen !!",
            getStarted: "Nueva conversación",
            inputPlaceholder: "Schreiben Sie Ihre Frage ..",
          },
        },
      });
    }
  }, [username]);

  return <div id="chat-container"></div>;
};

export default ChatAZURE;
