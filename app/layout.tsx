import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Студия лазерной эпиляции | Гладкость и уверенность",
  description: "Профессиональная лазерная эпиляция на диодном лазере последнего поколения. Безболезненно, безопасно, результат после 1-й процедуры. Запишитесь онлайн!",
  keywords: "лазерная эпиляция, удаление волос, гладкая кожа, косметология, студия эпиляции",
  openGraph: {
    title: "Идеально гладкая кожа в нашей студии",
    description: "Забудьте о бритве навсегда. Эпиляция премиум-класса по доступным ценам.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
