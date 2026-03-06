import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const newContact = await prisma.contactSubmission.create({
            data: {
                firstName: body.firstName,
                lastName: body.lastName,
                phone: body.phone,
                email: body.email,
                address: body.address,
                isNewCustomer: body.isNewCustomer,
                message: body.message,
            },
        });

        // 2. Lógica de Notificación según LEAD_DESTINATION
        const destination = process.env.LEAD_DESTINATION || 'EMAIL';
        const notificationEmail = process.env.NOTIFICATION_EMAIL;

        if ((destination === 'EMAIL' || destination === 'BOTH') && notificationEmail) {
            try {
                await resend.emails.send({
                    from: 'Advanced Leads <info@contact.advancedteamelite.com>',
                    to: notificationEmail,
                    subject: `New Lead: ${body.firstName} ${body.lastName}`,
                    html: `
                        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
                            <h2 style="color: #00589e;">New Contact Form Submission</h2>
                            <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
                            <p><strong>Email:</strong> ${body.email}</p>
                            <p><strong>Phone:</strong> ${body.phone}</p>
                            <p><strong>Address:</strong> ${body.address || 'N/A'}</p>
                            <p><strong>New Customer:</strong> ${body.isNewCustomer ? 'Yes' : 'No'}</p>
                            <p><strong>Message:</strong></p>
                            <div style="background: #f4f4f4; padding: 10px; border-radius: 5px; border-left: 4px solid #00589e;">
                                ${body.message}
                            </div>
                            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                            <p style="font-size: 12px; color: #888;">Lead ID: ${newContact.id} | Source: Website Form</p>
                        </div>
                    `,
                });
            } catch (emailError) {
                console.error("Email Notification Error:", emailError);
            }
        }

        // 3. Futuro switch para JobNimbus
        if (destination === 'JOBNIMBUS' || destination === 'BOTH') {
            console.log("Integration with JobNimbus will be triggered here.");
        }

        return NextResponse.json(newContact, { status: 201 });

    } catch (error) {
        console.error("Critical API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}