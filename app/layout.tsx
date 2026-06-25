import "@/styles/globals.css";
import MainNavbar from "@/components/navigation/main-navbar";
import Footer from "@/components/navigation/footer";
import { Analytics }
from "@vercel/analytics/react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Madinda Utilities",
  description:
    "Smart Metering, Utility Management, Revenue Protection and Smart City Infrastructure",

  keywords: [
    "smart metering",
    "AMI",
    "water metering",
    "electricity metering",
    "utility analytics",
    "revenue protection",
    "smart cities",
  ],

  openGraph: {
    title: "Madinda Utilities",
    description:
      "Africa's Utility Infrastructure Platform",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainNavbar />
        {children}
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}