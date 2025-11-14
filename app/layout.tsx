import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

import { Header } from "@/app/components/Header";

const robotoSans = Roboto({
  weight: "400",
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  weight: "400",
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Track your finances adn create a budget",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${robotoSans.className} ${robotoMono.className}`}>
          <Header />
          <main className="container">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
