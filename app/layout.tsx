import type { Metadata } from "next";
//import localFont from "next/font/local";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]}); 

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */

export const metadata: Metadata = {
  title: "David Urbano",
  description: "Building a future",
  themeColor: "#0A0E17",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
