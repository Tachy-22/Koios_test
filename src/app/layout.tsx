import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import ScreenWidth from "@/components/screen-width";
import NextProviders from "./circularCarousel/NextProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koios",
  description: "An Internship test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" relative">
      <body
        className={`${inter.className}  min-h-screen h-scrren overflow-x-hidden  max-w-screen flex justify-center items-center`}
      >
        <NextProviders>
          {children}
          <ScreenWidth />
        </NextProviders>
        {/* <Nav /> */}
      </body>
    </html>
  );
}
