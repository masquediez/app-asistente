const User = require("../models/User");

const getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id); // Obtener usuario por ID, asumido que req.user.id está disponible
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json({
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener perfil", error });
  }
};

module.exports = { getProfile };
