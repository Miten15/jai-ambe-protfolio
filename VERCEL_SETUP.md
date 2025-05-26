# 🚀 Vercel Deployment Setup for Email Notifications

## Environment Variables on Vercel

### 1. **Add Environment Variables in Vercel Dashboard**

1. Go to your Vercel project dashboard
2. Click on **Settings** tab
3. Click on **Environment Variables** in the sidebar
4. Add the following variables:

| Variable Name | Value | Environment |
|---------------|-------|-------------|
| `RESEND_API_KEY` | `re_your_actual_api_key_here` | Production, Preview, Development |
| `FROM_EMAIL` | `onboarding@resend.dev` | Production, Preview, Development |
| `TO_EMAIL` | `your.email@gmail.com` | Production, Preview, Development |

### 2. **Get Your Resend API Key**

1. Go to [Resend.com](https://resend.com)
2. Sign up for free account
3. Verify your email
4. Go to **API Keys** section
5. Click **Create API Key**
6. Copy the key (starts with `re_`)

### 3. **Add Variables via Vercel CLI (Alternative)**

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Login to Vercel
vercel login

# Add environment variables
vercel env add RESEND_API_KEY
# Paste your API key when prompted

vercel env add FROM_EMAIL
# Enter: onboarding@resend.dev

vercel env add TO_EMAIL  
# Enter: your.email@gmail.com
```

### 4. **Redeploy After Adding Variables**

After adding environment variables:
1. Go to **Deployments** tab in Vercel
2. Click the **⋯** menu on latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger deployment

## 🔧 Local Development Setup

### 1. Create `.env.local` file:
```env
RESEND_API_KEY=re_your_actual_api_key_here
FROM_EMAIL=onboarding@resend.dev
TO_EMAIL=your.email@gmail.com
```

### 2. Test locally:
```bash
npm run dev
# Test the contact form
```

## 📧 Email Configuration Options

### For Testing (Free):
```env
FROM_EMAIL=onboarding@resend.dev
```

### For Production (Custom Domain):
```env
FROM_EMAIL=noreply@yourdomain.com
```
*Note: Requires domain verification in Resend*

## 🐛 Common Issues & Solutions

### Build Error: "Missing API key"
**Solution:** Environment variables not set in Vercel
1. Check Vercel dashboard > Settings > Environment Variables
2. Ensure all 3 variables are added
3. Redeploy the project

### Emails not sending in production
**Solutions:**
1. Check Vercel function logs for errors
2. Verify API key is correct in Resend dashboard
3. Check FROM_EMAIL domain is verified (if using custom domain)

### Environment variables not updating
**Solutions:**
1. Redeploy the project after adding variables
2. Clear Vercel build cache (Settings > Functions > Clear Cache)
3. Check variable names match exactly (case-sensitive)

## 📊 Vercel Environment Types

- **Development**: Used in `vercel dev`
- **Preview**: Used for branch deployments  
- **Production**: Used for main/master branch

*Tip: Add variables to all three environments for consistency*

## 🔍 Testing the Setup

### 1. Check Environment Variables
Add this temporary endpoint to test:

Create `/app/api/test-env/route.ts`:
```typescript
import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    hasResendKey: !!process.env.RESEND_API_KEY,
    hasFromEmail: !!process.env.FROM_EMAIL,
    hasToEmail: !!process.env.TO_EMAIL,
  })
}
```

Visit: `https://yoursite.vercel.app/api/test-env`

### 2. Test Email Sending
Use the contact form on your deployed site.

## 🔐 Security Best Practices

- ✅ Never commit `.env.local` to git
- ✅ Use different API keys for development/production
- ✅ Regularly rotate API keys
- ✅ Monitor email sending limits
- ✅ Add `.env.local` to `.gitignore`

## 📞 Need Help?

- [Vercel Environment Variables Docs](https://vercel.com/docs/concepts/projects/environment-variables)
- [Resend Documentation](https://resend.com/docs)
- [Resend Dashboard](https://resend.com/dashboard)

---

**After setup, your contact form will work perfectly on Vercel! 🎉**
