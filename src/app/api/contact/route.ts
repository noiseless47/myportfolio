import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create transporter (using Gmail as an example - you'll need to configure this)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password for Gmail
      },
    });

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact from ${name}" <${process.env.EMAIL_USER}>`, // More descriptive sender name
      to: process.env.CONTACT_EMAIL || 'asishyeleti2005@gmail.com', // Your email address
      replyTo: `"${name}" <${email}>`, // User's name and email for replies
      subject: `${name}: ${subject}`, // Include name in subject for inbox visibility
      text: `
New Portfolio Contact Form Submission

Contact Details:
- Name: ${name}
- Email: ${email}
- Subject: ${subject}
- Time: ${new Date().toLocaleString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'
      })} IST

Message:
${message}

---
Reply to this email to respond directly to ${name}.
Portfolio: https://asishkumaryeleti.vercel.app
      `,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Portfolio Contact</title>
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; min-height: 100vh;">
          
          <!-- Header Section -->
          <div style="padding: 60px 20px; text-align: center; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px);">
            <h1 style="color: #ffffff; margin: 0; font-size: 42px; font-weight: 300; letter-spacing: 2px; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              New Contact Message
            </h1>
            <div style="width: 80px; height: 3px; background: #ffffff; margin: 20px auto; border-radius: 2px; opacity: 0.8;"></div>
            <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 18px; font-weight: 300;">
              Someone reached out through your portfolio
            </p>
          </div>

          <!-- Main Content -->
          <div style="background: #ffffff; margin: 0; min-height: 60vh;">
            
            <!-- Contact Information -->
            <div style="padding: 80px 60px 40px; max-width: 800px; margin: 0 auto;">
              
              <!-- From Section -->
              <div style="margin-bottom: 50px;">
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <div style="width: 4px; height: 40px; background: linear-gradient(135deg, #667eea, #764ba2); margin-right: 20px; border-radius: 2px;"></div>
                  <h2 style="color: #2d3748; margin: 0; font-size: 24px; font-weight: 600;">From</h2>
                </div>
                <div style="padding-left: 24px;">
                  <p style="margin: 8px 0; color: #4a5568; font-size: 18px; line-height: 1.6;">
                    <strong style="color: #2d3748; font-weight: 600;">${name}</strong>
                  </p>
                  <p style="margin: 8px 0; color: #667eea; font-size: 16px;">
                    <a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-weight: 500;">${email}</a>
                  </p>
                  <p style="margin: 8px 0; color: #718096; font-size: 14px;">
                    ${new Date().toLocaleString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric', 
                      hour: '2-digit', 
                      minute: '2-digit',
                      timeZone: 'Asia/Kolkata'
                    })} IST
                  </p>
                </div>
              </div>

              <!-- Subject Section -->
              <div style="margin-bottom: 50px;">
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <div style="width: 4px; height: 40px; background: linear-gradient(135deg, #667eea, #764ba2); margin-right: 20px; border-radius: 2px;"></div>
                  <h2 style="color: #2d3748; margin: 0; font-size: 24px; font-weight: 600;">Subject</h2>
                </div>
                <div style="padding-left: 24px;">
                  <p style="margin: 0; color: #4a5568; font-size: 20px; font-weight: 500; line-height: 1.4;">
                    ${subject}
                  </p>
                </div>
              </div>

              <!-- Message Section -->
              <div style="margin-bottom: 60px;">
                <div style="display: flex; align-items: center; margin-bottom: 25px;">
                  <div style="width: 4px; height: 40px; background: linear-gradient(135deg, #667eea, #764ba2); margin-right: 20px; border-radius: 2px;"></div>
                  <h2 style="color: #2d3748; margin: 0; font-size: 24px; font-weight: 600;">Message</h2>
                </div>
                <div style="padding-left: 24px; border-left: 1px solid #e2e8f0; margin-left: 2px;">
                  <div style="background: #f7fafc; padding: 30px; border-radius: 8px; border-left: 4px solid #667eea;">
                    <p style="margin: 0; color: #2d3748; font-size: 16px; line-height: 1.8; white-space: pre-wrap;">${message}</p>
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div style="text-align: center; margin-top: 60px;">
                <a href="mailto:${email}?subject=Re: ${subject}" 
                   style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                          color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; 
                          font-weight: 600; font-size: 16px; margin: 0 10px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
                          transition: all 0.3s ease;">
                  Reply to ${name}
                </a>
                <a href="https://linkedin.com/in/asishkumaryeleti" 
                   style="display: inline-block; background: #0077b5; color: #ffffff; text-decoration: none; 
                          padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 0 10px;
                          box-shadow: 0 4px 15px rgba(0, 119, 181, 0.4);">
                  LinkedIn Profile
                </a>
              </div>

            </div>
          </div>

          <!-- Footer -->
          <div style="background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%); padding: 40px 20px; text-align: center;">
            <div style="max-width: 600px; margin: 0 auto;">
              <p style="color: #cbd5e0; margin: 0 0 10px 0; font-size: 16px; line-height: 1.6;">
                This message was sent through your portfolio contact form
              </p>
              <p style="color: #a0aec0; margin: 0; font-size: 14px;">
                Portfolio: <a href="https://asishkumaryeleti.vercel.app" style="color: #667eea; text-decoration: none;">asishkumaryeleti.vercel.app</a>
              </p>
            </div>
          </div>

        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
