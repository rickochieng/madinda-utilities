import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.organization) {
      return NextResponse.json(
        {
          error: "Organization is required",
        },
        {
          status: 400,
        }
      );
    }

    const application =
      await prisma.pilotProjectApplication.create({
        data: {
          organization: body.organization,
          contactName: body.contactName,
          email: body.email,
          phone: body.phone,
          country: body.country,
          industry: body.industry,
          utilityType: body.utilityType,
          numberOfMeters: Number(body.numberOfMeters),
          description: body.description,
          expectedOutcome: body.expectedOutcome,
        },
      });

    return NextResponse.json({
      success: true,
      application,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit application",
      },
      {
        status: 500,
      }
    );
  }
}