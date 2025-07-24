
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });

  const { usuarioJuridico, tipo, vendedor, comprador, valor } = req.body;
  const saudacao = usuarioJuridico ? 'Excelente, Doutor!' : 'Sem problemas, estou aqui para te ajudar';

  const contrato = `${saudacao}\n\nContrato de ${tipo}\nEntre ${vendedor} e ${comprador}, pelo valor de ${valor}.`;

  res.status(200).json({ contrato });
}
