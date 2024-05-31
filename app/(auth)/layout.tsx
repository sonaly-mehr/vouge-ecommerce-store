import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css"

import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vouge - Store Auth",
  description: "Next.js 14 Vouge Ecommerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
