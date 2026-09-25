import type { Metadata } from "next";
import { FitDimensionPage } from "../site-chrome";

export const metadata: Metadata = {
  title: "Location Fit | SPACE CONNEX™",
  description: "ทำเล การเข้าถึง ช่วงเวลา และ Traffic ที่เกี่ยวข้อง — ด้านที่สองของ The Fit System",
};

export default function FitLocationPage() {
  return <FitDimensionPage index={2} />;
}