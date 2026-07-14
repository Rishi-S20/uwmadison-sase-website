import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway-var",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "SASE at UW–Madison",
  description:
    "The founding chapter of the Society of Asian Scientists and Engineers at the University of Wisconsin–Madison.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
