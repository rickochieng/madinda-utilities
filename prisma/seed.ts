import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  const org =
    await prisma.organization.create({
      data: {
        name: "City of Pretoria",
        industry: "Municipality",
        country: "South Africa",
      },
    });

  await prisma.meter.createMany({
    data: [
      {
        serialNumber: "WM10001",
        type: "WATER",
        status: "ONLINE",
        location: "Hatfield",
        organizationId: org.id,
      },
      {
        serialNumber: "EM20001",
        type: "ELECTRICITY",
        status: "ONLINE",
        location: "Pretoria East",
        organizationId: org.id,
      },
    ],
  });
}

main();