export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, idea, source } = req.body;
    
    // Forward request to backend service
    const backendResponse = await fetch('http://localhost:3001/api/signal/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, idea, source })
    });
    
    const data = await backendResponse.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('API forward error:', error);
    res.status(500).json({ error: 'Signal processing failed' });
  }
}