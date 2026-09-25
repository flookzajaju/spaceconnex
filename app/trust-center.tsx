"use client";

import { useEffect, useState } from "react";

type Category = "all" | "pr" | "production" | "network" | "exhibition" | "media";

const projects = [
  {
    title: "PR & Marketing",
    category: "pr",
    images: ["/portfolio/pr-marketing-01.png", "/portfolio/pr-marketing-02.png", "/portfolio/pr-marketing-03.png", "/portfolio/pr-marketing-04.png"],
    alt: "ทีมงาน ICONNEX WORLD ดำเนินงานประชาสัมพันธ์และการตลาดในพื้นที่จริง",
    intro: "วางภาพรวมการสื่อสารให้แบรนด์มีทิศทางเดียวกัน ตั้งแต่การกำหนดประเด็น การนำเสนอคุณค่าของสินค้า ไปจนถึงการเชื่อมกิจกรรมภาคสนามกับผู้ประกอบการและกลุ่มเป้าหมาย",
    approach: "เริ่มจากทำความเข้าใจเป้าหมายและผู้รับสาร กำหนดสารหลัก เลือกช่องทาง และออกแบบจังหวะการสื่อสาร เพื่อให้ทุกกิจกรรมสนับสนุนภาพลักษณ์เดียวกันอย่างต่อเนื่อง",
    services: ["กลยุทธ์แบรนด์และแผนการสื่อสาร", "PR และการประสานงานกิจกรรม", "Content Direction สำหรับออนไลน์และออฟไลน์", "สนับสนุนการเปิดตัวสินค้าและการตลาดในพื้นที่จริง"],
    label: "PR & MARKETING",
  },
  {
    title: "Production",
    category: "production",
    images: ["/portfolio/production-01.png", "/portfolio/production-02.png", "/portfolio/production-03.png", "/portfolio/production-04.png"],
    alt: "เบื้องหลังการวางแผนและถ่ายทำงาน Production ของ ICONNEX WORLD",
    intro: "ดูแลกระบวนการผลิตสื่อจากแนวคิดสู่ชิ้นงานจริง ทั้งการเตรียมประเด็น กองถ่าย การสัมภาษณ์ และการบันทึกภาพในสถานที่หลากหลาย",
    approach: "แปลงวัตถุประสงค์เป็นประเด็นและลำดับการถ่ายทำ เตรียมทีม อุปกรณ์ และสถานที่ ก่อนควบคุมคุณภาพของภาพ เสียง และสารที่ต้องการสื่อในทุกขั้นตอน",
    services: ["Creative Direction และวางแผนการถ่ายทำ", "จัดกองถ่าย แสง กล้อง และการสัมภาษณ์", "บันทึกภาพกิจกรรมและงานองค์กร", "ประสานทีมผลิตให้สอดคล้องกับสารของแบรนด์"],
    label: "PRODUCTION",
  },
  {
    title: "International Network",
    category: "network",
    images: ["/portfolio/network-01.png", "/portfolio/network-02.png", "/portfolio/network-03.png", "/portfolio/network-04.png"],
    alt: "ความร่วมมือและเครือข่ายธุรกิจระหว่างองค์กรของ ICONNEX WORLD",
    intro: "เชื่อมโยงองค์กร ผู้ประกอบการ สถาบันการศึกษา และเวทีอุตสาหกรรม เพื่อเปิดบทสนทนาทางธุรกิจและสร้างโอกาสความร่วมมือข้ามภาคส่วน",
    approach: "คัดกรองคู่เชื่อมโยงที่สอดคล้องกับโจทย์ เตรียมข้อมูลสำหรับการเจรจา และวางขั้นตอนติดตามผล เพื่อให้การพบปะต่อยอดเป็นความร่วมมือที่มีทิศทางชัดเจน",
    services: ["Business Matching และ Partner Coordination", "ความร่วมมือระหว่างองค์กรและสถาบัน", "เชื่อมผู้ประกอบการไทยกับเครือข่ายต่างประเทศ", "สนับสนุนการเข้าร่วมเวทีธุรกิจและอุตสาหกรรม"],
    label: "INTERNATIONAL NETWORK",
  },
  {
    title: "Exhibition & Roadshow",
    category: "exhibition",
    images: ["/portfolio/exhibition-01.png", "/portfolio/exhibition-02.png", "/portfolio/exhibition-03.png", "/portfolio/exhibition-04.png"],
    alt: "บรรยากาศงานนิทรรศการ เวที และการพบปะผู้ประกอบการ",
    intro: "สนับสนุนการสื่อสารและการดำเนินงานในนิทรรศการ เวทีสัมมนา และกิจกรรม Roadshow ให้แบรนด์สามารถพบกลุ่มเป้าหมายและพันธมิตรในบริบทจริง",
    approach: "ออกแบบเส้นทางการสื่อสารตั้งแต่ก่อนงาน ระหว่างงาน และหลังงาน ให้บูธ เวที ทีมงาน และเนื้อหาทำงานร่วมกันเป็นประสบการณ์เดียวที่ผู้ร่วมงานจดจำได้",
    services: ["วางรูปแบบกิจกรรมและประสบการณ์หน้างาน", "ประสานเวที ผู้ร่วมงาน และผู้ประกอบการ", "สนับสนุนบูธและ Brand Activation", "เก็บภาพและเนื้อหาเพื่อต่อยอดหลังงาน"],
    label: "EXHIBITION",
  },
  {
    title: "Media Relations",
    category: "media",
    images: ["/portfolio/media-01.png", "/portfolio/media-02.png", "/portfolio/media-03.png", "/portfolio/media-04.png"],
    alt: "การให้สัมภาษณ์ การแถลงข่าว และการประสานสื่อของ ICONNEX WORLD",
    intro: "จัดเตรียมประเด็นและประสานการสื่อสารระหว่างองค์กร ผู้บริหาร และสื่อมวลชน เพื่อให้ข้อมูลสำคัญถูกถ่ายทอดอย่างเหมาะสมกับเวทีและผู้รับสาร",
    approach: "เริ่มจากประเด็นข่าวและผู้รับสาร เตรียมข้อมูล ผู้ให้สัมภาษณ์ และสื่อประกอบ ก่อนประสานการเผยแพร่และรวบรวมผลตอบรับเพื่อนำไปต่อยอดการสื่อสาร",
    services: ["Media Relations และประสานสื่อ", "เตรียมประเด็นข่าวและแนวทางสัมภาษณ์", "สนับสนุนงานแถลงข่าวและเวทีองค์กร", "วางสารหลักให้สอดคล้องกับภาพลักษณ์องค์กร"],
    label: "MEDIA RELATIONS",
  },
] as const;

