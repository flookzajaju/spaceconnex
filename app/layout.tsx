import type { Metadata } from "next";
import "./globals.css";
import MotionEnhancer from "./motion-enhancer";
import AuthProvider from "./auth-provider";

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000");
const socialImage = new URL("/og.png", siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "SPACE CONNEX™",
  description: "พื้นที่ว่าง? เปลี่ยนเป็นรายได้ทันที — SPACE CONNEX™ จับคู่แบรนด์กับพื้นที่ที่เหมาะสม เพื่อสร้างสินค้า กิจกรรม ลูกค้า และรายได้ใหม่",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "SPACE CONNEX™",
    description: "พื้นที่ว่าง? เปลี่ยนเป็นรายได้ทันที — จับคู่สินค้าและพื้นที่เพื่อสร้างรายได้ร่วมกัน",
    type: "website",
    url: siteUrl,
    images: [{ url: socialImage, width: 1200, height: 630, alt: "SPACE CONNEX™ — พื้นที่ว่าง? เปลี่ยนเป็นรายได้ทันที" }],
  },
  twitter: { card: "summary_large_image", title: "SPACE CONNEX™", description: "พื้นที่ว่าง? เปลี่ยนเป็นรายได้ทันที", images: [socialImage] },
  icons: { icon: "/space-connex-brand-navy.jpg", shortcut: "/space-connex-brand-navy.jpg", apple: "/space-connex-brand-navy.jpg" },
  referrer: "no-referrer",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body><AuthProvider><MotionEnhancer />{children}</AuthProvider></body></html>;
}
