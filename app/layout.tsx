import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import ScrollManager from "@/components/ScrollManager";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sandwich Ghar Ka",
  description: "Fresh Homemade Sandwiches & More",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>

  <div className="floating-bg">
    <div
      className="glow-circle"
      style={{
        top: "45%",
        left: "35%",
      }}
    />
  </div>

  <ScrollManager />

  <SmoothScroll>
    {children}
  </SmoothScroll>


      </body>
    </html>
  );
}