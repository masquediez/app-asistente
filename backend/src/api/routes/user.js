const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/auth");
const User = require("../models/User"); // Asegúrate de importar correctamente el modelo de Usuario

// Ruta protegida para obtener el perfil del usuario
router.get("/profile", authenticateToken, async (req, res) => {
  try {
    console.log("User ID from token:", req.user.id);
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error en el servidor:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

module.exports = router;
