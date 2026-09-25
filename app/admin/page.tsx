import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { query } from "@/lib/db";

import AccountButton from "../account-button";
import BookingList from "../bookings/booking-list";

export const dynamic = "force-dynamic";

type Stats = {
  total: string;
  pending: string;
  active: string;
  completed: string;
};

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login?callbackUrl=/admin");
  }

  if (session.user.role !== "admin") {
    redirect("/dashboard");
  }

  const result = await query<Stats>(`
    SELECT
      COUNT(*)::text AS total,
      COUNT(*) FILTER (
        WHERE status = 'pending'
      )::text AS pending,
      COUNT(*) FILTER (
        WHERE status IN ('reviewing', 'needs_info', 'approved')
      )::text AS active,
      COUNT(*) FILTER (
        WHERE status = 'completed'
      )::text AS completed
    FROM bookings
  `);

  const stats = result.rows[0] ?? {
    total: "0",
    pending: "0",
    active: "0",
    completed: "0",
  };

  return (
    <main className="dashboard-page admin-dashboard">
      <header className="dashboard-header">
        <a
          className="dashboard-brand"
          href="/"
          aria-label="กลับหน้าแรก SPACE CONNEX"
        >
          SPACE <em>CONNEX</em>
        </a>

        <div className="dashboard-header-actions">
          <span className="dashboard-role">ผู้ดูแลระบบ</span>

          <a className="dashboard-back-button" href="/">
            <span aria-hidden="true">←</span>
            กลับหน้าเว็บไซต์
          </a>

          <AccountButton />
        </div>
      </header>

      <section className="dashboard-content">
        <div className="dashboard-title">
          <div>
            <p className="kicker">ADMIN DASHBOARD</p>
            <h1>ภาพรวมคำขอทั้งหมด</h1>
            <p>ตรวจสอบ จัดลำดับ และอัปเดตสถานะจากพื้นที่เดียว</p>
          </div>

          <a className="button button-gold" href="/apply">
            สร้างคำขอใหม่
          </a>
        </div>

        <div className="dashboard-stats" aria-label="สถิติคำขอ">
          <article>
            <span>ทั้งหมด</span>
            <strong>{stats.total}</strong>
          </article>

          <article>
            <span>รอตรวจสอบ</span>
            <strong>{stats.pending}</strong>
          </article>

          <article>
            <span>กำลังดำเนินการ</span>
            <strong>{stats.active}</strong>
          </article>

          <article>
            <span>เสร็จสิ้น</span>
            <strong>{stats.completed}</strong>
          </article>
        </div>

        <BookingList admin />
      </section>
    </main>
  );
}