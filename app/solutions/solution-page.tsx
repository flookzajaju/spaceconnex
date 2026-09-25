import type { ReactNode } from "react";
import { Arrow, SiteFooter, SiteHeader } from "../site-chrome";

export type SolutionPageData = {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  forWho: string;
  outcomes: { number: string; title: string; text: string }[];
  process: { title: string; text: string }[];
  checklist: string[];
  ctaTitle: string;
  ctaText: string;
  applyHref: string;
  applyLabel: string;
};

export default function SolutionPage({ data }: { data: SolutionPageData }) {
  return (
    <main>
      <SiteHeader active="solutions" />
      <section className="solution-hero">
        <div className="solution-hero-copy">
          <p className="kicker light">{data.eyebrow}</p>
          <h1>{data.title}</h1>
          <p>{data.lead}</p>
          <a className="button button-gold" href={data.applyHref}>
            {data.applyLabel} <Arrow />
          </a>
        </div>
        <div className="solution-hero-note">
          <span>เหมาะสำหรับ</span>
          <strong>{data.forWho}</strong>
          <p>
            ทีมจะตรวจสอบข้อมูลและยืนยันความเหมาะสม เงื่อนไข พื้นที่
            และช่วงเวลาอีกครั้งก่อนเริ่มงาน
          </p>
        </div>
      </section>
      <section className="solution-value section">
        <div className="solution-section-heading">
          <p className="kicker">WHAT YOU GET</p>
          <h2>สิ่งที่บริการนี้ช่วยให้คุณทำได้</h2>
        </div>
        <div className="solution-outcomes">
          {data.outcomes.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="solution-process section">
        <div className="solution-section-heading">
          <p className="kicker light">HOW IT WORKS</p>
          <h2>จากข้อมูลเบื้องต้นสู่รูปแบบที่เหมาะสม</h2>
        </div>
        <div className="solution-process-grid">
          {data.process.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="solution-ready section">
        <div>
          <p className="kicker">BEFORE YOU APPLY</p>
          <h2>ข้อมูลที่ควรเตรียม</h2>
        </div>
        <ul>
          {data.checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="solution-final">
        <div>
          <p className="kicker light">START YOUR REQUEST</p>
          <h2>{data.ctaTitle}</h2>
          <p>{data.ctaText}</p>
        </div>
        <a className="button button-gold" href={data.applyHref}>
          {data.applyLabel} <Arrow />
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
