import React from "react";
import "./Container.css"; // Importar la hoja de estilos

const Container = ({ children }) => {
  return <div className="centered-container">{children}</div>;
};

export default Container;
