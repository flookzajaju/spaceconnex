import type { Metadata } from "next";
import { DeliverableStepPage } from "../../site-chrome";

export const metadata: Metadata = {
  title: "ขั้นตอนที่ 2 • ข้อเสนอรูปแบบ Pilot | SPACE CONNEX™",
  description: "กำหนดรูปแบบการทดลอง ขอบเขต ระยะเวลา และงบประมาณเบื้องต้น",
};

export default function Step2Page() {
  return <DeliverableStepPage index={2} />;
}