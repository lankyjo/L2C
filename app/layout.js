import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Home/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " LankyJo | Creative Web Developer",
  description: "Explore LankyJo’s world of web development, where creativity meets functionality. I craft fast, responsive, and visually stunning websites."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-ivory font-poppins`}
      >
      <Header/>
      <main className="py-10">
      {children}
      </main>
        <Footer/>
      </body>
    </html>
  );
}
