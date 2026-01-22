import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valeron",
  description: "The best way to predict the future is to invent it.",
  icons: {
    icon: "/assets/v-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
