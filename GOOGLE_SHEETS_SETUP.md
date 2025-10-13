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
2. Fill out the form with test data
3. Click "Submit Message"
4. Check your Google Sheet - the data should appear in a new row!

## Troubleshooting

### If submissions aren't working:

1. **Check the browser console** for any errors
2. **Verify the Google Apps Script URL** in `.env.local`
3. **Make sure the Google Apps Script is deployed** with "Anyone" access
4. **Check the Google Apps Script logs**:
   - Go to Apps Script editor
   - Click on **Executions** (left sidebar)
   - Look for any error messages

### Common Issues:

- **403 Forbidden**: Make sure "Who has access" is set to "Anyone"
- **405 Method Not Allowed**: Verify you're using the `/exec` URL, not `/dev`
- **CORS errors**: Google Apps Script automatically handles CORS, but make sure you're not blocking it with browser extensions

## Security Notes

- The Google Apps Script URL is public but can only append data to your sheet
- Consider adding rate limiting or CAPTCHA for production use
- Never expose sensitive credentials in the frontend code

## Future Enhancements

- [ ] **Add email notifications**: Modify the Apps Script to send you email to both party when a form is submitted.