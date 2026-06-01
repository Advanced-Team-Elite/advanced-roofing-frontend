import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, phone, canText, message, email, type } = body;

        const notificationEmail = process.env.NOTIFICATION_EMAIL;
        const fullName = `${firstName} ${lastName}`;

        const subjects = {
            call:  `🚨 Action Required: Call ${fullName} - ${phone}`,
            text:  `💬 New Text Request from ${fullName} - ${phone}`,
            email: `📧 New Email Inquiry from ${fullName}`,
        };

        const contactBlock = type === 'email'
            ? `
                <div style="margin-bottom: 20px; padding: 15px; background-color: #f0f7ff; border-radius: 8px; border: 1px solid #c2e0ff;">
                    <span style="font-size: 12px; text-transform: uppercase; color: #00589e; font-weight: bold; letter-spacing: 1px;">Email Address</span>
                    <div style="font-size: 20px; font-weight: 800; color: #00589e; margin-top: 5px;">
                        <a href="mailto:${email}" style="text-decoration: none; color: #00589e;">${email}</a>
                    </div>
                    <p style="margin: 5px 0 0 0; font-size: 13px; color: #555;">
                        Phone: <strong>${phone}</strong> | SMS Allowed: <strong>${canText === 'yes' ? 'YES' : 'NO'}</strong>
                    </p>
                </div>
            `
            : `
                <div style="margin-bottom: 20px; padding: 15px; background-color: #f0f7ff; border-radius: 8px; border: 1px solid #c2e0ff;">
                    <span style="font-size: 12px; text-transform: uppercase; color: #00589e; font-weight: bold; letter-spacing: 1px;">Primary Phone</span>
                    <div style="font-size: 24px; font-weight: 800; color: #00589e; margin-top: 5px;">
                        <a href="tel:${phone}" style="text-decoration: none; color: #00589e;">${phone}</a>
                    </div>
                    <p style="margin: 5px 0 0 0; font-size: 13px; color: #555;">
                        SMS Allowed: <strong>${canText === 'yes' ? 'YES' : 'NO'}</strong> | Preferred: <strong>${type}</strong>
                    </p>
                </div>
            `;

        const messageBlock = type === 'email'
            ? '' // email no tiene message
            : `
                <div style="margin-bottom: 20px;">
                    <span style="font-size: 12px; text-transform: uppercase; color: #666; font-weight: bold; letter-spacing: 1px;">Message Details</span>
                    <div style="margin-top: 8px; padding: 15px; background-color: #fafafa; border-left: 4px solid #d1d5db; border-radius: 4px; font-style: italic; color: #444;">
                        "${message || 'No message provided.'}"
                    </div>
                </div>
            `;

        const ctaBlock = type === 'email'
            ? `<a href="mailto:${email}" style="display: block; background-color: #00589e; color: white; text-align: center; padding: 15px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px; margin-top: 10px;">
                Click to Reply by Email
               </a>`
            : `<a href="tel:${phone}" style="display: block; background-color: #00589e; color: white; text-align: center; padding: 15px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px; margin-top: 10px;">
                ${type === 'text' ? 'Click to Text Now' : 'Click to Call Now'}
               </a>`;

        const typeLabels: Record<string, string> = {
            call:  '📞 Callback Request',
            text:  '💬 Text Request',
            email: '📧 Email Inquiry',
        };

        if (notificationEmail) {
            await resend.emails.send({
                from: 'Advanced Leads <info@contact.advancedteamelite.com>',
                to: notificationEmail,
                subject: subjects[type as keyof typeof subjects] ?? `New Contact from ${fullName}`,
                html: `
                    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden;">
                        <div style="background-color: #00589e; padding: 20px; color: white;">
                            <h2 style="margin: 0; font-size: 20px;">${typeLabels[type] ?? 'New Contact Request'}</h2>
                            <p style="margin: 5px 0 0 0; opacity: 0.9;">A potential customer is waiting for your response.</p>
                        </div>
                        
                        <div style="padding: 24px; background-color: #ffffff;">
                            <div style="margin-bottom: 20px;">
                                <span style="font-size: 12px; text-transform: uppercase; color: #666; font-weight: bold; letter-spacing: 1px;">Customer Name</span>
                                <div style="font-size: 18px; font-weight: 700; color: #000;">${fullName}</div>
                            </div>

                            ${contactBlock}
                            ${messageBlock}
                            ${ctaBlock}
                        </div>
                        
                        <div style="background-color: #f8f9fa; padding: 15px; text-align: center; border-top: 1px solid #eeeeee;">
                            <p style="font-size: 11px; color: #888; margin: 0;">
                                Source: <strong>Advanced Contact Widget</strong><br>
                                Received on: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CST
                            </p>
                        </div>
                    </div>
                `,
            });
        }

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error('Callback request error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}