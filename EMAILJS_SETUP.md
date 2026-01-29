# EmailJS Setup Instructions

## Overview
The contact form is now configured to use EmailJS to forward messages to **gwxforward@gmail.com**.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

### 2. Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** as the service
4. Connect your **gwxforward@gmail.com** account
5. Note down the **Service ID** (e.g., `service_xyz123`)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

**Subject:**
```
{{subject}}
```

**Content:**
```
New contact form submission from GWx Website

Name: {{from_name}}
Company: {{from_company}}
Email: {{from_email}}
Mobile: {{from_mobile}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent via the GWx Consultants website contact form.
```

4. Set the **To Email** field to: `gwxforward@gmail.com`
5. Set the **From Name** to: `{{from_name}}`
6. Set the **Reply To** to: `{{from_email}}`
7. Save the template and note the **Template ID** (e.g., `template_abc456`)

### 4. Get Your Public Key
1. Go to **Account** > **General**
2. Find your **Public Key** (e.g., `A1b2C3d4E5f6G7h8I`)

### 5. Update the Code
Open `src/App.jsx` and find the `handleSendEmail` function around line 120.

Replace these three placeholders with your actual values:
```javascript
emailjs.send(
  'service_id_here',  // Replace with your Service ID
  'template_id_here', // Replace with your Template ID
  templateParams,
  'public_key_here'   // Replace with your Public Key
)
```

Example:
```javascript
emailjs.send(
  'service_xyz123',
  'template_abc456',
  templateParams,
  'A1b2C3d4E5f6G7h8I'
)
```

### 6. Test the Form
1. Run your development server: `npm run dev`
2. Navigate to the contact form
3. Accept cookies when prompted
4. Fill in all required fields:
   - Name (required)
   - Email (required)
   - Message (required)
   - Company (optional)
   - Contact number (optional)
   - Subject (optional)
5. Click **Send**
6. Check **gwxforward@gmail.com** for the email

## Form Fields Included
- ✅ Name (required)
- ✅ Company (optional)
- ✅ Email (required)
- ✅ Contact number (optional)
- ✅ Subject (optional)
- ✅ Message (required)

All fields will be sent to **gwxforward@gmail.com** via EmailJS.

## Cookie Consent
The form requires cookie consent to function. If users decline cookies, the form will display an error message and won't send emails.

## Troubleshooting

### "Please accept cookies to use the contact form"
- The user needs to accept the cookie consent banner
- Refresh the page and click "Accept" on the banner

### "Failed to send message"
- Check that all three IDs (Service ID, Template ID, Public Key) are correct
- Verify that gwxforward@gmail.com is connected to the EmailJS service
- Check browser console for specific error messages
- Ensure you haven't exceeded the free tier limit (200 emails/month)

### Emails not arriving at gwxforward@gmail.com
- Check spam/junk folder
- Verify the "To Email" in the EmailJS template is set to gwxforward@gmail.com
- Check EmailJS dashboard for delivery logs

## Security Note
The EmailJS public key is safe to expose in client-side code. The actual email sending happens on EmailJS servers, so your Gmail credentials are never exposed.

## Free Tier Limits
- 200 emails per month
- 2 email templates
- 2 email services

If you need more, consider upgrading to a paid plan on EmailJS.
