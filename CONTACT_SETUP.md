# Contact Form Email Setup

This guide will help you set up the email functionality for the contact form in your portfolio.

## Prerequisites

The following packages are already installed:
- `nodemailer` - for sending emails
- `@types/nodemailer` - TypeScript types for nodemailer

## Setup Instructions

### 1. Configure Environment Variables

Copy the `.env.example` file to `.env.local`:
```bash
cp .env.example .env.local
```

### 2. Gmail Setup (Recommended)

If you want to use Gmail to send emails:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

3. **Update `.env.local`**:
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-16-character-app-password
   CONTACT_EMAIL=your-gmail@gmail.com
   ```

### 3. Alternative Email Providers

#### Outlook/Hotmail
```javascript
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

#### Custom SMTP
```javascript
const transporter = nodemailer.createTransport({
  host: 'your-smtp-server.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### 4. Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact page and submit a test message

3. Check your configured email address for the message

## API Endpoint

The contact form sends data to `/api/contact` which:
- Validates the form data
- Sends an HTML email with the contact information
- Returns success/error status

## Form Fields

The contact form includes:
- **Name** (required)
- **Email** (required, validated)
- **Subject** (required, dropdown selection)
- **Message** (required)

## Error Handling

The form handles various error scenarios:
- Missing required fields
- Invalid email format
- Network connectivity issues
- Server-side email sending errors

## Security Notes

- Never commit your `.env.local` file to version control
- Use App Passwords instead of your main account password
- The email address in the form is validated client and server-side
- The API endpoint includes basic rate limiting protection

## Troubleshooting

### Common Issues:

1. **"Invalid email format" error**
   - Check if the email validation regex is working correctly
   - Verify the email input format

2. **"Failed to send email" error**
   - Check your environment variables
   - Verify Gmail App Password is correct
   - Check if 2FA is enabled on your Gmail account

3. **Network errors**
   - Check your internet connection
   - Verify the API route is accessible

4. **No email received**
   - Check spam folder
   - Verify CONTACT_EMAIL environment variable
   - Test with a different email service

For additional help, check the browser console and server logs for detailed error messages.
