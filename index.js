export default function handler(req, res) {
  if (req.method === "POST") {
    const { op, token_qr, mensajes, app_script } = req.body;
    // Implementa la lógica aquí
    res.status(200).json({ status: "0", message: "Operación realizada correctamente" });
  } else {
    res.status(405).json({ status: "-1", message: "Método no permitido" });
  }
}
