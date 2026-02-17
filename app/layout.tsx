import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'), 
  title: "Kristll Studio | Студия лазерной эпиляции в Мурино",
  description: "Безболезненная лазерная эпиляция. Скидка -20% на первую процедуру. От 480 рублей. Забудьте о бритве навегда. Гарантируем: без боли.",
  icons: { icon: '/icon.png' },
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