import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { plush } from "@/lib/fonts/plush";
import ButtonLink from "@/lib/ui/shared/ButtonLink";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plush.className}  bg-[#fbfbfb] antialiased  mx-auto`}>
        <ButtonLink
          className="sr-only focus-visible:not-sr-only focus-visible:inline  focus-visible:fixed focus-visible:top-0 focus-visible:left-0 z-100"
          variant="solid"
          color="blue"
          href="#main"
        >
          Skocz do treści
        </ButtonLink>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
