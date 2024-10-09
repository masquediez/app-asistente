import React, { useState } from "react";
import axios from "axios";
import "./RegisterForm.css"; // Asegúrate de importar el archivo CSS

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://35.159.67.182:5050/api/auth/register", {
        username,
        email,
        password,
      });

      setMessage("¡Registro exitoso! Ahora puedes iniciar sesión.");

      // Limpiar los campos del formulario
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setMessage("Error al registrar el usuario.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Registro</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre de usuario:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Registrar</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default RegisterForm;
