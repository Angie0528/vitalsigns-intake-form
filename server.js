const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/api/registro', (req, res) => {
    const patientData = req.body;
    res.json({ message: "Registro Listo", data:patientData });       
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));