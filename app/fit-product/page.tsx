import type { Metadata } from "next";
import { FitDimensionPage } from "../site-chrome";

export const metadata: Metadata = {
  title: "Product Fit | SPACE CONNEX™",
  description: "หมวดสินค้า ราคา และรูปแบบการตัดสินใจซื้อ — ด้านที่สามของ The Fit System",
};

export default function FitProductPage() {
  return <FitDimensionPage index={3} />;
}