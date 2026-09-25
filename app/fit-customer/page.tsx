import type { Metadata } from "next";
import { FitDimensionPage } from "../site-chrome";

export const metadata: Metadata = {
  title: "Customer Fit | SPACE CONNEX™",
  description: "กลุ่มลูกค้า พฤติกรรม กำลังซื้อ และเหตุผลที่เข้ามาใช้พื้นที่ — ด้านแรกของ The Fit System",
};

export default function FitCustomerPage() {
  return <FitDimensionPage index={1} />;
}