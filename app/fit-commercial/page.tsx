import type { Metadata } from "next";
import { FitDimensionPage } from "../site-chrome";

export const metadata: Metadata = {
  title: "Commercial Fit | SPACE CONNEX™",
  description: "ต้นทุน รายได้ และเงื่อนไขที่สมเหตุสมผล — ด้านที่สี่ของ The Fit System",
};

export default function FitCommercialPage() {
  return <FitDimensionPage index={4} />;
}