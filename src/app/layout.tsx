import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import ReactQueryProvider from "@/utilities/react-query-provider";
import Header from "@/components/header/header";

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
      <body className="h-screen w-full container mx-auto bg-blue-600">
        <Toaster
          position="top-right"
          toastOptions={{
            className: "bg-gray-900 rounded-md shadow-xl text-sm text-white",
            duration: 5000,
            style: {
              marginTop: "60px",
              background: "#27272A",
              color: "#fff",
            },
          }}
        />
        <ReactQueryProvider>
          <main className="bg-white grow h-full">
            <Header />
            {children}
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
