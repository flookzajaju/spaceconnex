import type { Metadata } from "next";
import { DeliverableStepPage } from "../../site-chrome";

export const metadata: Metadata = {
  title: "ขั้นตอนที่ 3 • กรอบพาร์ทเนอร์หรือพื้นที่ที่เหมาะ | SPACE CONNEX™",
  description: "ระบุลักษณะพื้นที่ แบรนด์ หรือพาร์ทเนอร์ที่สอดคล้องกับเป้าหมายโครงการ",
};

export default function Step3Page() {
  return <DeliverableStepPage index={3} />;
}