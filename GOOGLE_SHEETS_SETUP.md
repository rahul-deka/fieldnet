# Google Sheets Integration Setup Guide

## Step 1: Create Google Sheets

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "FieldNet Forms" (or any name you prefer)

### Sheet 1: Contact Form Submissions (Default sheet)
In the first row, add these headers:
- Column A: Timestamp
- Column B: First Name
- Column C: Last Name
- Column D: Email
- Column E: Phone
- Column F: Message

### Sheet 2: Call Bookings
1. Create a new sheet and name it "Call Bookings"
2. In **Row 1**, add the available time slots (these will be displayed in the booking form):
   - Leave Column A empty
   - Column B: 09:00 AM - 10:00 AM
   - Column C: 10:00 AM - 11:00 AM
   - Column D: 11:00 AM - 12:00 PM
   - Column E: 02:00 PM - 03:00 PM
   - Column F: 03:00 PM - 04:00 PM
   - Column G: 04:00 PM - 05:00 PM

3. Leave **Row 2** empty (spacer)

4. In **Row 3**, add these headers for booking submissions:
   - Column A: Timestamp
   - Column B: First Name
   - Column C: Last Name
   - Column D: Email
   - Column E: Phone
   - Column F: Date
   - Column G: Time Slot
   - Column H: Purpose

5. Booking submissions will start from **Row 4** onwards

### Sheet 3: Announcement
Create another sheet named "Announcement" with these headers:
- Column A: Title
- Column B: Link
- Column C: Status

### Sheet 4: FAQs
Create another sheet named "FAQs" with:
1. **Row 1** (Headers):
   - Column A: Question
   - Column B: Answer

2. **Row 2+**: Add your FAQ entries
   - Example:
   
| Question | Answer |
|----------|--------|
| What services does FieldNet offer? | FieldNet provides comprehensive market research solutions including data collection, analysis, and reporting for a wide range of industries. |
| How can I start a project with FieldNet? | Simply contact us through our website or email, and our team will guide you through the process from consultation to project delivery. |

## Step 2: Create Google Apps Script

1. In your Google Sheet, click on **Extensions** > **Apps Script**
2. Delete any code in the editor and paste the following code:

