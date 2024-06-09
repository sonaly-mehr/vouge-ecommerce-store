import type { Metadata } from "next";
import { Inter, Jost, Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../styles/globals.css";
// import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import { cn } from "@/lib/utils";
import Footer from '../../components/layouts/Footer'
import Navbar from "@/components/Navbar";

const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});
const jost = Jost({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Vouge Store",
  description: "Vouge Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(open_sans.className, jost.variable)}
      >
        <ClerkProvider>
          <ToasterProvider />
          <Navbar />
          {children}
          {/* <Footer/> */}
        </ClerkProvider>
      </body>
    </html>
  );
}
