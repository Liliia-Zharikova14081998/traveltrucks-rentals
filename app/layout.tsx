import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TanStackProvider from "../components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ['400', '500', '600'],
});


export const metadata: Metadata = {
  title: {
    default: 'Travel Trucks Rentals',
    template: '%s | Travel Trucks',
  },
  description:
    "Rent the perfect travel truck for your next adventure!",
  openGraph: {
    title: 'Travel Trucks',
    description: 'Find your perfect camper and start your journey today.',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Travel Trucks Rentals',
      },
    ],
     locale: 'en-US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <TanStackProvider>
          <Header />
            <main>
               {children}
            </main>
        </TanStackProvider>
      </body>
    </html>
  );
}
