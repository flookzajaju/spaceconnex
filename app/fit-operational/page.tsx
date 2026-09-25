import type { Metadata } from "next";
import { FitDimensionPage } from "../site-chrome";

export const metadata: Metadata = {
  title: "Operational Fit | SPACE CONNEX™",
  description: "พื้นที่ อุปกรณ์ บุคลากร และระยะเวลา — ด้านที่ห้าของ The Fit System",
};

export default function FitOperationalPage() {
  return <FitDimensionPage index={5} />;
}