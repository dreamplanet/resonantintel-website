export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Forward request to backend service
    const backendResponse = await fetch('http://localhost:3001/api/signal/greet');
    const data = await backendResponse.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('API forward error:', error);
    res.status(500).json({ error: 'Greeting failed' });
  }
}