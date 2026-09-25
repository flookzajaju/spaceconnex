import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LeadBrief from "../lead-brief";
import { authOptions } from "../../lib/auth";

export const metadata: Metadata = {
  title: "ส่งคำขอจอง | SPACE CONNEX™",
  description:
    "เตรียมข้อมูลพื้นที่หรือสินค้า เพื่อให้ทีม SPACE CONNEX™ ประเมินโอกาสความร่วมมือเบื้องต้น",
};

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18">
    <path
      d="M4 10h11M11 6l4 4-4 4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
  </svg>
);

export default async function ApplyPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login?callbackUrl=/apply");

  return (
    <main className="apply-page">
      <header className="apply-header">
        <a className="apply-brand" href="/" aria-label="กลับหน้า SPACE CONNEX">
          <img src="/space-connex-brand-board.jpg" alt="" />
          <span>
            <strong>
              SPACE <em>CONNEX</em>
            </strong>
            <small>GLOBAL STRATEGY</small>
          </span>
        </a>
        <a className="apply-back" href="/">
          <span>กลับหน้าเว็บไซต์</span> <Arrow />
        </a>
      </header>

      <section className="apply-layout">
        <div className="apply-intro">
          <p className="kicker light">BOOK WITH SPACE CONNEX</p>
          <h1>จองก้าวต่อไปให้ธุรกิจของคุณ</h1>
          <p>
            กรอกข้อมูลตามบริการที่เลือก ส่งให้ทีมประเมิน และรอการติดต่อกลับภายใน
            3–5 วันทำการ
          </p>
          <div className="apply-steps">
            <div>
              <span>01</span>
              <p>
                <strong>กรอกข้อมูลเฉพาะบริการ</strong>
                <small>ระบบเลือกแบบฟอร์มให้จากหน้าที่คุณเข้ามา</small>
              </p>
            </div>
            <div>
              <span>02</span>
              <p>
                <strong>ตรวจทานข้อมูล</strong>
                <small>ใช้เวลาโดยประมาณ 3–5 นาที</small>
              </p>
            </div>
            <div>
              <span>03</span>
              <p>
                <strong>รอทีมติดต่อกลับ</strong>
                <small>ภายใน 3–5 วันทำการ</small>
              </p>
            </div>
          </div>
          <div className="apply-security">
            <strong>ความเป็นส่วนตัว</strong>
            <p>
              ข้อมูลจะถูกจัดเก็บเมื่อคุณกดส่งคำขอจอง
              เฉพาะทีมที่ได้รับสิทธิ์เท่านั้นที่ดูรายการได้ ติดต่อ 085 545
              5955 เพื่อสอบถามหรือขอแก้ไขข้อมูล
            </p>
          </div>
        </div>
        <LeadBrief />
      </section>
    </main>
  );
}
