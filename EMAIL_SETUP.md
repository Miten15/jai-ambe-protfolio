# Email Notification Setup for Project Inquiry Modal

This setup enables email notifications when users submit project inquiries through your portfolio.

## 🚀 Quick Setup

### 1. Get Resend API Key
1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)
3. Verify your email
4. Go to API Keys section
5. Create a new API key

### 2. Configure Environment Variables
Edit `.env.local` file in your project root:

```env
# Email Configuration
RESEND_API_KEY=re_your_actual_api_key_here
FROM_EMAIL=noreply@yourdomain.com
TO_EMAIL=your.email@gmail.com
```

**Important Notes:**
- `FROM_EMAIL`: Must be from a verified domain in Resend, or use `onboarding@resend.dev` for testing
- `TO_EMAIL`: Your email where you want to receive project inquiries
- Never commit `.env.local` to version control

### 3. Domain Verification (Optional for Production)
For production use:
1. Add your domain in Resend dashboard
2. Add DNS records as instructed
3. Use your domain email for `FROM_EMAIL`

### 4. Test the Setup
1. Start your development server: `npm run dev`
2. Open the project inquiry modal
3. Fill out the form and submit
4. Check your email for notifications

## 📧 What Happens When Form is Submitted

1. **Professional email sent to you** with:
   - Client contact information
   - Project details and requirements
   - Budget and timeline information
   - Formatted HTML template with next steps

2. **Confirmation email sent to client** with:
   - Thank you message
   - What to expect next
   - Your contact information

## 🎨 Email Features

- **Professional HTML templates** with modern styling
- **Mobile responsive** design
- **Client contact info** formatted for easy access
- **Project details** clearly organized
- **Next steps checklist** for your workflow
- **Reply-to functionality** (emails can be replied to directly)

## 🔧 Customization

### Update Email Templates
Edit the email templates in `/app/api/send-inquiry/route.ts`:
- Modify the HTML content
- Change styling
- Add your branding
- Update next steps

### Update Display Email
In `/components/project-inquiry-modal.tsx`, update:
```typescript
const NOTIFICATION_EMAIL = "your-email@domain.com"
```

## 📊 Free Tier Limits
- **Resend Free**: 100 emails/day, 3,000 emails/month
- Perfect for portfolio projects and small businesses

## 🔒 Security
- Environment variables are secure
- Client emails are validated
- Error handling prevents crashes
- No sensitive data exposed

## 🐛 Troubleshooting

### "Email service not configured" error
- Check if `RESEND_API_KEY` is set in `.env.local`
- Restart your development server after adding env vars

### "Email addresses not configured" error  
- Ensure `FROM_EMAIL` and `TO_EMAIL` are set in `.env.local`

### Emails not sending
- Verify API key is correct
- Check Resend dashboard for any issues
- Look at console for error messages

### FROM_EMAIL domain issues
- Use `onboarding@resend.dev` for testing
- Add your domain in Resend for production

## 📞 Support
If you need help with setup, check:
- [Resend Documentation](https://resend.com/docs)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

---

**Ready to receive project inquiries! 🎉**
