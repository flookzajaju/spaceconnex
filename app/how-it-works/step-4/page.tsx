import type { Metadata } from "next";
import { DeliverableStepPage } from "../../site-chrome";

export const metadata: Metadata = {
  title: "ขั้นตอนที่ 4 • ตัวชี้วัดและข้อมูลที่ควรเก็บ | SPACE CONNEX™",
  description: "กำหนด KPI และข้อมูลสำคัญที่ควรเก็บระหว่างการทดลอง",
};

export default function Step4Page() {
  return <DeliverableStepPage index={4} />;
}