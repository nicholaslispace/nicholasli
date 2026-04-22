import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nicholasli.space"),
  title: "Nicholas Li",
  description:
    "PM by day, builder by night. Government digital products and side projects.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nicholas Li",
    description:
      "PM by day, builder by night. Government digital products and side projects.",
    url: "https://nicholasli.space",
    siteName: "Nicholas Li",
    locale: "en_SG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-dvh bg-[#fafafa] text-zinc-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
