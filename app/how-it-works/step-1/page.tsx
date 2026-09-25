import type { Metadata } from "next";
import { DeliverableStepPage } from "../../site-chrome";

export const metadata: Metadata = {
  title: "ขั้นตอนที่ 1 • บทสรุปการประเมินเบื้องต้น | SPACE CONNEX™",
  description: "สรุปความเหมาะสมระหว่างพื้นที่ สินค้า กลุ่มลูกค้า และเป้าหมายทางธุรกิจ พร้อมระบุโอกาสและข้อจำกัดเบื้องต้น",
};

export default function Step1Page() {
  return <DeliverableStepPage index={1} />;
}