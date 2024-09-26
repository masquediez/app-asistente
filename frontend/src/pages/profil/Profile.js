import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [avatar, setAvatar] = useState("male");

  const history = useHistory();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5050/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setProfile(response.data);
      } catch (error) {
        setError(
          "Fehler beim Laden des Profils. Stellen Sie sicher, dass Sie authentifiziert sind."
        );
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    // Recuperar la selección del avatar de localStorage
    const savedAvatar = localStorage.getItem("avatar");
    if (savedAvatar) {
      setAvatar(savedAvatar);
    }

    fetchProfile();
  }, []);

  const toggleAvatar = () => {
    const newAvatar = avatar === "male" ? "female" : "male";
    setAvatar(newAvatar);

    // Guardar la selección del avatar en localStorage
    localStorage.setItem("avatar", newAvatar);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleChatComponentChange = (component) => {
    switch (component) {
      case "CouchAWS":
        history.push({
          pathname: "/chat/aws",
          state: { username: profile.username }, // Pasar el nombre de usuario
        });
        break;
      case "CouchAzure":
        history.push({
          pathname: "/chat/azure",
          state: { username: profile.username }, // Pasar el nombre de usuario
        });
        break;
      case "CouchLinux":
        history.push({
          pathname: "/chat/linux",
          state: { username: profile.username }, // Pasar el nombre de usuario
        });
        break;
      case "Quiz":
        history.push("/quiz");
        break;
      default:
        history.push("/profile");
    }
  };

  if (loading) {
    return <p>Wird geladen...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="profile-container">
      <aside className="sidebar grid-item">
        <div className="profile-info">
          <div className="profile-pic" onClick={toggleAvatar}>
            <img
              src={
                avatar === "male"
                  ? "https://tse3.mm.bing.net/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?rs=1&pid=ImgDetMain"
                  : "https://www.modernistic.com/wp-content/uploads/2015/10/female-icon-for-testimonials.png"
              }
              alt="Profilbild"
              style={{ width: "100px", borderRadius: "50%" }}
            />
          </div>
          {profile && (
            <>
              <h2>{profile.username}</h2>
              <p>{profile.email}</p>
            </>
          )}
        </div>
        <nav className="menu">
          <ul>
            <li onClick={() => handleChatComponentChange("Quiz")}>Easy Quiz</li>
            <li onClick={() => handleChatComponentChange("CouchAWS")}>
              AWS Training
            </li>
            <li onClick={() => handleChatComponentChange("CouchAzure")}>
              Azure Training
            </li>
            <li onClick={() => handleChatComponentChange("CouchLinux")}>
              Linux Training
            </li>
            <li onClick={handleLogout} style={{ cursor: "pointer" }}>
              Abmelden
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content grid-item">
        <h1>Willkommen, {profile ? profile.username : "Gast"}</h1>
        <div className="stats">
          <div className="stat-card">Prüfungen: 0</div>
          <div className="stat-card">Tests: 0 / 0</div>
        </div>
      </main>

      <div className="grid-item empty-container">
        {/* Aquí se renderizará el componente del chat según la ruta */}
      </div>
    </div>
  );
};

export default Profile;
