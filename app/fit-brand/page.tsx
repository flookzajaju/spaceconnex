import type { Metadata } from "next";
import { FitDimensionPage } from "../site-chrome";

export const metadata: Metadata = {
  title: "Brand Fit | SPACE CONNEX™",
  description: "ภาพลักษณ์ คุณค่า และประสบการณ์ที่ทั้งสองฝ่ายต้องการสร้างร่วมกัน — ด้านสุดท้ายของ The Fit System",
};

export default function FitBrandPage() {
  return <FitDimensionPage index={6} />;
}