import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fraunces = localFont({
  src: [
    {
      path: "../../public/fonts/Fraunces-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Fraunces-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const rebond = localFont({
  src: [
    {
      path: "../../public/fonts/ESRebondGrotesque-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ESRebondGrotesque-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ESRebondGrotesque-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-rebond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lem Bundle — Save up to 40% OFF | Hello Nancy",
  description:
    "Add a Lem Bundle and save up to 40%. Pick 2 or 3 packs of Hello Nancy's Lem clitoral massager — best for besties, partners, and gifting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${rebond.variable} antialiased`}
    >
      <body className="bg-background text-foreground font-body min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
