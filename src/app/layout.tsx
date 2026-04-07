import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Seattle Unlocked - Free Events & Local Stories",
  description: "The things worth doing in Seattle aren't behind a paywall. We find them. You show up.",
  openGraph: {
    title: "Seattle Unlocked",
    description: "Free events, local stories, and the stuff your algorithm won't show you.",
    siteName: "Seattle Unlocked",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
