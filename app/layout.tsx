import type { Metadata } from "next";
import { Geist_Mono, Bowlby_One } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bowlbyOne = Bowlby_One({
  variable: "--font-bowlby-one",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Bopp!Lab",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${bowlbyOne.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Header />
        <div className="font-mono max-w-6xl mx-auto mt-8">{children}</div>
      </body>
    </html>
  );
}
