const express = require('express');
const sql = require('mssql');

const app = express();

// Configuración de la conexión a SQL Server
const config = {
  user: 'sa',
  password: '123456789per',
  server: 'LAPTOP-DKEURT4E',
  database: 'Usuarios',
};

// Endpoint para obtener datos de la tabla 'Usuarios'
app.get('/usuarios', async (req, res) => {
    try {
      const { correo, contrasena } = req.query;
  
      // Validar que se proporcionen correo y contraseña
      if (!correo || !contrasena) {
        return res.status(400).send('Correo y contraseña requeridos');
      }
  
      // Establecer conexión
      let pool = await sql.connect(config);
  
      // Consulta a la base de datos para obtener el usuario específico
      let result = await pool
        .request()
        .input('correo', sql.VarChar, correo)
        .input('contrasena', sql.VarChar, contrasena)
        .query('SELECT correo, contrasena FROM Usuarios WHERE correo = @correo AND contrasena = @contrasena');
  
      if (result.recordset.length > 0) {
        res.json(result.recordset); // Enviar los resultados como respuesta (solo un usuario)
      } else {
        res.status(404).send('Usuario no encontrado');
      }
    } catch (err) {
      console.error('Error al conectar con SQL Server:', err);
      res.status(500).send('Error de servidor');
    }
  });
  

// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
