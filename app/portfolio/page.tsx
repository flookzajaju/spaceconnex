import type { Metadata } from "next";
import TrustCenter from "../trust-center";
import { PageHero, SiteFooter, SiteHeader } from "../site-chrome";
export const metadata: Metadata = {
  title: "ผลงานของเรา | SPACE CONNEX™",
  description:
    "ผลงานของ ICONNEX WORLD และ SPACE CONNEX แยกตามหมวด PR, Production, International Network, Exhibition และ Media Relations",
};
export default function PortfolioPage() {
  return (
    <main>
      <SiteHeader active="portfolio" />
      <PageHero
        eyebrow="OUR PORTFOLIO"
        title={
          <>ผลงานจริงจากหลายความเชี่ยวชาญ</>
        }
        description="สำรวจผลงานที่รวบรวมใหม่ตามหมวด PR & Marketing, Production, International Network, Exhibition & Roadshow และ Media Relations"
        visual="network"
      />
      <section className="portfolio-page section">
        <TrustCenter />
      </section>
      <SiteFooter />
    </main>
  );
}
