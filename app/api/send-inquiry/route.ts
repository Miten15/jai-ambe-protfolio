import { type NextRequest, NextResponse } from "next/server"
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { formData, emailData } = await request.json()

    // Validate required environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable")
      return NextResponse.json(
        { success: false, message: "Email service not configured" }, 
        { status: 500 }
      )
    }

    if (!process.env.FROM_EMAIL || !process.env.TO_EMAIL) {
      console.error("Missing FROM_EMAIL or TO_EMAIL environment variables")
      return NextResponse.json(
        { success: false, message: "Email addresses not configured" }, 
        { status: 500 }
      )
    }

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" }, 
        { status: 400 }
      )
    }

    // Create professional email template
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Project Inquiry</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .section { background: white; margin: 20px 0; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .section h3 { color: #667eea; margin-top: 0; }
          .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
          .info-item { padding: 10px; background: #f1f3f4; border-radius: 5px; }
          .info-label { font-weight: bold; color: #555; }
          .message-box { background: #fff; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; padding: 20px; color: #666; font-size: 14px; }
          .next-steps { background: #e8f4f8; border: 1px solid #b8e6ff; border-radius: 8px; padding: 20px; }
          .next-steps ol { margin: 10px 0; padding-left: 20px; }
          .next-steps li { margin: 5px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 New Project Inquiry Received!</h1>
            <p>A potential client has reached out through your portfolio</p>
          </div>
          
          <div class="content">
            <div class="section">
              <h3>👤 Client Information</h3>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Name:</div>
                  <div>${formData.name}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Email:</div>
                  <div><a href="mailto:${formData.email}">${formData.email}</a></div>
                </div>
                <div class="info-item">
                  <div class="info-label">Phone:</div>
                  <div>${formData.phone || "Not provided"}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Company:</div>
                  <div>${formData.company || "Not provided"}</div>
                </div>
              </div>
            </div>

            <div class="section">
              <h3>💼 Project Details</h3>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Project Type:</div>
                  <div>${formData.projectType || "Not specified"}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Budget Range:</div>
                  <div>${formData.budget || "Not specified"}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Timeline:</div>
                  <div>${formData.timeline || "Not specified"}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Service Price:</div>
                  <div>${emailData.servicePrice || "Custom quote"}</div>
                </div>
              </div>
            </div>

            <div class="section">
              <h3>💬 Project Description</h3>
              <div class="message-box">
                ${formData.message.replace(/\n/g, '<br>')}
              </div>
            </div>

            <div class="next-steps">
              <h3>📋 Recommended Next Steps</h3>
              <ol>
                <li><strong>Review Requirements:</strong> Analyze the project scope and requirements</li>
                <li><strong>Research & Estimate:</strong> Prepare timeline and cost estimates</li>
                <li><strong>Prepare Proposal:</strong> Create a detailed project proposal</li>
                <li><strong>Schedule Call:</strong> Book a consultation call within 24 hours</li>
                <li><strong>Send Response:</strong> Reply with proposal and next steps</li>
              </ol>
            </div>

            <div class="footer">
              <p><strong>⏰ Response Time Goal:</strong> Within 24 hours</p>
              <p><em>This inquiry was submitted through your portfolio website on ${new Date().toLocaleDateString('en-IN', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</em></p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `

    // Send email using Resend
    const result = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.TO_EMAIL!,
      subject: `🚀 New Project Inquiry: ${formData.projectType || "General Inquiry"} - ${formData.name}`,
      html: emailHtml,
      replyTo: formData.email, // Allow direct reply to the client
    })

    console.log("Email sent successfully:", result)

    // Also send a confirmation email to the client
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Project Inquiry Received</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .section { background: white; margin: 20px 0; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .footer { text-align: center; margin-top: 30px; padding: 20px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Thank You, ${formData.name}!</h1>
            <p>Your project inquiry has been received</p>
          </div>
          
          <div class="content">
            <div class="section">
              <h3>What happens next?</h3>
              <ul>
                <li>I'll review your requirements within 24 hours</li>
                <li>Prepare a detailed proposal with timeline and pricing</li>
                <li>Schedule a free consultation call to discuss your project</li>
                <li>Answer any questions and refine the project scope</li>
              </ul>
            </div>

            <div class="section">
              <h3>Your Project Details</h3>
              <p><strong>Project Type:</strong> ${formData.projectType || "Not specified"}</p>
              <p><strong>Budget Range:</strong> ${formData.budget || "Not specified"}</p>
              <p><strong>Timeline:</strong> ${formData.timeline || "Not specified"}</p>
            </div>

            <div class="footer">
              <p>Best regards,<br><strong>Jai Ambe</strong></p>
              <p><em>Looking forward to working with you!</em></p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `

    // Send confirmation to client
    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: formData.email,
      subject: `✅ Project Inquiry Received - We'll be in touch within 24 hours!`,
      html: clientEmailHtml,
    })

    return NextResponse.json({ 
      success: true, 
      message: "Inquiry sent successfully! Check your email for confirmation." 
    })

  } catch (error) {
    console.error("Error sending inquiry:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send inquiry. Please try again or contact us directly." }, 
      { status: 500 }
    )
  }
}
