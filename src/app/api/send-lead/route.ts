// app/api/send-lead/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TEAM_EMAIL = process.env.NOTIFICATION_EMAIL ?? "bbalabarca@advancedteamelite.com";

// ─── Template: email al equipo ─────────────────────────────────────────────────
function teamEmailHtml(body: any): string {
    const { firstName, lastName, email, phone, address, sendPdf, quote } = body;

    const sectionsRows = quote.sections
        ? quote.sections.map((sec: any, i: number) => `
            <tr style="background: ${i % 2 === 0 ? '#f9fafb' : '#fff'};">
                <td style="padding: 8px 12px; font-weight: 600; color: #111;">${sec.name}</td>
                <td style="padding: 8px 12px; color: #4b5563;">
                    ${sec.material === "flat_tpo"
            ? "Flat Roof (TPO)"
            : `Asphalt Shingles — ${sec.pitch} pitch`
        }
                </td>
                <td style="padding: 8px 12px; color: #4b5563; text-align: right;">${sec.areaSqFt?.toLocaleString()} sq ft</td>
            </tr>
        `).join("")
        : `<tr><td colspan="3" style="padding: 8px 12px; color: #6b7280;">${quote.sqft?.toLocaleString()} sq ft total</td></tr>`;

    return `
    <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
        <div style="background: #1e3a5f; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #fff; margin: 0; font-size: 20px;">🏠 New Roof Quote Lead</h2>
            <p style="color: #93c5fd; margin: 4px 0 0; font-size: 13px;">Advanced Roofing Team · Instant Estimate Widget</p>
        </div>

        <div style="background: #fff; padding: 32px; border: 1px solid #e5e7eb; border-top: none;">

            <h3 style="color: #1e3a5f; font-size: 15px; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.05em;">
                Contact Info
            </h3>
            <table style="width: 100%; font-size: 14px; border-collapse: collapse; margin-bottom: 28px;">
                <tr><td style="padding: 6px 0; color: #6b7280; width: 140px;">Name:</td><td style="font-weight: 600;">${firstName} ${lastName}</td></tr>
                <tr><td style="padding: 6px 0; color: #6b7280;">Email:</td><td><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td></tr>
                <tr><td style="padding: 6px 0; color: #6b7280;">Phone:</td><td><a href="tel:${phone}" style="color: #2563eb; font-weight: 700; font-size: 15px;">${phone}</a></td></tr>
                <tr><td style="padding: 6px 0; color: #6b7280;">Address:</td><td>${address || "Not provided"}</td></tr>
                <tr><td style="padding: 6px 0; color: #6b7280;">Quote sent:</td><td>${sendPdf ? "✅ Yes" : "❌ No"}</td></tr>
            </table>

            <h3 style="color: #1e3a5f; font-size: 15px; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.05em;">
                Roof Sections
            </h3>
            <table style="width: 100%; font-size: 13px; border-collapse: collapse; margin-bottom: 28px; border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb;">
                <thead>
                    <tr style="background: #eff6ff;">
                        <th style="padding: 8px 12px; text-align: left; color: #1e3a5f; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Section</th>
                        <th style="padding: 8px 12px; text-align: left; color: #1e3a5f; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Material / Pitch</th>
                        <th style="padding: 8px 12px; text-align: right; color: #1e3a5f; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Area</th>
                    </tr>
                </thead>
                <tbody>${sectionsRows}</tbody>
                <tfoot>
                    <tr style="background: #eff6ff; border-top: 1px solid #bfdbfe;">
                        <td colspan="2" style="padding: 8px 12px; font-weight: 700; color: #1e3a5f;">Total</td>
                        <td style="padding: 8px 12px; font-weight: 900; color: #1e3a5f; text-align: right;">${quote.sqft?.toLocaleString()} sq ft</td>
                    </tr>
                </tfoot>
            </table>

            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 20px;">
                <div style="border-top: 1px solid #bfdbfe; padding-top: 12px; display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-weight: 900; font-size: 15px; color: #1e3a5f; text-transform: uppercase;">Total Estimate</span>
                    <span style="font-weight: 900; font-size: 28px; color: #2563eb;">$${quote.total?.toLocaleString()}</span>
                </div>
            </div>
        </div>

        <div style="background: #f9fafb; padding: 16px 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; font-size: 12px; color: #9ca3af; text-align: center;">
            Lead from Instant Estimate Widget · Advanced Roofing Team · Chicago, IL
        </div>
    </div>
    `;
}

