function doPost(e) {
  try {
    var data = {};
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (typeof e === 'object' && e.action) {
      data = e;
    }

    // Dispatch by action
    var action = data.action || '';
    if (action === 'booking') {
      return handleBookingSubmission(data);
    } else if (action === 'newsletter') {
      return handleNewsletterSubscription(data);
    } else if (action === 'panel_registration') {
      return handlePanelRegistration(data);
    } else if (action === 'resource_viewer') {
      return handleResourceViewer(data);
    } else {
      return handleContactSubmission(data);
    }

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (Fetch Announcement, Time Slots & FAQs)
function doGet(e) {
  try {
    // Check if this is an announcement request
    if (e.parameter && e.parameter.action === 'getAnnouncement') {
      return getActiveAnnouncement();
    }

    // Check if this is a time slots request
    if (e.parameter && e.parameter.action === 'getTimeSlots') {
      return getTimeSlots();
    }

    // Check if this is a FAQs request
    if (e.parameter && e.parameter.action === 'getFAQs') {
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

/* -----------------------
   Contact form handlers
   ----------------------- */

function handleContactSubmission(data) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheets()[0]; // First sheet (legacy contact sheet)

  // Ensure header exists (optional)
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'First Name', 'Last Name', 'Email', 'Phone', 'Message']);
  }

  sheet.appendRow([
    data.timestamp || new Date().toLocaleString(),
    data.firstName || '',
    data.lastName || '',
    data.email || '',
    data.phone || '',
    data.message || ''
  ]);

  // Send email notifications
  try {
    sendEmailNotifications(data);
  } catch (e) {
    Logger.log('sendEmailNotifications error: ' + e.toString());
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

/* -----------------------
   Booking handlers
   ----------------------- */

function handleBookingSubmission(data) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var bookingSheet = spreadsheet.getSheetByName('Call Bookings');

  if (!bookingSheet) {
    throw new Error('Call Bookings sheet not found');
  }

  bookingSheet.appendRow([
    data.timestamp || new Date().toLocaleString(),
    data.firstName || '',
    data.lastName || '',
    data.email || '',
    data.phone || '',
    data.date || '',
    data.timeSlot || '',
    data.purpose || ''
  ]);

  try {
    sendBookingEmailNotifications(data);
  } catch (e) {
    Logger.log('sendBookingEmailNotifications error: ' + e.toString());
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

/* -----------------------
   Newsletter handlers
   ----------------------- */

function handleNewsletterSubscription(data) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var newsletterSheet = spreadsheet.getSheetByName('Newsletter Subscribers');

  if (!newsletterSheet) {
    throw new Error('Newsletter Subscribers sheet not found');
  }

  // Ensure header exists
  if (newsletterSheet.getLastRow() === 0) {
    newsletterSheet.appendRow(['Timestamp', 'Email', 'Status']);
  }

  // Check for duplicate email
  var lastRow = newsletterSheet.getLastRow();
  if (lastRow > 1) {
    var emailColumn = newsletterSheet.getRange(2, 2, lastRow - 1, 1).getValues();
    for (var i = 0; i < emailColumn.length; i++) {
      if (emailColumn[i][0] === data.email) {
        return ContentService
          .createTextOutput(JSON.stringify({ status: 'already_subscribed', message: 'This email is already subscribed' }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
  }

  newsletterSheet.appendRow([
    data.timestamp || new Date().toLocaleString(),
    data.email || '',
    'Active'
  ]);

  try {
    sendNewsletterWelcomeEmail(data.email);
  } catch (e) {
    Logger.log('sendNewsletterWelcomeEmail error: ' + e.toString());
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

/* -----------------------
   NEW: Panel Registration handler
   ----------------------- */

function handlePanelRegistration(data) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheetName = 'Panel Registration';
  var sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
    sheet.appendRow([
      'Timestamp',
      'Full Name',
      'Email',
      'Phone',
      'Gender',
      'Age',
      'Country',
      'Region/State',
      'City',
      'Postal Code',
      'Timezone',
      'Education',
      'Experience (Years)',
      'Languages',
      'Availability',
      'Work Types',
      'Sectors',
      'Payment Method',
      'PayPal Email',
      'UPI ID'
    ]);
  }

  var row = [
    data.timestamp || new Date().toLocaleString(),
    data.fullName || data.FullName || data.name || '',
    data.email || data.Email || '',
    data.phone || data.Phone || '',
    data.gender || data.Gender || '',
    data.age || data.Age || '',
    data.country || data.Country || '',
    data.region || data.Region || data.state || data.State || '',
    data.city || data.City || '',
    data.postalCode || data.PostalCode || data.postal || data.Postal || '',
    data.timezone || data.Timezone || '',
    data.education || data.Education || '',
    data.experience || data.Experience || data.experienceYears || '',
    data.languages || data.Languages || '',
    data.availability || data.Availability || '',
    data.workTypes || data.WorkTypes || '',
    data.sectors || data.Sectors || '',
    data.paymentMethod || data.PaymentMethod || data.payoutMethod || '',
    data.paypalEmail || data.PayPalEmail || data.paypal || '',
    data.upiId || data.UPIId || data.upi || ''
  ];

  sheet.appendRow(row);

  try {
    sendPanelRegistrationNotification(data);
  } catch (e) {
    Logger.log('sendPanelRegistrationNotification error: ' + e.toString());
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

/* -----------------------
   Resource Viewer handler
   ----------------------- */

function handleResourceViewer(data) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheetName = 'Resource Viewer';
  var sheet = spreadsheet.getSheetByName(sheetName);

  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
    sheet.appendRow(['Timestamp', 'Email', 'Resource Title']);
  }

  sheet.appendRow([
    data.timestamp || new Date().toLocaleString(),
    data.email || '',
    data.resourceTitle || 'N/A'
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sendEmailNotifications(data) {
  var adminEmail = "fieldnetllp@gmail.com"; // admin email
  var customerEmail = data.email;
  var customerName = (data.firstName || '') + ' ' + (data.lastName || '');

  var timestamp = new Date(data.timestamp || new Date());
  var formattedDate = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MMM dd, yyyy 'at' hh:mm a");

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
    (data.message || '') + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    "📊 View all submissions in your Google Sheet:\n" +
    SpreadsheetApp.getActiveSpreadsheet().getUrl() + "\n\n" +
    "---\n" +
    "This is an automated notification from your contact form.";

  var customerSubject = "Thank You for Contacting FieldNet Research";
  var customerBody =
    "Hi " + (data.firstName || '') + ",\n\n" +
    "Thank you for reaching out to us! We have received your message and appreciate you taking the time to contact us.\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "📋 YOUR MESSAGE DETAILS\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    "📧 Email: " + customerEmail + "\n" +
    "📱 Phone: " + data.phone + "\n" +
    "🕐 Submitted: " + formattedDate + "\n\n" +
    "💬 Your Message:\n" +
    (data.message || '') + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    "✅ What's Next?\n" +
    "Our team will review your message and get back to you within 24-48 hours. If your inquiry is urgent, please feel free to call us at +91 7738814467.\n\n" +
    "Best regards,\n" +
    "The FieldNet Research Team\n\n" +
    "---\n" +
    "This is an automated confirmation email. Please do not reply to this email.";

  try {
    MailApp.sendEmail({
      to: adminEmail,
      subject: adminSubject,
      body: adminBody
    });

    MailApp.sendEmail({
      to: customerEmail,
      subject: customerSubject,
      body: customerBody
    });

    Logger.log("Emails sent successfully to " + adminEmail + " and " + customerEmail);
  } catch (emailError) {
    Logger.log("Error sending emails: " + emailError.toString());
  }
}

function sendBookingEmailNotifications(data) {
  var adminEmail = "fieldnetllp@gmail.com"; // admin email
  var customerEmail = data.email;
  var customerName = (data.firstName || '') + ' ' + (data.lastName || '');

  var timestamp = new Date(data.timestamp || new Date());
  var formattedDateTime = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MMM dd, yyyy 'at' hh:mm a");

  var bookingDate = data.date ? new Date(data.date) : new Date();
  var formattedBookingDate = Utilities.formatDate(bookingDate, Session.getScriptTimeZone(), "EEEE, MMM dd, yyyy");

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
    "🕐 Time Slot: " + (data.timeSlot || '') + "\n" +
    "🕐 Booked at: " + formattedDateTime + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "💼 PURPOSE\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    (data.purpose || '') + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    "📊 View all bookings in your Google Sheet:\n" +
    SpreadsheetApp.getActiveSpreadsheet().getUrl() + "\n\n" +
    "---\n" +
    "This is an automated notification from your booking system.";

  var customerSubject = "✅ Call Scheduled - FieldNet Research";
  var customerBody =
    "Hi " + (data.firstName || '') + ",\n\n" +
    "Great news! Your call with FieldNet Research has been scheduled.\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "📅 YOUR BOOKING CONFIRMATION\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    "📆 Date: " + formattedBookingDate + "\n" +
    "🕐 Time: " + (data.timeSlot || '') + "\n" +
    "📧 Email: " + customerEmail + "\n" +
    "📱 Phone: " + data.phone + "\n\n" +
    "💼 Discussion Topic:\n" +
    (data.purpose || '') + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    "📞 What to Expect:\n" +
    "Our team will call you at the scheduled time on the phone number provided: " + data.phone + "\n\n" +
    "If you need to reschedule or have any questions, please contact us at +91 7738814467 or reply to this email.\n\n" +
    "Best regards,\n" +
    "The FieldNet Research Team\n\n" +
    "---\n" +
    "This is an automated confirmation email. If you need to make changes, please contact us directly.";

  try {
    MailApp.sendEmail({
      to: adminEmail,
      subject: adminSubject,
      body: adminBody
    });

    MailApp.sendEmail({
      to: customerEmail,
      subject: customerSubject,
      body: customerBody
    });

    Logger.log("Booking emails sent successfully to " + adminEmail + " and " + customerEmail);
  } catch (emailError) {
    Logger.log("Error sending booking emails: " + emailError.toString());
  }
}

function sendNewsletterWelcomeEmail(email) {
  var adminEmail = "fieldnetllp@gmail.com";

  var adminSubject = "📬 New Newsletter Subscriber";
  var adminBody =
    "A new subscriber has joined your newsletter!\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "📧 Email: " + email + "\n" +
    "🕐 Time: " + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "MMM dd, yyyy 'at' hh:mm a") + "\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    "View all subscribers in your Google Sheet:\n" +
    SpreadsheetApp.getActiveSpreadsheet().getUrl();

  var subscriberSubject = "Welcome to FieldNet Research Newsletter! 📬";
  var subscriberBody =
    "Hi there! 👋\n\n" +
    "Thank you for subscribing to the FieldNet Research newsletter!\n\n" +
    "You'll now receive:\n" +
    "• Latest market research insights and trends\n" +
    "• Industry news and updates\n" +
    "• Exclusive tips and resources\n" +
    "• Company announcements\n\n" +
    "Best regards,\n" +
    "The FieldNet Research Team\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "📧 Email: info@fieldnetglobal.com\n" +
    "📱 Phone: +91 7738814467\n" +
    "🌐 Website: https://fieldnetglobal.com\n\n";

  try {
    MailApp.sendEmail({
      to: adminEmail,
      subject: adminSubject,
      body: adminBody
    });

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

/* -----------------------
   GET helpers (time slots, FAQs, announcements)
   ----------------------- */

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

    var timeSlots = [];
    for (var i = 0; i < firstRow.length; i++) {
      if (firstRow[i] && firstRow[i].toString().trim() !== '') {
        timeSlots.push(firstRow[i].toString());
      }
    }

    return ContentService
      .createTextOutput(JSON.stringify({ timeSlots: timeSlots }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getFAQs() {
  try {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var faqSheet = spreadsheet.getSheetByName('FAQs');

    if (!faqSheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ error: 'FAQs sheet not found' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var data = faqSheet.getDataRange().getValues();
    var faqs = [];

    for (var i = 1; i < data.length; i++) {
      var question = data[i][0];
      var answer = data[i][1];

      if (question && question.toString().trim() !== '' && answer && answer.toString().trim() !== '') {
        faqs.push({
          question: question.toString(),
          answer: answer.toString()
        });
      }
    }

    return ContentService
      .createTextOutput(JSON.stringify({ faqs: faqs }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getActiveAnnouncement() {
  try {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var announcementSheet = spreadsheet.getSheetByName('Announcement');

    if (!announcementSheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ error: 'Announcement sheet not found' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var data = announcementSheet.getDataRange().getValues();

    for (var i = 1; i < data.length; i++) {
      var title = data[i][0];
      var link = data[i][1];
      var status = data[i][2];

      if (status && status.toString().toLowerCase() === 'active') {
        return ContentService
          .createTextOutput(JSON.stringify({ title: title, link: link, status: status }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'expired' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendPanelRegistrationNotification(data) {
  var adminEmail = 'fieldnetllp@gmail.com';
  var subject = 'New Panel Registration: ' + (data.fullName || data.FullName || 'Unknown');
  var body = 'New panel registration details:\\n\\n' + JSON.stringify(data, null, 2) + '\\n\\nView sheet: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl();
  MailApp.sendEmail({ to: adminEmail, subject: subject, body: body });
}