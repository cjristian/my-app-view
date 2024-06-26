import type { Metadata } from "next";
import "@/app/ui/globals.css";


export const metadata: Metadata = {
  title: "ViewSoul",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
