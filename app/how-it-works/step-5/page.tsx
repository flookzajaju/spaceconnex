import type { Metadata } from "next";
import { DeliverableStepPage } from "../site-chrome";

export const metadata: Metadata = {
  title: "ขั้นตอนที่ 5 • ข้อเสนอแนะเพื่อขยายผล | SPACE CONNEX™",
  description: "สรุปผลจากการทดลอง พร้อมข้อเสนอแนะว่าควรขยาย ปรับรูปแบบ หรือยุติการดำเนินงาน",
};

export default function Step5Page() {
  return <DeliverableStepPage index={5} />;
}