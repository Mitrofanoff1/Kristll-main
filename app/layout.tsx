import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://xn----otbabmiiibp6a6a6f5ac.xn--p1ai'), 
  title: "Kristll Studio — лазерная эпиляция в Мурино",
  description: "Комфортная лазерная эпиляция на диодном лазере с охлаждением. Камерная студия без суеты и потока: деликатный подход и внимание к каждой зоне. Про бритву, раздражение и вросшие волосы — можно забыть. Скидка 30% на первый визит.",
  keywords: "лазерная эпиляция, эпиляция в Мурино, диодный лазер, удаление волос",
  icons: { icon: '/icon.png' },
  alternates: {
    canonical: "https://xn----otbabmiiibp6a6a6f5ac.xn--p1ai",
  },
  openGraph: {
    title: "Kristll Studio — лазерная эпиляция в Мурино",
    description: "Комфортная лазерная эпиляция на диодном лазере с охлаждением. Камерная студия без суеты и потока: деликатный подход и внимание к каждой зоне. Про бритву, раздражение и вросшие волосы — можно забыть. Скидка 30% на первый визит.",
    type: "website",
    url: "https://xn----otbabmiiibp6a6a6f5ac.xn--p1ai",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kristll Studio — лазерная эпиляция в Мурино",
    description: "Комфортная лазерная эпиляция на диодном лазере с охлаждением. Скидка 30% на первый визит.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = `{
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Kristll Studio",
    "url": "https://xn----otbabmiiibp6a6a6f5ac.xn--p1ai",
    "telephone": "+7-921-875-81-96",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Шувалова, д.12",
      "addressLocality": "Мурино",
      "addressCountry": "RU"
    },
    "sameAs": ["https://vk.com/kristll_studio","https://t.me/kristll_studio"],
    "priceRange": "$$"
  }`;

  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        {/* Yandex Verification */}
        <meta name="yandex-verification" content="ee474db63ab26e16" />
        
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9CZT8NKQYW" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9CZT8NKQYW', {
              page_path: window.location.pathname,
            });
          `,
        }} />
        
        {/* Yandex.Metrika */}
        <Script id="yandex-metrika" strategy="lazyOnload" dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
            ym(106981105, 'init', {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `,
        }} />
      </head>
      <body className={inter.className}>
        {/* Structured data for search engines */}
        <Script id="ld-json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: jsonLd }} />
        {children}
        <Script src="https://w1385499.yclients.com/widgetJS" strategy="afterInteractive" charSet="UTF-8" />
      </body>
    </html>
  );
}