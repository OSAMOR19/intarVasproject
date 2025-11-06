# 🔧 Fix: API 404 Error

## Problem
You're getting a **404 error** when trying to send emails because:
- Regular `npm run dev` / `yarn dev` doesn't support Vercel API endpoints
- Vercel serverless functions only work with Vercel CLI or when deployed

## ✅ Solution: Use Vercel CLI for Local Development

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
# or
yarn global add vercel
```

### Step 2: Stop Your Current Dev Server
Press `Ctrl+C` to stop the current `npm run dev` or `yarn dev`

### Step 3: Run with Vercel Dev
```bash
vercel dev
```

This will:
- ✅ Start your Vite dev server
- ✅ Enable the `/api/send-email` endpoint
- ✅ Allow you to test emails locally

### Step 4: Test the Email
1. The app will open on `http://localhost:3000` (or another port)
2. Navigate to the Contact page
3. Click "Test Email" button
4. ✅ Email should send successfully!

---

## Alternative: Deploy to Vercel and Test

If you don't want to use `vercel dev`, you can deploy and test on Vercel:

### Option A: Deploy via CLI
```bash
vercel deploy
```

### Option B: Deploy via Git
```bash
git add .
git commit -m "Add email functionality"
git push
```

Your app will be live on Vercel and the email will work!

---

## Quick Commands Reference

| Command | Description |
|---------|-------------|
| `vercel dev` | Run with API support (RECOMMENDED) |
| `vercel deploy` | Deploy to production |
| `npm run dev` | Regular dev (no API support) |

---

## 🎯 Expected Behavior

**Before (404 Error):**
```
POST http://localhost:8081/api/send-email 404 (Not Found)
```

**After (Success):**
```
POST http://localhost:3000/api/send-email 200 (OK)
{
  "success": true,
  "message": "Email sent successfully!"
}
```

---

## 🔍 Why This Happens

Vite (your build tool) is a **frontend dev server**. It doesn't understand Vercel's serverless functions (`/api` folder). 

Vercel CLI adds a layer that:
1. Runs your Vite dev server
2. Adds serverless function support
3. Handles routing between them

---

## ⚡ Quick Fix (Try This First)

Stop your current server and run:
```bash
vercel dev
```

Then test the email button again!

---

## 🆘 Still Having Issues?

If `vercel dev` doesn't work:

1. Make sure Vercel CLI is installed:
   ```bash
   vercel --version
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Link your project:
   ```bash
   vercel link
   ```

4. Try again:
   ```bash
   vercel dev
   ```

---

## 📝 Summary

**TL;DR:** Use `vercel dev` instead of `npm run dev` to enable API endpoints locally.

