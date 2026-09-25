"use client";
import { useState } from "react";
import type { ReactNode } from "react";
import AccountButton from "./account-button";
import { DELIVERABLE_STEPS, FIT_DIMENSIONS } from "./data"; // ดึงข้อมูลมาจากไฟล์ใหม่

export const Arrow = () => <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18"><path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" /></svg>;
export const SpaceIcon = () => <svg aria-hidden="true" viewBox="0 0 32 32"><path d="M5 27V9l11-5 11 5v18M11 27V14h10v13M4 27h24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" /></svg>;
export const BrandIcon = () => <svg aria-hidden="true" viewBox="0 0 32 32"><path d="M8 10h16l2 17H6L8 10Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" /><path d="M12 12V8a4 4 0 0 1 8 0v4M11 18h10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" /></svg>;
export const MeasureIcon = () => <svg aria-hidden="true" viewBox="0 0 32 32"><path d="M6 26V15M13 26V9M20 26v-7M27 26V5M4 26h25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" /></svg>;

export const BrandLockup = ({ inverse = false }: { inverse?: boolean }) => <span className={`brand-lockup${inverse ? " brand-lockup-inverse" : ""}`}><span className="brand-symbol" aria-hidden="true"><img src="/space-connex-brand-board.jpg" alt="" /></span><span className="brand-words"><strong>SPACE <em>CONNEX</em></strong><small>GLOBAL STRATEGY</small></span></span>;

// ประกาศตัวแปรเมนูแค่รอบเดียวเท่านั้น
const navItems = [
  ["/", "โซลูชันของเรา"], 
  ["/how-it-works", "ขั้นตอนการทำงาน"], 
  ["/portfolio", "ผลงานของเรา"], 
  ["/trust", "ความน่าเชื่อถือ"]
] as const;

