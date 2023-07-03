import fetch from 'node-fetch';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function post(request: any) {
  const url = 'https://n8n.thearc.dev/webhook/pricing';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.body)
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();

  return {
    status: response.status,
    body: data
  };
}
