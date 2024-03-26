import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Geek Space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-full container mx-auto">{children}</body>
    </html>
  );
}
