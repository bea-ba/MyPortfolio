// Email service utility using Resend
import { Resend } from 'resend';

// Initialize Resend client
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const EMAIL_FROM = process.env.EMAIL_FROM || 'hello@bea.dev';
const EMAIL_TO = process.env.EMAIL_TO || 'hello@bea.dev';

/**
 * Send intake form submission email
 */
export async function sendIntakeFormEmail(data: {
  name: string;
  email: string;
  problemDescription: string;
  timeline?: string;
  budgetRange?: string;
  website?: string;
  howDidYouFind?: string;
  priorities?: string[];
}): Promise<{ success: boolean; message: string; error?: any }> {
  // If no API key, log to console (development mode)
  if (!resend) {
    console.log('📧 INTAKE FORM SUBMISSION (No Resend API key - development mode):', data);
    return {
      success: true,
      message: 'Form logged to console (development mode)',
    };
  }

  try {
    await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      replyTo: data.email,
      subject: `🔧 New Intake Form: ${data.name}`,
      html: `
        <h2>New Intake Form Submission</h2>

        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        ${data.website ? `<p><strong>Website:</strong> <a href="${data.website}">${data.website}</a></p>` : ''}

        <h3>The Problem</h3>
        <p><strong>Description:</strong><br>${data.problemDescription.replace(/\n/g, '<br>')}</p>

        <h3>Context</h3>
        ${data.timeline ? `<p><strong>Timeline:</strong> ${data.timeline}</p>` : ''}
        ${data.budgetRange ? `<p><strong>Budget Range:</strong> ${data.budgetRange}</p>` : ''}

        ${data.priorities && data.priorities.length > 0 ? `
          <h3>Priorities</h3>
          <ul>
            ${data.priorities.map(p => `<li>${p}</li>`).join('')}
          </ul>
        ` : ''}

        ${data.howDidYouFind ? `<p><strong>How they found us:</strong> ${data.howDidYouFind}</p>` : ''}

        <hr>
        <p><small>Submitted on ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Lisbon' })} (Lisbon time)</small></p>
      `,
    });

    // Send auto-response to user
    await resend.emails.send({
      from: EMAIL_FROM,
      to: data.email,
      subject: 'Thanks for reaching out! 👋',
      html: `
        <p>Hi ${data.name},</p>

        <p>Thanks for reaching out! I've received your message about:</p>
        <blockquote style="border-left: 3px solid #2563eb; padding-left: 15px; color: #666;">
          ${data.problemDescription.substring(0, 200)}${data.problemDescription.length > 200 ? '...' : ''}
        </blockquote>

        <p>I review every inquiry personally and will respond within 48 hours if I can help. If I'm not the right fit, I'll try to point you in the right direction.</p>

        <p>Looking forward to learning more about your tech challenge.</p>

        <p>Best,<br>Bea</p>

        <hr>
        <p><small>This is an automated confirmation. Please don't reply to this email - I'll reach out from my personal email address.</small></p>
      `,
    });

    return {
      success: true,
      message: 'Emails sent successfully',
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: 'Failed to send email',
      error: error,
    };
  }
}

/**
 * Send coffee chat scheduling email
 */
export async function sendCoffeeChatEmail(data: {
  name: string;
  email: string;
  stuckOn: string;
  preferredDate: string;
  preferredTime: string;
  moreDetail?: string;
  desiredOutcome?: string;
  additionalContext?: string;
}): Promise<{ success: boolean; message: string; error?: any }> {
  // If no API key, log to console (development mode)
  if (!resend) {
    console.log('☕ COFFEE CHAT REQUEST (No Resend API key - development mode):', data);
    return {
      success: true,
      message: 'Form logged to console (development mode)',
    };
  }

  try {
    await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      replyTo: data.email,
      subject: `☕ New Coffee Chat Request: ${data.name}`,
      html: `
        <h2>New Coffee Chat Request</h2>

        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>

        <h3>What They Want to Discuss</h3>
        <p>${data.stuckOn}</p>

        <h3>Preferred Time</h3>
        <p><strong>Day:</strong> ${data.preferredDate}</p>
        <p><strong>Time:</strong> ${data.preferredTime}</p>

        ${data.moreDetail || data.desiredOutcome || data.additionalContext ? `
          <h3>Additional Details</h3>
          ${data.moreDetail ? `<p><strong>More Detail:</strong><br>${data.moreDetail.replace(/\n/g, '<br>')}</p>` : ''}
          ${data.desiredOutcome ? `<p><strong>Desired Outcome:</strong><br>${data.desiredOutcome.replace(/\n/g, '<br>')}</p>` : ''}
          ${data.additionalContext ? `<p><strong>Additional Context:</strong><br>${data.additionalContext.replace(/\n/g, '<br>')}</p>` : ''}
        ` : ''}

        <hr>
        <p><small>Submitted on ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Lisbon' })} (Lisbon time)</small></p>
      `,
    });

    // Send confirmation to user
    await resend.emails.send({
      from: EMAIL_FROM,
      to: data.email,
      subject: 'Coffee Chat Request Received ☕',
      html: `
        <p>Hi ${data.name},</p>

        <p>Great! I'm looking forward to our chat about:</p>
        <blockquote style="border-left: 3px solid #2563eb; padding-left: 15px; color: #666;">
          ${data.stuckOn}
        </blockquote>

        <p><strong>Your preferred time:</strong> ${data.preferredDate} at ${data.preferredTime} (Lisbon time)</p>

        <p>I'll send you a calendar invite with a video link within the next 24 hours. The chat will be 30 minutes, focused and helpful.</p>

        <p>Please keep it to one main problem - we can always schedule follow-ups if needed.</p>

        <p>Looking forward to it!</p>

        <p>Best,<br>Bea</p>
      `,
    });

    return {
      success: true,
      message: 'Coffee chat request sent',
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: 'Failed to send email',
      error: error,
    };
  }
}
