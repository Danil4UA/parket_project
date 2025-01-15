import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
