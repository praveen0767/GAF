import type { Metadata } from "next";
import { Noto_Sans_Telugu } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const notoTelugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-telugu",
});

export const metadata: Metadata = {
  title: "GAF — Godavari Agenda Forum",
  description: "A modern public intelligence and governance platform designed to organize people's voices into structured, technology-driven public action.",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`scroll-smooth ${locale === 'te' ? notoTelugu.variable : ''}`}>
      <body className={locale === 'te' ? 'font-telugu' : ''}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
