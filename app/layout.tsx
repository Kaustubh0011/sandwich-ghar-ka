import SmoothScroll from "@/components/SmoothScroll";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ScrollManager from "@/components/ScrollManager";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
});

export const metadata: Metadata = {
  title: "Sandwich Ghar Ka",
  description: "Fresh Homemade Sandwiches & More",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body className={poppins.className}>
        <ScrollManager />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>

    </html>

  );

}