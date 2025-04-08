import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../i18n/config"; // Import i18n configuration
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/config";
import LanguageSwitcher from "../components/LanguageSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VA Hire Application",
  description: "VA Hire application with internationalization support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={i18n.language}>
      <I18nextProvider i18n={i18n}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="p-4 border-b">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-xl font-bold">VA Hire</h1>
              <LanguageSwitcher />
            </div>
          </header>
          <main className="container mx-auto p-4">
            {children}
          </main>
        </body>
      </I18nextProvider>
    </html>
  );
}
