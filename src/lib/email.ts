/**
 * Send a test email using the backend API
 * @returns Promise with the API response
 */
export async function sendTestEmail() {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch {
        // Response doesn't have JSON body
      }
      return { 
        success: false, 
        data: { message: errorMessage } 
      };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error: any) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      data: { 
        message: '⚠️ Use "vercel dev" to enable email API'
      } 
    };
  }
}

/**
 * Send a custom email
 * @param emailData - The email data to send
 * @returns Promise with the API response
 */
export async function sendEmail(emailData: {
  from?: string;
  to?: string;
  subject: string;
  html: string;
}) {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    const data = await response.json();
    return { success: response.ok, data };
  } catch (error: any) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      data: { message: 'Network error', error: error.message } 
    };
  }
}

