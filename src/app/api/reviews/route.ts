import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const newReview = await prisma.review.create({
            data: {
                fullName: body.fullName,
                city: body.city,
                state: body.state,
                title: body.title,
                review: body.review,
                email: body.email,
                rating: body.rating,
                approved: true,
            },
        });


        return NextResponse.json(newReview, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to create review" },
            { status: 500 }
        );
    }
}
