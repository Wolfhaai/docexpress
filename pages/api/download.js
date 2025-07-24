
import { jsPDF } from 'jspdf';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });

  const { contrato, nomeArquivo } = req.body;
  const doc = new jsPDF();
  doc.setFontSize(12);
  doc.text(contrato, 10, 10);
  doc.setTextColor(150);
  doc.text('DocExpress', 150, 290);

  const pdfBuffer = doc.output('arraybuffer');

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${nomeArquivo}.pdf"`);
  res.send(Buffer.from(pdfBuffer));
}
