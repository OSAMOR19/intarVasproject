# Email Setup with Resend

This project uses [Resend](https://resend.com/) for email functionality via Vercel Serverless Functions.

## 📁 Project Structure

```
intarVasproject/
├── api/
│   └── send-email.ts          # Vercel Serverless Function
├── src/
│   └── lib/
│       └── email.ts            # Email utility functions
└── vercel.json                 # Vercel configuration
```

## 🚀 How It Works

### 1. Vercel Serverless Function
The API endpoint is located at `/api/send-email.ts` and handles POST requests.

**Endpoint:** `/api/send-email`
**Method:** POST

**Response Format:**
```json
{
  "success": true,
  "message": "Email sent successfully!",
  "data": { ... }
}
```

### 2. Frontend Integration
The contact form in `getIntouch.tsx` includes two buttons:
- **Test Email**: Sends a test email to verify the setup
- **Submit**: Sends the contact form data

### 3. Utility Functions
Import the email utility to use anywhere in your app:

```typescript
import { sendTestEmail } from "@/lib/email";

// Send a test email
const result = await sendTestEmail();
if (result.success) {
  console.log("Email sent!");
}
```

## 🧪 Testing

### Option 1: Using the Contact Form
1. Navigate to the Contact page
2. Click the "Test Email" button
3. Check the status message

### Option 2: Direct API Call
Using curl:
```bash
curl -X POST https://your-domain.vercel.app/api/send-email
```

Using JavaScript:
```javascript
fetch('/api/send-email', { method: 'POST' })
  .then(res => res.json())
  .then(data => console.log(data));
```

## 📧 Email Configuration

Current configuration in `/api/send-email.ts`:
- **From:** support@intarvas.com
- **To:** support@intarvas.com
- **Subject:** Test Email from IntarVAS
- **Body:** This is a test message sent via Resend.

## 🔒 Security Note

⚠️ **API Key Security**: The API key is currently hardcoded in the serverless function. For production:

1. Use Vercel Environment Variables:
   ```bash
   vercel env add RESEND_API_KEY
   ```

2. Update `/api/send-email.ts`:
   ```typescript
   const resend = new Resend(process.env.RESEND_API_KEY);
   ```

## 📝 Customizing Email Content

To customize the email for your contact form, update the API endpoint:

```typescript
// In /api/send-email.ts
const { fullName, email, subject, message } = req.body;

await resend.emails.send({
  from: 'support@intarvas.com',
  to: 'support@intarvas.com',
  subject: subject || 'New Contact Form Submission',
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong> ${message}</p>
  `,
});
```

## 🐛 Troubleshooting

### Email not sending?
1. Check Vercel deployment logs
2. Verify the API key is valid
3. Ensure `support@intarvas.com` is verified in Resend dashboard
4. Check browser console for errors

### API endpoint not found?
1. Ensure you've deployed to Vercel
2. Check `vercel.json` configuration
3. Verify the `/api` folder exists in your project root

## 🌐 Deployment

This setup works automatically on Vercel:
```bash
vercel deploy
```

For local development with Vercel CLI:
```bash
vercel dev
```

## 📚 Resources

- [Resend Documentation](https://resend.com/docs)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)