const filters: { value: Category; label: string }[] = [
  { value: "all", label: "ทั้งหมด" },
  { value: "pr", label: "PR & Marketing" },
  { value: "production", label: "Production" },
  { value: "network", label: "International Network" },
  { value: "exhibition", label: "Exhibition" },
  { value: "media", label: "Media Relations" },
];

export default function TrustCenter() {
  const [filter, setFilter] = useState<Category>("all");
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string; title: string } | null>(null);
  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  useEffect(() => {
    if (!activeImage) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeImage]);

  return (
    <div className="portfolio-center">
      <div className="portfolio-heading">
        <div><p className="kicker">EVIDENCE PORTFOLIO</p><h2>ผลงานจริง แยกตามความเชี่ยวชาญ</h2></div>
        <p>ภาพจากการทำงานจริง พร้อมขอบเขตความเชี่ยวชาญที่แยกเป็นหมวด เพื่อให้เห็นทั้งกระบวนการทำงานและรูปแบบความร่วมมือที่ ICONNEX WORLD รองรับ</p>
      </div>

      <div className="portfolio-filters" role="group" aria-label="กรองผลงานตามหมวด">
        {filters.map((item) => (
          <button key={item.value} type="button" aria-pressed={filter === item.value} onClick={() => setFilter(item.value)}>{item.label}</button>
        ))}
      </div>

      <div className="portfolio-grid">
        {visibleProjects.map((project) => (
          <article className="portfolio-card" key={project.title}>
            <div className="portfolio-honeycomb" aria-label={`ภาพผลงาน ${project.title}`}>
              {project.images.map((src, index) => (
                <button className={`portfolio-hex portfolio-hex-${index + 1}`} key={src} type="button" onClick={() => setActiveImage({ src, alt: `${project.alt} ภาพที่ ${index + 1}`, title: project.title })} aria-label={`เปิดภาพ ${project.title} ภาพที่ ${index + 1}`}>
                  <img src={src} alt={`${project.alt} ภาพที่ ${index + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
            <div className="portfolio-card-copy">
              <span>{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.intro}</p>
              <div className="portfolio-approach"><strong>แนวทางการทำงาน</strong><p>{project.approach}</p></div>
              <ul>{project.services.map((service) => <li key={service}>{service}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>

      <p className="portfolio-disclaimer">หมายเหตุ: ภาพประกอบเป็นส่วนหนึ่งของกิจกรรมและการทำงานจริง ขอบเขตงานของแต่ละโครงการอาจแตกต่างกันตามวัตถุประสงค์และข้อตกลงกับคู่ค้า</p>

      {activeImage && (
        <div className="document-modal" role="dialog" aria-modal="true" aria-label={`ภาพผลงาน ${activeImage.title}`} onMouseDown={(event) => { if (event.currentTarget === event.target) setActiveImage(null); }}>
          <div className="document-modal-shell">
            <div className="document-modal-bar"><div><span>PROJECT GALLERY</span><strong>{activeImage.title}</strong></div><button type="button" aria-label="ปิดภาพ" onClick={() => setActiveImage(null)}>×</button></div>
            <img src={activeImage.src} alt={activeImage.alt} />
          </div>
        </div>
      )}
    </div>
  );
}
