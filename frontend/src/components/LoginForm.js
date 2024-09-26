import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Asegúrate de importar el archivo CSS

const LoginForm = ({ setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5050/api/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true, // Habilitar cookies en axios
        }
      );

      // Guardar el token en el almacenamiento local
      localStorage.setItem("token", response.data.token);
      setAuth(true);
    } catch (err) {
      setError(err.response?.data?.message || "Error de inicio de sesión");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
