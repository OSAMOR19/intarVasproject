import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validatePuzzleAnswer } from "@/lib/puzzle";

const resend = new Resend("re_Tadpj79T_27eSiFhauRax21Qpv3wVmTgL");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, subject, message, puzzleQuestion, puzzleAnswer } = body;

    // Validate puzzle answer (bot protection)
    if (!puzzleQuestion || puzzleAnswer === undefined) {
      return NextResponse.json(
        { success: false, message: "Security question is required" },
        { status: 400 }
      );
    }

    const isPuzzleValid = validatePuzzleAnswer(puzzleQuestion, puzzleAnswer);
    if (!isPuzzleValid) {
      return NextResponse.json(
        { success: false, message: "Failed puzzle validation. Please try again." },
        { status: 400 }
      );
    }

    // NOTE: Using onboarding@resend.dev for testing until intarvas.com domain is verified
    // To verify your domain, visit: https://resend.com/domains
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Resend's test email (works without domain verification)
      to: "support@intarvas.com", // Your Resend account email (only email that can receive test emails)
      reply_to: email, // User's email for replies
      subject: subject || "New Contact Form Message from IntarVAS",
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New Message from ${fullName}</h2>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
          <p style="color: #666; font-size: 12px;">
            This message was sent from the IntarVAS contact form.<br/>
            Reply directly to this email to respond to ${fullName}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
      data,
    });
  } catch (err: any) {
    console.error("Server error:", err);
    return NextResponse.json(
      { success: false, message: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}

