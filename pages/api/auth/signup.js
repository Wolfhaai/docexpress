
export default async function handler(req, res) {
  const { email, senha } = req.body;
  if (!email || !senha) return res.status(400).json({ error: 'Campos obrigatórios' });
  res.status(200).json({ status: 'Usuário criado com sucesso', plano: 'free' });
}
