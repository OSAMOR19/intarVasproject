import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend('re_Tadpj79T_27eSiFhauRax21Qpv3wVmTgL');

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed. Please use POST.' 
    });
  }

  try {
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'support@intarvas.com',
      to: 'support@intarvas.com',
      subject: 'Test Email from IntarVAS',
      html: '<p>This is a test message sent via Resend.</p>',
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(400).json({ 
        success: false, 
        message: 'Failed to send email', 
        error: error.message 
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!',
      data: data 
    });
  } catch (error: any) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error', 
      error: error.message 
    });
  }
}

