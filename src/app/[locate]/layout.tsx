import "./globals.scss";
import "aos/dist/aos.css";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anibal Rivera - Website Portfolio",
  description: "Website to show my projects and information about me.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/img/preview.png",
    apple: [
      { url: "/img/preview.png" },
      { url: "/img/preview.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/img/preview.png"
      }
    ]
  }
};

interface ParamsProps {
  locate: string;
}
interface RootLayoutProps {
  children: React.ReactNode;
  params: ParamsProps;
}
/* eslint-disable */

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.log(error);
  }
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const messages = await getMessages(params.locate);

  return (
    <html lang={params.locate} className="scroll-smooth">
      <body className={`text-[#20396f] ${inter.className}`}>
        {messages && (
          <NextIntlClientProvider locale={params.locate} messages={messages}>
            {children}
          </NextIntlClientProvider>
        )}
        <Analytics />
      </body>
    </html>
  );
}
