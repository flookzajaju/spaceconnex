"use client";

import { signOut, useSession } from "next-auth/react";

export default function AccountButton() {
  const { data, status } = useSession();

  if (status === "loading") {
    return (
      <span className="header-cta account-loading">
        กำลังตรวจสอบ…
      </span>
    );
  }

  if (!data?.user) {
    return (
      <a className="header-cta account-login" href="/login">
        เข้าสู่ระบบ <span>→</span>
      </a>
    );
  }

  const isAdmin = data.user.role === "admin";
  const dashboardUrl = isAdmin ? "/admin" : "/dashboard";

  const displayName =
    data.user.name?.trim() ||
    data.user.email?.split("@")[0] ||
    (isAdmin ? "ผู้ดูแลระบบ" : "บัญชีของฉัน");

  return (
    <details className="account-menu">
      <summary className="account-trigger">
        <span className="account-avatar" aria-hidden="true">
          {displayName.charAt(0).toUpperCase()}
        </span>

        <span className="account-trigger-copy">
          <strong>{displayName}</strong>
          {isAdmin && <small>Administrator</small>}
        </span>

        <span className="account-chevron" aria-hidden="true">
          ▾
        </span>
      </summary>

      <div className="account-dropdown">
        <div className="account-dropdown-head">
          <span className="account-avatar account-avatar-large">
            {displayName.charAt(0).toUpperCase()}
          </span>

          <div>
            <strong>{displayName}</strong>
            <small>{data.user.email}</small>
          </div>
        </div>

        <nav aria-label="เมนูบัญชี">
          <a href={dashboardUrl}>
            <span aria-hidden="true">◷</span>
            <span>{isAdmin ? "แดชบอร์ดผู้ดูแล" : "ประวัติของฉัน"}</span>
          </a>

          <button
            type="button"
            className="account-logout"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <span aria-hidden="true">↪</span>
            <span>ออกจากระบบ</span>
          </button>
        </nav>
      </div>
    </details>
  );
}