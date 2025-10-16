# Newsletter Subscription Setup Checklist

## ✅ Step-by-Step Setup

### 1. Google Sheets Setup
- [ ] Open your Google Sheet (FieldNet Forms)
- [ ] Create a new sheet named **exactly** "Newsletter Subscribers" (case-sensitive)
- [ ] Add headers in Row 1:
  - Cell A1: `Timestamp`
  - Cell B1: `Email`
  - Cell C1: `Status`

### 2. Google Apps Script Setup

#### A. Update the `doPost` function
Make sure your `doPost` function includes newsletter handling:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    if (data.action === 'booking') {
      return handleBookingSubmission(data);
    } else if (data.action === 'newsletter') {
      return handleNewsletterSubscription(data);  // <-- ADD THIS
    } else {
      return handleContactSubmission(data);
    }
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error', 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

#### B. Add the `handleNewsletterSubscription` function
Copy this entire function to your Google Apps Script:

```javascript
// Handle Newsletter Subscriptions
function handleNewsletterSubscription(data) {
  // Get the "Newsletter Subscribers" sheet
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var newsletterSheet = spreadsheet.getSheetByName('Newsletter Subscribers');
  
  if (!newsletterSheet) {
    throw new Error('Newsletter Subscribers sheet not found');
  }
  
  // Check if email already exists (starting from row 2)
  var lastRow = newsletterSheet.getLastRow();
  
  // Only check if there's data beyond the header row
  if (lastRow > 1) {
    var emailColumn = newsletterSheet.getRange(2, 2, lastRow - 1, 1).getValues();
    
    for (var i = 0; i < emailColumn.length; i++) {
      if (emailColumn[i][0] === data.email) {
        return ContentService
          .createTextOutput(JSON.stringify({ 
            status: 'already_subscribed',
            message: 'This email is already subscribed' 
          }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
  }
  
  // Append the new subscriber
  newsletterSheet.appendRow([
    data.timestamp,
    data.email,
    'Active'
  ]);
  
  // Send welcome email
  sendNewsletterWelcomeEmail(data.email);
  
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

#### C. Add the `sendNewsletterWelcomeEmail` function
Copy this entire function to your Google Apps Script:

```javascript
// Send welcome email to new newsletter subscriber
function sendNewsletterWelcomeEmail(email) {
  var adminEmail = "rahuldeka072@gmail.com";
  
  // Email to Admin
  var adminSubject = "📬 New Newsletter Subscriber";
  var adminBody = 
    "A new subscriber has joined your newsletter!\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "📧 Email: " + email + "\n" +
    "🕐 Time: " + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "MMM dd, yyyy 'at' hh:mm a") + "\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    "View all subscribers in your Google Sheet:\n" +
    SpreadsheetApp.getActiveSpreadsheet().getUrl();
  
  // Email to Subscriber (Welcome)
  var subscriberSubject = "Welcome to FieldNet Research Newsletter! 📬";
  var subscriberBody = 
    "Hi there! 👋\n\n" +
    "Thank you for subscribing to the FieldNet Research newsletter!\n\n" +
    "You'll now receive:\n" +
    "• Latest market research insights and trends\n" +
    "• Industry news and updates\n" +
    "• Exclusive tips and resources\n" +
    "• Company announcements\n\n" +
    "We're excited to have you as part of our community!\n\n" +
    "Best regards,\n" +
    "The FieldNet Research Team\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "📧 Email: info@fieldnetglobal.com\n" +
    "📱 Phone: +91 7738814467\n" +
    "🌐 Website: https://fieldnetglobal.com\n\n" +
    "---\n" +
    "To unsubscribe from this newsletter, please reply to this email with 'Unsubscribe' in the subject line.";
  
  try {
    // Send email to admin
    MailApp.sendEmail({
      to: adminEmail,
      subject: adminSubject,
      body: adminBody
    });
    
    // Send welcome email to subscriber
    MailApp.sendEmail({
      to: email,
      subject: subscriberSubject,
      body: subscriberBody
    });
    
    Logger.log("Newsletter welcome emails sent to " + adminEmail + " and " + email);
  } catch (emailError) {
    Logger.log("Error sending newsletter emails: " + emailError.toString());
  }
}
```

### 3. Deploy the Updated Script

- [ ] Click **File** > **Save** (or Ctrl+S)
- [ ] Click **Deploy** > **Manage deployments**
- [ ] Click the **Edit** icon (pencil) next to your existing deployment
- [ ] Change version to **New version**
- [ ] Click **Deploy**
- [ ] Copy the Web App URL (if it changed)

### 4. Test the Newsletter Subscription

1. Open your website in a browser
2. Open Browser DevTools (F12)
3. Go to the **Console** tab
4. Scroll to the footer
5. Enter a test email in the newsletter field
6. Click "Subscribe"
7. Check the console for logs:
   - Should see: "Sending newsletter subscription: ..."
   - Should see: "Google Script response: ..."

### 5. Verify in Google Sheets

- [ ] Open your Google Sheet
- [ ] Go to "Newsletter Subscribers" tab
- [ ] Check if the email appears in Row 2 with:
  - Column A: Timestamp
  - Column B: Your test email
  - Column C: Active

### 6. Check Emails

- [ ] Admin email (rahuldeka072@gmail.com) should receive notification
- [ ] Test email address should receive welcome email
- [ ] Check spam folders if emails don't appear

## 🔍 Troubleshooting

### If data is NOT appearing in the sheet:

1. **Check sheet name**: Must be exactly "Newsletter Subscribers" (case-sensitive)
2. **Check Apps Script logs**:
   - Go to Apps Script Editor
   - Click **Executions** (left sidebar)
   - Look for errors
3. **Check browser console**: Look for error messages in DevTools
4. **Verify deployment**: Make sure you deployed a NEW VERSION after adding the functions

### If you see errors in browser console:

- Check that `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` is set in `.env.local`
- Verify the URL ends with `/exec` not `/dev`
- Make sure the script is deployed with "Anyone" access

### If emails are not sending:

- Check Gmail sending limits (100 emails/day for free accounts)
- Verify email addresses are correct
- Check spam folders
- Review Apps Script execution logs for email errors

## ✨ Success Indicators

When everything is working correctly:

1. ✅ Form submits without errors
2. ✅ Success message appears: "Thank you for subscribing!"
3. ✅ Email appears in Google Sheet Row 2+
4. ✅ Admin receives notification email
5. ✅ Subscriber receives welcome email
6. ✅ Console shows successful response logs
