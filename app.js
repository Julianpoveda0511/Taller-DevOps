const express = require('express');
const app = express();

function sumar(a, b) {
  return a + b;
}

function holaMundo() {
  return "Hola Arquitectos";
}

app.get('/', (req, res) => {
  res.send(holaMundo());
});

app.get('/sumar/:a/:b', (req, res) => {
  const resultado = sumar(Number(req.params.a), Number(req.params.b));
  res.send(`Resultado: ${resultado}`);
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}

module.exports = { sumar, holaMundo, app };
