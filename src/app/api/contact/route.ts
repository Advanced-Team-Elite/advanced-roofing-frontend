import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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

        return NextResponse.json(newContact, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
