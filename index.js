export default function handler(req, res) {
  if (req.method === "POST") {
    // Aquí recibimos la información que se envía desde Google Apps Script
    const { op, mensajes } = req.body;

    // Respuesta según la operación
    if (op === "qr") {
      res.status(200).json({ status: "0", message: "QR generado correctamente" });
    } else if (op === "registermessage") {
      res.status(200).json({ status: "0", message: "Mensajes registrados correctamente" });
    } else {
      res.status(400).json({ status: "-1", message: "Operación no reconocida" });
    }
  } else {
    res.status(405).json({ status: "-1", message: "Método no permitido" });
  }
}
