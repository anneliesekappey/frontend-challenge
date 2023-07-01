import type { Request, Response } from '@sveltejs/kit';

export async function post(request: Request): Promise<Response> {
  return {
    status: 200,
    body: JSON.stringify({ success: true, message: 'Subscription successful!' }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
}
