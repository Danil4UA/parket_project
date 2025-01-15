import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    return notFound();
  }
  const messages = await getMessages(locale);
  return (
    <html lang={locale} dir={locale === "he" ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="content-page">
            <div className="page-wrapper">{children}</div>
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
