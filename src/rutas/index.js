const { Router } = require('express');
const router = Router();

router.post('/enviar-correo', (req, res) => {
    const { nombre, email, tel, mensaje } = req.body;

    contentHTML = `
        <h1>Información del usuario</h1>
        <ul>
            <li>Nombre: ${nombre} </li>
            <li>Email: ${email} </li>
            <li>Telefono: ${tel} </li>            
        </ul>
        <p>Mensaje: ${mensaje} </p>
    `;

    console.log(contentHTML);

    res.send('recibido');
})

module.exports = router;