# Google Sheets Integration Setup Guide

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Contact Form Submissions" (or any name you prefer)
4. In the first row, add these headers:
   - Column A: Timestamp
   - Column B: First Name
   - Column C: Last Name
   - Column D: Email
   - Column E: Phone
   - Column F: Message

## Step 2: Create Google Apps Script

1. In your Google Sheet, click on **Extensions** > **Apps Script**
2. Delete any code in the editor and paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Append the data to the sheet
    sheet.appendRow([
      data.timestamp,
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.message
    ]);
    
    // Send email notifications
    sendEmailNotifications(data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error', 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotifications(data) {
  var adminEmail = "adminemail@company.com"; // admin email
  var customerEmail = data.email;
  var customerName = data.firstName + " " + data.lastName;
  
  // Format timestamp
  var timestamp = new Date(data.timestamp);
  var formattedDate = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MMM dd, yyyy 'at' hh:mm a");
  
  // Email to Admin (You)
  var adminSubject = "🔔 New Contact Form Submission from " + customerName;
  var adminBody = 
    "You have received a new contact form submission:\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "📋 SUBMISSION DETAILS\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    "👤 Name: " + customerName + "\n" +
    "📧 Email: " + customerEmail + "\n" +
    "📱 Phone: " + data.phone + "\n" +
    "🕐 Time: " + formattedDate + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "💬 MESSAGE\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    data.message + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    "📊 View all submissions in your Google Sheet:\n" +
    SpreadsheetApp.getActiveSpreadsheet().getUrl() + "\n\n" +
    "---\n" +
    "This is an automated notification from your contact form.";
  
  // Email to Customer (Confirmation)
  var customerSubject = "Thank You for Contacting FieldNet Research";
  var customerBody = 
    "Hi " + data.firstName + ",\n\n" +
    "Thank you for reaching out to us! We have received your message and appreciate you taking the time to contact us.\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "📋 YOUR MESSAGE DETAILS\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    "📧 Email: " + customerEmail + "\n" +
    "📱 Phone: " + data.phone + "\n" +
    "🕐 Submitted: " + formattedDate + "\n\n" +
    "💬 Your Message:\n" +
    data.message + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    "✅ What's Next?\n" +
    "Our team will review your message and get back to you within 24-48 hours. If your inquiry is urgent, please feel free to call us at +91 7738814467.\n\n" +
    "Best regards,\n" +
    "The FieldNet Research Team\n\n" +
    "---\n" +
    "This is an automated confirmation email. Please do not reply to this email.";
  
  try {
    // Send email to admin
    MailApp.sendEmail({
      to: adminEmail,
      subject: adminSubject,
      body: adminBody
    });
    
    // Send confirmation email to customer
    MailApp.sendEmail({
      to: customerEmail,
      subject: customerSubject,
      body: customerBody
    });
    
    Logger.log("Emails sent successfully to " + adminEmail + " and " + customerEmail);
  } catch (emailError) {
    Logger.log("Error sending emails: " + emailError.toString());
    // Don't throw error - we still want to save the data even if email fails
  }
}

// Test function (optional)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'Web app is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click on the **Save** icon (💾) and name your project "Contact Form Handler"

## Step 3: Deploy the Web App

1. Click on **Deploy** > **New deployment**
2. Click on the gear icon ⚙️ next to "Select type"
3. Select **Web app**
4. Configure the deployment:
   - **Description**: Contact Form Submission Handler
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** > **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. Copy the **Web app URL** (it will look like: `https://script.google.com/macros/s/...../exec`)

## Step 4: Configure Your Next.js App

1. Open the `.env.local` file in your Next.js project
2. Replace `your_google_script_url_here` with the Web app URL you copied:
   ```
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
3. Save the file
4. Restart your Next.js development server:
   ```bash
   # Stop the current server (Ctrl+C)
   # Then restart:
   npm run dev
   # or
   pnpm dev
   ```

## Step 5: Test the Form

1. Go to your contact page: `http://localhost:3000/contact`
2. Fill out the form with test data (use a real email you can check)
3. Click "Submit Message"
4. Check your Google Sheet - the data should appear in a new row!
5. Check your email inbox (adminemail@company.com) - you should receive a notification email
6. Check the customer's email - they should receive a confirmation email

## Email Notifications

The script automatically sends two emails on each submission:

### 📧 To You (Admin):
- **Subject**: "🔔 New Contact Form Submission from [Customer Name]"
- **Contains**: Full submission details, customer contact info, message, and link to Google Sheet
- **Sent to**: adminemail@company.com

### 📧 To Customer (Confirmation):
- **Subject**: "Thank You for Contacting FieldNet Research"
- **Contains**: Confirmation message, copy of their submission, and next steps
- **Sent to**: Customer's email address

> **Note**: Email notifications use Gmail's daily sending limit (up to 100 emails per day for free accounts).

## Troubleshooting

### If submissions aren't working:

1. **Check the browser console** for any errors
2. **Verify the Google Apps Script URL** in `.env.local`
3. **Make sure the Google Apps Script is deployed** with "Anyone" access
4. **Check the Google Apps Script logs**:
   - Go to Apps Script editor
   - Click on **Executions** (left sidebar)
   - Look for any error messages

### If emails aren't being sent:

1. **Check your Gmail sending limits** - Free Gmail accounts can send up to 100 emails/day
2. **Verify the email addresses** are correct in the script
3. **Check spam folders** - automated emails might be filtered
4. **Review Apps Script execution logs** for email-related errors
5. **Authorize email permissions**: When you first run the script, you'll need to authorize it to send emails on your behalf

### Common Issues:

- **403 Forbidden**: Make sure "Who has access" is set to "Anyone"
- **405 Method Not Allowed**: Verify you're using the `/exec` URL, not `/dev`
- **CORS errors**: Google Apps Script automatically handles CORS, but make sure you're not blocking it with browser extensions
- **Emails not arriving**: Check spam folder and verify Gmail sending limits not exceeded

## Security Notes

- The Google Apps Script URL is public but can only append data to your sheet
- Consider adding rate limiting or CAPTCHA for production use
- Never expose sensitive credentials in the frontend code
- Email notifications are sent via your Google account (subject to Gmail's sending limits)

## Future Enhancements

- [x] **Add email notifications**: Implemented - Emails sent to both admin and customer
- [ ] Beautification of the email template