import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";

import AccountButton from "../account-button";
import BookingList from "../bookings/booking-list";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login?callbackUrl=/dashboard");
  }

  if (session.user.role === "admin") {
    redirect("/admin");
  }

  return (
    <main className="dashboard-page">
      <MemberDashboardHeader />

      <section className="dashboard-content">
        <div className="dashboard-title">
          <div>
            <p className="kicker">MEMBER DASHBOARD</p>
            <h1>คำขอของคุณ</h1>
            <p>ติดตามสถานะและข้อมูลที่ทีม SPACE CONNEX กำลังตรวจสอบ</p>
          </div>

          <a className="button button-gold" href="/apply">
            ส่งคำขอใหม่
          </a>
        </div>

        <BookingList admin={false} />
      </section>
    </main>
  );
}

function MemberDashboardHeader() {
  return (
    <header className="dashboard-header">
      <a
        className="dashboard-brand"
        href="/"
        aria-label="กลับหน้าแรก SPACE CONNEX"
      >
        SPACE <em>CONNEX</em>
      </a>

      <div className="dashboard-header-actions">
        <span className="dashboard-role">สมาชิก</span>

        <a className="dashboard-back-button" href="/">
          <span aria-hidden="true">←</span>
          กลับหน้าเว็บไซต์
        </a>

        <AccountButton />
      </div>
    </header>
  );
}