```javascript
// Handle POST requests (Contact Form & Booking Submissions)
function doPost(e) {
  try {
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Check if this is a booking or contact form submission
    if (data.action === 'booking') {
      return handleBookingSubmission(data);
    } else {
      return handleContactSubmission(data);
    }
      
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

// Handle Contact Form Submissions
function handleContactSubmission(data) {
  // Get the first sheet (Contact Form Submissions)
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheets()[0]; // First sheet
  
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
}

// Handle Booking Submissions
function handleBookingSubmission(data) {
  // Get the "Call Bookings" sheet
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var bookingSheet = spreadsheet.getSheetByName('Call Bookings');
  
  if (!bookingSheet) {
    throw new Error('Call Bookings sheet not found');
  }
  
  // Append the booking data starting from row 4 (after headers in row 3)
  bookingSheet.appendRow([
    data.timestamp,
    data.firstName,
    data.lastName,
    data.email,
    data.phone,
    data.date,
    data.timeSlot,
    data.purpose
  ]);
  
  // Send booking confirmation emails
  sendBookingEmailNotifications(data);
  
  // Return success response
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Handle GET requests (Fetch Announcement, Time Slots & FAQs)
function doGet(e) {
  try {
    // Check if this is an announcement request
    if (e.parameter.action === 'getAnnouncement') {
      return getActiveAnnouncement();
    }
    
    // Check if this is a time slots request
    if (e.parameter.action === 'getTimeSlots') {
      return getTimeSlots();
    }
    
    // Check if this is a FAQs request
    if (e.parameter.action === 'getFAQs') {
      return getFAQs();
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'Web app is running' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Send email notifications for contact form submissions
function sendEmailNotifications(data) {
  var adminEmail = "rahuldeka072@gmail.com"; // admin email
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

// Send email notifications for booking submissions
function sendBookingEmailNotifications(data) {
  var adminEmail = "rahuldeka072@gmail.com"; // admin email
  var customerEmail = data.email;
  var customerName = data.firstName + " " + data.lastName;
  
  // Format timestamp
  var timestamp = new Date(data.timestamp);
  var formattedDateTime = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MMM dd, yyyy 'at' hh:mm a");
  
  // Format the booking date
  var bookingDate = new Date(data.date);
  var formattedBookingDate = Utilities.formatDate(bookingDate, Session.getScriptTimeZone(), "EEEE, MMM dd, yyyy");
  
  // Email to Admin (You)
  var adminSubject = "📅 New Call Booking from " + customerName;
  var adminBody = 
    "You have received a new call booking:\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "📅 BOOKING DETAILS\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    "👤 Name: " + customerName + "\n" +
    "📧 Email: " + customerEmail + "\n" +
    "📱 Phone: " + data.phone + "\n" +
    "📆 Date: " + formattedBookingDate + "\n" +
    "🕐 Time Slot: " + data.timeSlot + "\n" +
    "🕐 Booked at: " + formattedDateTime + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "💼 PURPOSE\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    data.purpose + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    "📊 View all bookings in your Google Sheet:\n" +
    SpreadsheetApp.getActiveSpreadsheet().getUrl() + "\n\n" +
    "---\n" +
    "This is an automated notification from your booking system.";
  
  // Email to Customer (Confirmation)
  var customerSubject = "✅ Call Scheduled - FieldNet Research";
  var customerBody = 
    "Hi " + data.firstName + ",\n\n" +
    "Great news! Your call with FieldNet Research has been scheduled.\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "📅 YOUR BOOKING CONFIRMATION\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    "📆 Date: " + formattedBookingDate + "\n" +
    "🕐 Time: " + data.timeSlot + "\n" +
    "📧 Email: " + customerEmail + "\n" +
    "📱 Phone: " + data.phone + "\n\n" +
    "💼 Discussion Topic:\n" +
    data.purpose + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    "📞 What to Expect:\n" +
    "Our team will call you at the scheduled time on the phone number provided: " + data.phone + "\n\n" +
    "If you need to reschedule or have any questions, please contact us at +91 7738814467 or reply to this email.\n\n" +
    "Best regards,\n" +
    "The FieldNet Research Team\n\n" +
    "---\n" +
    "This is an automated confirmation email. If you need to make changes, please contact us directly.";
  
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
    
    Logger.log("Booking emails sent successfully to " + adminEmail + " and " + customerEmail);
  } catch (emailError) {
    Logger.log("Error sending booking emails: " + emailError.toString());
    // Don't throw error - we still want to save the booking even if email fails
  }
}

// Get available time slots from the Call Bookings sheet
function getTimeSlots() {
  try {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var bookingSheet = spreadsheet.getSheetByName('Call Bookings');
    
    if (!bookingSheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ error: 'Call Bookings sheet not found' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get Row 1 data (time slots)
    var firstRow = bookingSheet.getRange(1, 1, 1, bookingSheet.getLastColumn()).getValues()[0];
    
    // Filter out empty cells and the first column (which should be empty)
    var timeSlots = [];
    for (var i = 0; i < firstRow.length; i++) {
      if (firstRow[i] && firstRow[i].toString().trim() !== '') {
        timeSlots.push(firstRow[i].toString());
      }
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        timeSlots: timeSlots 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Get FAQs from the FAQs sheet
function getFAQs() {
  try {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var faqSheet = spreadsheet.getSheetByName('FAQs');
    
    if (!faqSheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ error: 'FAQs sheet not found' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get all data from the FAQ sheet (skip header row)
    var data = faqSheet.getDataRange().getValues();
    var faqs = [];
    
    // Start from row 2 (index 1) to skip headers
    for (var i = 1; i < data.length; i++) {
      var question = data[i][0]; // Column A
      var answer = data[i][1];   // Column B
      
      // Only add if both question and answer exist
      if (question && question.toString().trim() !== '' && 
          answer && answer.toString().trim() !== '') {
        faqs.push({
          question: question.toString(),
          answer: answer.toString()
        });
      }
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        faqs: faqs 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Get active announcement from the Announcement sheet
function getActiveAnnouncement() {
  try {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var announcementSheet = spreadsheet.getSheetByName('Announcement');
    
    if (!announcementSheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ error: 'Announcement sheet not found' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get all data from the announcement sheet
    var data = announcementSheet.getDataRange().getValues();
    
    // Skip header row and find active announcement
    for (var i = 1; i < data.length; i++) {
      var title = data[i][0];
      var link = data[i][1];
      var status = data[i][2];
      
      // Return the first active announcement
      if (status && status.toString().toLowerCase() === 'active') {
        return ContentService
          .createTextOutput(JSON.stringify({
            title: title,
            link: link,
            status: status
          }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    // No active announcement found
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'expired' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
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
- [x] **Announcement banner integration**: Fetch announcements from Google Sheet
- [ ] Beautification of the email template

## Announcement Banner Setup

### Step 1: Create Announcement Sheet

1. In your Google Sheet, create a new sheet (tab) named **"Announcement"**
2. Add these headers in the first row:
   - Column A: Title
   - Column B: Link
   - Column C: Status

3. Add your announcement data:
   - **Title**: The announcement message (e.g., "Join our worldwide research community and earn rewards!")
   - **Link**: URL to link to (e.g., "/register" or full URL)
   - **Status**: Either "active" or "expired"

### Step 2: The Script is Already Set Up!

The Google Apps Script code above already includes the `doGet` and `getActiveAnnouncement` functions needed for the announcement banner. No additional code is needed!

### Step 3: Redeploy (if needed)

If you had already deployed the script before adding the announcement functionality:

1. Click **Deploy** > **Manage deployments**
2. Click the **Edit** icon (pencil) next to your deployment
3. Under "Execute as", make sure it's set to **"Me"**
4. Under "Who has access", keep it as **"Anyone"**
5. Click **Deploy**

### Usage

The announcement banner will:
- Automatically fetch the announcement from your Google Sheet
- Only display if status is "active"
- Hide if status is "expired" or if there's no active announcement
- Show a loading state while fetching
- Users can dismiss it with the X button

## Call Booking System Setup

### Overview

The call booking system allows users to schedule consultation calls directly from your contact page. When users click "Book a Call", the contact form switches to a booking form where they can:
- Select a preferred date
- Choose from available time slots
- Provide their contact information
- Describe the purpose of the call

### How It Works

1. **User Experience**:
   - Users click the "Book a Call" button on the contact page
   - The form switches from contact form to booking form
   - Users can go back to the contact form using the "Back" button
   - After submission, both admin and customer receive email confirmations

2. **Data Storage**:
   - All bookings are stored in the "Call Bookings" sheet
   - Row 1 contains the available time slots (for reference)
   - Row 3 contains the column headers
   - Bookings are appended starting from Row 4

3. **Time Slots**:
   - Time slots are **dynamically fetched** from Row 1 of the "Call Bookings" sheet
   - The booking form automatically loads available slots when opened
   - Simply update Row 1 in your Google Sheet to add/modify/remove slots
   - No code changes needed - slots are pulled from the sheet in real-time
   - Format: "HH:MM AM/PM - HH:MM AM/PM"
   - Example time slots:
     * 09:00 AM - 10:00 AM
     * 10:00 AM - 11:00 AM
     * 11:00 AM - 12:00 PM
     * 02:00 PM - 03:00 PM
     * 03:00 PM - 04:00 PM
     * 04:00 PM - 05:00 PM
   - **Fallback**: If fetching fails, the form uses default hardcoded slots

### Email Notifications

**Admin Email** (rahuldeka072@gmail.com receives):
- 📅 New Call Booking notification
- Customer name, email, phone
- Booking date and time slot
- Purpose of the call
- Link to Google Sheet

**Customer Email** (receives):
- ✅ Booking confirmation
- Scheduled date and time
- Contact information
- What to expect during the call
- How to reschedule or contact support

### Customization

**To modify time slots**:
1. Simply update Row 1 in the "Call Bookings" Google Sheet
2. Add slots in columns B, C, D, E, F, G, etc. (Column A should remain empty)
3. Use format: "HH:MM AM/PM - HH:MM AM/PM"
4. Save the sheet - changes will be reflected immediately on the website
5. No code deployment or restart needed!

**Example Row 1 setup**:
```
| A (Empty) | B                    | C                    | D                    | E                    | F                    | G                    |
|-----------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|
|           | 09:00 AM - 10:00 AM | 10:00 AM - 11:00 AM | 11:00 AM - 12:00 PM | 02:00 PM - 03:00 PM | 03:00 PM - 04:00 PM | 04:00 PM - 05:00 PM |
```

**To change admin email**:
Update the `adminEmail` variable in both `sendEmailNotifications` and `sendBookingEmailNotifications` functions in the Google Apps Script.

### Testing

1. Go to your contact page: `http://localhost:3000/contact`
2. Click the "Book a Call" button (desktop sidebar or mobile bottom section)
3. Fill out the booking form with test data
4. Submit and check:
   - Google Sheet "Call Bookings" tab for the new entry
   - Admin email (rahuldeka072@gmail.com) for booking notification
   - Customer email for confirmation
