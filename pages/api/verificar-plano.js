
export default async function handler(req, res) {
  const email = req.query.email;
  if (!email) return res.status(400).json({ error: 'Email não informado' });
  res.status(200).json({ plano: 'free', limite: 1, usados: 0 });
}
