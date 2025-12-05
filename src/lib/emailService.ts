// EmailJS Configuration
// To set up:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Public Key, Service ID, and Template ID
// 5. Replace the values below

const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'; // Get from EmailJS dashboard
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Get from EmailJS dashboard
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Get from EmailJS dashboard

interface SendEmailParams {
  to_email: string;
  to_name: string;
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  ticket_id: string;
  ticket_title: string;
  reply_to?: string;
}

export async function sendEmail(params: SendEmailParams): Promise<boolean> {
  // Check if EmailJS is configured
  if (EMAILJS_PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY') {
    console.warn('EmailJS not configured. Email would be sent with these details:', params);
    return true; // Return true for development/testing
  }

  try {
    // Import EmailJS dynamically
    const emailjs = await import('@emailjs/browser');
    
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_email: params.to_email,
        to_name: params.to_name,
        from_name: params.from_name,
        from_email: params.from_email,
        subject: params.subject,
        message: params.message,
        ticket_id: params.ticket_id,
        ticket_title: params.ticket_title,
        reply_to: params.reply_to || params.from_email,
      },
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully to:', params.to_email);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

// Alternative: Setup instructions for Firebase Cloud Functions
export const FIREBASE_EMAIL_SETUP_INSTRUCTIONS = `
=== Firebase Cloud Functions Email Setup ===

1. Install Firebase CLI:
   npm install -g firebase-tools

2. Initialize Firebase Functions:
   firebase init functions

3. Install dependencies:
   cd functions
   npm install nodemailer @sendgrid/mail

4. Create email function in functions/src/index.ts:

   import * as functions from 'firebase-functions';
   import * as sgMail from '@sendgrid/mail';

   sgMail.setApiKey(functions.config().sendgrid.key);

   export const sendTicketEmail = functions.database
     .ref('tickets/{ticketId}/messages/{messageId}')
     .onCreate(async (snapshot, context) => {
       const message = snapshot.val();
       
       if (message.sentBy.role === 'IT Staff') {
         const ticketRef = snapshot.ref.parent?.parent;
         const ticketSnapshot = await ticketRef?.once('value');
         const ticket = ticketSnapshot?.val();
         
         const msg = {
           to: ticket.createdBy.email,
           from: 'your-verified-sender@yourdomain.com',
           subject: \`Re: Ticket #\${ticket.ticketId} - \${ticket.title}\`,
           text: message.text,
           html: \`
             <h2>Ticket Update</h2>
             <p><strong>From:</strong> \${message.sentBy.displayName} (IT Support)</p>
             <p><strong>Ticket:</strong> #\${ticket.ticketId} - \${ticket.title}</p>
             <hr>
             <p>\${message.text}</p>
           \`,
         };
         
         await sgMail.send(msg);
       }
     });

5. Set SendGrid API key:
   firebase functions:config:set sendgrid.key="YOUR_SENDGRID_API_KEY"

6. Deploy:
   firebase deploy --only functions
`;