function MobileMenu({ activeIndex }: { activeIndex: number }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="mobile-menu-trigger md:hidden flex flex-col gap-1.5 p-2"
        aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`w-6 h-0.5 bg-current transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-current transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>
      {open && (
        <div className="mobile-menu-panel absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 p-4" role="dialog" aria-label="เมนูหลัก">
          <nav aria-label="เมนูหลัก (มือถือ)" className="flex flex-col gap-4">
            {navItems.map(([href, label], index) => (
              <a 
                key={href}
                href={href}
                className="text-lg font-medium text-gray-800 hover:text-[#d4af37]"
                aria-current={index === activeIndex ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

// SiteHeader คืนชีพพร้อม AccountButton และ MobileMenu
export function SiteHeader({ active }: { active: "solutions" | "process" | "portfolio" | "trust" }) {
  const activeIndex = { solutions: 0, process: 1, portfolio: 2, trust: 3 }[active];
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="SPACE CONNEX หน้าแรก">
        <BrandLockup />
      </a>
      <nav aria-label="เมนูหลัก">
        {navItems.map(([href, label], index) => (
          <a key={href} href={href} aria-current={index === activeIndex ? "page" : undefined}>
            {label}
          </a>
        ))}
      </nav>
      <div className="site-header-actions flex items-center gap-4">
        <AccountButton />
        <MobileMenu activeIndex={activeIndex} />
      </div>
    </header>
  );
}

type CollageImage = { src: string; alt: string };

const DEFAULT_COLLAGE_IMAGES: CollageImage[] = [
  { src: "/images4.png", alt: "ผลงานด้านการตลาดและการสื่อสาร" },
  { src: "/images5.jpg", alt: "การทำงานร่วมกันระหว่างพื้นที่และแบรนด์" },
  { src: "/images6.jpg", alt: "ทีมผู้บริหารและความน่าเชื่อถือ" },
];

export function PageHero({
  eyebrow,
  title,
  description,
  visual = "none",
  tags = [],
  images,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  visual?: "none" | "network" | "collage";
  tags?: string[];
  images?: CollageImage[];
}) {
  const collageImages = images && images.length > 0 ? images : DEFAULT_COLLAGE_IMAGES;
  return <section className={`page-hero page-hero-${visual}`}>
    <div className="page-hero-copy"><p className="kicker light">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div>
    {visual === "network" && <AbstractNetworkVisual />}
    {visual === "collage" && <div className="hero-photo-collage" aria-label="ภาพตัวอย่างผลงาน SPACE CONNEX">
      {collageImages.slice(0, 3).map((img, i) => (
        <figure key={img.src}><img src={img.src} alt={img.alt} />{tags[i] && <figcaption>{tags[i]}</figcaption>}</figure>
      ))}
    </div>}
  </section>;
}

export function AbstractNetworkVisual({ home = false }: { home?: boolean }) {
  return <div className={home ? "home-network-art network-line-art" : "hero-network-art network-line-art"} aria-hidden="true">
    <svg viewBox="0 0 620 440" role="presentation">
      <g className="network-rings"><circle cx="410" cy="216" r="170" /><circle cx="475" cy="272" r="118" /></g>
      <g className="network-links">
        <path d="M116 102 L236 66 L344 124 L416 56 L520 130 L566 246 L442 300 L316 238 L214 318 L150 222 Z" />
        <path d="M116 102 L150 222 L316 238 L344 124 L236 66 M214 318 L442 300 L566 246 M344 124 L520 130 L442 300" />
      </g>
      <g className="network-nodes"><circle cx="116" cy="102" r="8"/><circle cx="236" cy="66" r="9"/><circle cx="344" cy="124" r="8"/><circle cx="416" cy="56" r="9"/><circle cx="520" cy="130" r="9"/><circle cx="566" cy="246" r="7"/><circle cx="442" cy="300" r="11"/><circle cx="316" cy="238" r="7"/><circle cx="214" cy="318" r="7"/><circle cx="150" cy="222" r="6"/></g>
    </svg>
  </div>;
}

export function SiteFooter() { return <><section className="contact-band" aria-label="ช่องทางติดต่อ SPACE CONNEX"><div className="contact-heading"><span>พร้อมเริ่มต้นแล้วหรือยัง?</span><h2>ร่วมสร้างโอกาสใหม่กับ SPACE CONNEX™</h2><p>เลือกช่องทางที่สะดวก หรือลงรายละเอียดบริการเพื่อให้ทีมประเมินเบื้องต้น</p></div><div className="contact-links"><a href="tel:0855455955"><span className="contact-index">01</span><small>โทรศัพท์</small><strong>085 545 5955</strong><i aria-hidden="true">↗</i></a><a href="https://line.me/R/ti/p/%40spaceconnex" target="_blank" rel="noreferrer"><span className="contact-index">02</span><small>LINE Official</small><strong>@spaceconnex</strong><i aria-hidden="true">↗</i></a><a href="/how-it-works#service-paths"><span className="contact-index">03</span><small>เริ่มต้น</small><strong>เลือกบริการเพื่อประเมิน</strong><i aria-hidden="true">→</i></a></div></section><footer><a className="brand brand-footer" href="/"><BrandLockup inverse /></a><p>Commercial Growth Infrastructure</p><p>พื้นที่ • แบรนด์ • ลูกค้า • ข้อมูล • พันธมิตร</p></footer></>; }

function DeliverableStepIcon({ n }: { n: 1 | 2 | 3 | 4 | 5 }) {
  const paths: Record<number, ReactNode> = {
    1: (
      <>
        <rect x="11" y="7" width="26" height="34" rx="4" />
        <path d="M17 17l3 3 5-6" />
        <path d="M28 17h4" />
        <path d="M17 28l3 3 5-6" />
        <path d="M28 28h4" />
      </>
    ),
    2: (
      <>
        <path d="M19 7h10" />
        <path d="M21 7v11L11 36a4 4 0 0 0 4 5h18a4 4 0 0 0 4-5L27 18V7" />
        <path d="M16 31h16" />
      </>
    ),
    3: (
      <>
        <path d="M24 42s12-11 12-22a12 12 0 1 0-24 0c0 11 12 22 12 22Z" />
        <circle cx="24" cy="20" r="4" />
      </>
    ),
    4: (
      <>
        <path d="M8 40h32" />
        <rect x="12" y="27" width="6" height="9" />
        <rect x="22" y="20" width="6" height="16" />
        <rect x="32" y="11" width="6" height="25" />
      </>
    ),
    5: (
      <>
        <path d="M8 36l10-11 8 7 14-18" />
        <path d="M31 14h9v9" />
      </>
    ),
  };
  return (
    <svg
      className="step-page-icon"
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[n]}
    </svg>
  );
}

export function DeliverableStepPage({ index }: { index: 1 | 2 | 3 | 4 | 5 }) {
  const step = DELIVERABLE_STEPS[index - 1];
  const prev = index > 1 ? DELIVERABLE_STEPS[index - 2] : null;
  const next = index < DELIVERABLE_STEPS.length ? DELIVERABLE_STEPS[index] : null;

  return (
    <main>
      <SiteHeader active="process" />
      <section className="step-page">
        <div className="step-page-eyebrow-row">
          <span className="step-page-index">
            ขั้นตอนที่ {index} จาก {DELIVERABLE_STEPS.length} • สิ่งที่คุณจะได้รับ
          </span>
          <div className="step-page-progress" aria-hidden="true">
            {DELIVERABLE_STEPS.map((_, i) => (
              <span key={i} className={i === index - 1 ? "is-active" : undefined} />
            ))}
          </div>
        </div>
        <div className="step-page-head">
          <div className="step-page-head-top">
            <span className="step-page-number" aria-hidden="true">
              0{index}
            </span>
            <DeliverableStepIcon n={step.icon} />
          </div>
          <h1 className="step-page-title">{step.title}</h1>
          <p className="step-page-lede">{step.lede}</p>
          <div className="step-page-purpose">
            <b>เพื่อให้คุณ</b>
            <p>{step.purpose}</p>
          </div>
        </div>
        <div className="step-page-nav">
          {prev ? (
            <a className="step-page-nav-prev" href={`/how-it-works/${prev.slug}`}>
              <Arrow /> {prev.title}
            </a>
          ) : (
            <a className="step-page-nav-prev" href="/how-it-works#deliverables">
              <Arrow /> กลับสู่ขั้นตอนการทำงาน
            </a>
          )}
          <a href="/how-it-works#deliverables" className="step-page-nav-all">
            ดูทั้ง 5 ขั้นตอน
          </a>
          {next ? (
            <a href={`/how-it-works/${next.slug}`}>
              {next.title} <Arrow />
            </a>
          ) : (
            <a href="/apply">
              เริ่มส่งข้อมูลเพื่อประเมิน <Arrow />
            </a>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

export function FitDimensionPage({ index }: { index: 1 | 2 | 3 | 4 | 5 | 6 }) {
  const item = FIT_DIMENSIONS[index - 1];
  const prev = index > 1 ? FIT_DIMENSIONS[index - 2] : null;
  const next = index < FIT_DIMENSIONS.length ? FIT_DIMENSIONS[index] : null;

  return (
    <main>
      <SiteHeader active="process" />
      <section className="fit-system fit-detail-page">
        <div className="fit-detail-top">
          <span className="fit-detail-index">FIT DIMENSION 0{index} / 6</span>
          <div className="fit-detail-progress" aria-hidden="true">
            {FIT_DIMENSIONS.map((_, i) => (
              <span key={i} className={i === index - 1 ? "is-active" : undefined} />
            ))}
          </div>
        </div>

        <div className="fit-detail-head">
          <span className="fit-detail-number" aria-hidden="true">0{index}</span>
          <p className="kicker light">{item.eyebrow}</p>
          <h1>{item.title}</h1>
          <p className="fit-detail-lede">{item.lede}</p>
        </div>

        <div className="fit-detail-grid">
          <div className="fit-detail-block">
            <h2>สิ่งที่เราพิจารณา</h2>
            <ul>
              {item.considerations.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="fit-detail-block">
            <h2>คำถามที่เราตั้งไว้เสมอ</h2>
            <ul className="fit-detail-questions">
              {item.questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="fit-detail-signals">
          <div className="fit-detail-signal good">
            <h2>สัญญาณว่าน่าจะไปต่อได้</h2>
            <ul>
              {item.goodSignals.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="fit-detail-signal watch">
            <h2>สัญญาณที่ต้องระวัง</h2>
            <ul>
              {item.watchSignals.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="fit-detail-outcome">
          <h2>ผลลัพธ์ที่คุณจะได้</h2>
          <p>{item.outcome}</p>
        </div>

                <div className="fit-detail-nav">
          {prev ? (
            <a className="fit-detail-nav-prev" href={`/${prev.slug}`}>
              <Arrow /> {prev.title.split(" — ")[0]}
            </a>
          ) : (
            <a className="fit-detail-nav-prev" href="/#fit-system-title">
              <Arrow /> กลับสู่ The Fit System
            </a>
          )}
          <a href="/#fit-system-title" className="fit-detail-nav-all">
            ดูทั้ง 6 ด้าน
          </a>
          {next ? (
            <a href={`/${next.slug}`}>
              {next.title.split(" — ")[0]} <Arrow />
            </a>
          ) : (
            <a href="/apply">
              เริ่มส่งข้อมูลเพื่อประเมิน <Arrow />
            </a>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}