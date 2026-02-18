import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'), 
  title: "Безболезненная лазерная эпиляция в Мурино | Kristll Studio",
  description: "Скидка -20% на первую процедуру. От 480 рублей. Качественная эпиляция по доступным ценам. Гарантируем: без боли.",
  icons: { icon: '/icon.png' },
  openGraph: {
    title: "Безболезненная лазерная эпиляция в Мурино",
    description: "Скидка -20% на первую процедуру. Качественная эпиляция по доступным ценам. Гарантируем: без боли.",
    type: "website",
    url: "https://kristll.vercel.app", // Заменишь на свой домен позже
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Script src="https://w1385499.yclients.com/widgetJS" strategy="afterInteractive" charSet="UTF-8" />
      </body>
    </html>
  );
}