// ─── Template: email al cliente ────────────────────────────────────────────────
function clientEmailHtml(body: any): string {
    const { firstName, quote } = body;

    const sectionsRows = quote.sections
        ? quote.sections.map((sec: any, i: number) => `
            <tr style="background: ${i % 2 === 0 ? '#f9fafb' : '#fff'};">
                <td style="padding: 8px 12px; font-weight: 600; color: #111;">${sec.name}</td>
                <td style="padding: 8px 12px; color: #4b5563;">
                    ${sec.material === "flat_tpo"
            ? "Flat Roof (TPO)"
            : `Asphalt Shingles — ${sec.pitch} pitch`
        }
                </td>
                <td style="padding: 8px 12px; color: #4b5563; text-align: right;">${sec.areaSqFt?.toLocaleString()} sq ft</td>
            </tr>
        `).join("")
        : `<tr><td colspan="3" style="padding: 8px 12px; color: #6b7280;">${quote.sqft?.toLocaleString()} sq ft total</td></tr>`;

    return `
    <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
        <div style="background: #1e3a5f; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #fff; margin: 0; font-size: 20px;">Your Roof Estimate is Ready</h2>
            <p style="color: #93c5fd; margin: 4px 0 0; font-size: 13px;">Advanced Roofing Team · Chicago, IL</p>
        </div>

        <div style="background: #fff; padding: 32px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="font-size: 15px;">Hi ${firstName},</p>
            <p style="font-size: 14px; color: #4b5563;">
                Thank you for using our instant estimator. Here's a summary of your roofing quote for
                <strong>${quote.address || "your property"}</strong>.
            </p>

            <table style="width: 100%; font-size: 13px; border-collapse: collapse; margin: 24px 0; border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb;">
                <thead>
                    <tr style="background: #eff6ff;">
                        <th style="padding: 8px 12px; text-align: left; color: #1e3a5f; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Section</th>
                        <th style="padding: 8px 12px; text-align: left; color: #1e3a5f; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Material</th>
                        <th style="padding: 8px 12px; text-align: right; color: #1e3a5f; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">Area</th>
                    </tr>
                </thead>
                <tbody>${sectionsRows}</tbody>
            </table>

            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                <table style="width: 100%; font-size: 13px; color: #6b7280; border-collapse: collapse; margin-bottom: 14px;">
                    <tr>
                        <td style="padding: 5px 0; width: 160px;">Total Roof Area:</td>
                        <td style="font-weight: 600; color: #111;">${quote.sqft?.toLocaleString()} sq ft</td>
                    </tr>
                    ${quote.sectionsCount ? `
                    <tr>
                        <td style="padding: 5px 0;">Sections:</td>
                        <td style="font-weight: 600; color: #111;">${quote.sectionsCount} section${quote.sectionsCount !== 1 ? "s" : ""}</td>
                    </tr>` : ""}
                </table>
                <div style="border-top: 1px solid #bfdbfe; padding-top: 12px; display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-weight: 900; font-size: 15px; color: #1e3a5f; text-transform: uppercase;">Total Estimate</span>
                    <span style="font-weight: 900; font-size: 28px; color: #2563eb;">$${quote.total?.toLocaleString()}</span>
                </div>
            </div>

            <p style="font-size: 13px; color: #6b7280;">
                One of our specialists will contact you within <strong style="color: #111;">24 hours</strong> to schedule a free on-site inspection and finalize your quote.
            </p>

            <p style="font-size: 12px; color: #9ca3af; margin-top: 24px; font-style: italic;">
                *This is an automated estimate. Final price subject to on-site inspection.
            </p>
        </div>

        <div style="background: #f9fafb; padding: 16px 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; font-size: 12px; color: #9ca3af; text-align: center;">
            Advanced Roofing Team · Chicago, IL · advancedteamelite.com
        </div>
    </div>
    `;
}

// ─── POST handler ───────────────────────────────────────────────────────────────
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, sendPdf, quote } = body;

        // 1. Email al equipo — siempre
        await resend.emails.send({
            from: "Advanced Leads <info@contact.advancedteamelite.com>",
            to: TEAM_EMAIL,
            subject: `New Roof Lead: ${firstName} ${lastName} — $${quote.total?.toLocaleString()}`,
            html: teamEmailHtml(body),
        });

        // 2. Email al cliente — solo si marcó el checkbox
        if (sendPdf && email) {
            await resend.emails.send({
                from: "Advanced Roofing Team <info@contact.advancedteamelite.com>",
                to: email,
                subject: "Your Roof Estimate — Advanced Roofing Team",
                html: clientEmailHtml(body),
            });
        }

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error("Send Lead API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}