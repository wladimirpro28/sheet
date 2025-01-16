export default function handler(req, res) {
  if (req.method === "POST") {
    const { op, token_qr, mensajes, app_script } = req.body;

    // Ejemplo de lógica según la operación recibida
    if (op === "iniciarqr") {
      res.status(200).json({ status: "0", message: "QR iniciado correctamente" });
    } else if (op === "registermessage") {
      res.status(200).json({ status: "0", message: "Mensajes registrados" });
    } else {
      res.status(400).json({ status: "-1", message: "Operación no reconocida" });
    }
  } else {
    res.status(405).json({ status: "-1", message: "Método no permitido" });
  }
}
