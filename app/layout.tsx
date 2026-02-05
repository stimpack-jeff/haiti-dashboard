import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haiti Crisis Dashboard",
  description: "Real-time monitoring of Haiti TPS deadline and crisis developments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
