import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "../components/ScrollToTop";

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Clyra | Construction Team Management Platform",
  description:
    "Clyra is the construction operating system for accountable delivery, lifecycle execution, and financial control.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${dmSans.variable} bg-[#f6f3ee] text-[#121315] antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
