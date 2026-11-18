import type { Metadata } from "next";
import { Geist_Mono, Bowlby_One, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Suspense } from "react";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "700", "900"],
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
      className={`${poppins.variable} ${geistMono.variable} ${bowlbyOne.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Header />
        <div className="font-mono max-w-6xl mx-auto mt-8 font-poppins lg:p-0 px-4">
          <Suspense fallback={""}>{children}</Suspense>
        </div>
      </body>
    </html>
  );
}
