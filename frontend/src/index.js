import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import Container from "./components/container";

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
