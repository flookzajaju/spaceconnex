import type { Metadata } from "next";
import { Arrow, PageHero, SiteFooter, SiteHeader } from "../site-chrome";
import { DELIVERABLE_STEPS } from "../data"; // <--- ดึงจากที่นี่แทน

export const metadata: Metadata = {
  title: "ขั้นตอนการทำงาน | SPACE CONNEX™",
  description:
    "กระบวนการ 4 ขั้นตอนสำหรับเจ้าของพื้นที่และเจ้าของแบรนด์ ตั้งแต่สมัคร วิเคราะห์ จับคู่ ไปจนถึงวัดผล",
};

export default function HowItWorksPage() {
  return (
    <main>
      <SiteHeader active="process" />
      <PageHero
        eyebrow="HOW IT WORKS"
        title={
          <>จากข้อมูลจริงสู่ Pilot ที่ไปต่อได้</>
        }
        description="SPACE CONNEX™ ใช้กระบวนการ 4 ขั้นตอน เพื่อให้การจับคู่พื้นที่และสินค้าเริ่มอย่างมีเป้าหมาย วัดผลได้ และตัดสินใจขยายจากข้อมูลจริง"
        visual="collage"
        tags={["APPLY", "MATCH & PILOT", "MEASURE"]}
        images={[
          { src: "/space-connex-cafe.webp", alt: "พื้นที่คาเฟ่สำหรับวางสินค้า" },
          { src: "/space-connex-popup.webp", alt: "การทดลอง Pilot ในพื้นที่จริง" },
          { src: "/space-connex-hotel.webp", alt: "พื้นที่สำหรับจัดกิจกรรมและวัดผล" },
        ]}
      />
      <section className="process section">
        <div className="process-heading">
          <p className="kicker light">ส่วนที่ 1 • ภาพรวมระบบ</p>
          <h2>4 ขั้นตอนจากโจทย์สู่การเติบโต</h2>
        </div>
        <div className="process-layout">
          <div className="process-visual">
            <img
              src="/space-connex-popup.webp"
              alt="การพูดคุยระหว่างเจ้าของแบรนด์และเจ้าของพื้นที่"
            />
            <div>
              <span>SPACE CONNEX SYSTEM</span>
              <strong>พื้นที่ + สินค้า + ลูกค้า + ข้อมูล</strong>
            </div>
          </div>
          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Apply</h3>
              <strong>ส่งข้อมูลเบื้องต้น</strong>
              <p>บอกเราว่าคุณมีพื้นที่หรือสินค้า พร้อมเป้าหมายที่ต้องการ</p>
            </article>
            <article>
              <span>02</span>
              <h3>Analyse</h3>
              <strong>วิเคราะห์ความเหมาะสม</strong>
              <p>
                พิจารณาทำเล ลูกค้า หมวดสินค้า รูปแบบพื้นที่ และเป้าหมายธุรกิจ
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Match &amp; Pilot</h3>
              <strong>จับคู่และทดลอง</strong>
              <p>
                คัดเลือกพาร์ทเนอร์ กำหนดรูปแบบ จุดทดลอง ระยะเวลา
                และตัวชี้วัดร่วมกัน
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Measure &amp; Grow</h3>
              <strong>วัดผลและขยาย</strong>
              <p>
                สรุปผล เรียนรู้ ปรับรูปแบบ และตัดสินใจว่าจะขยาย จับคู่ใหม่
                หรือยุติ Pilot
              </p>
            </article>
          </div>
        </div>
      </section>

            <section id="deliverables" className="section">
        <div className="section-intro">
          <div>
            <p className="kicker">ส่วนที่ 2 • สิ่งที่คุณจะได้รับ</p>
            <h2>5 สิ่งที่คุณจะได้รับตลอดกระบวนการ</h2>
          </div>
          <p>
            ไม่ใช่แค่การแนะนำให้รู้จักกัน แต่คือกรอบตัดสินใจที่นำไปใช้ต่อได้
            ในแต่ละขั้นตอน ตั้งแต่การประเมินไปจนถึงข้อเสนอแนะสำหรับการขยายผล
          </p>
        </div>
        <div className="deliverable-teaser-list">
          {DELIVERABLE_STEPS.map((step, i) => (
            <a key={step.slug} href={`/how-it-works/${step.slug}`}>
              <span className="deliverable-teaser-index">0{i + 1}</span>
              <span className="deliverable-teaser-copy">
                <span className="deliverable-teaser-title">{step.title}</span>
                <span className="deliverable-teaser-desc">{step.teaser}</span>
              </span>
              <Arrow />
            </a>
          ))}
        </div>
      </section>
      <section id="service-paths" className="audience service-showcase section">
        <div className="section-intro">
          <div>
            <p className="kicker">ส่วนที่ 3 • เลือกเส้นทางของคุณ</p>
            <h2>เลือกบริการแล้วกรอกข้อมูลเพื่อประเมิน</h2>
          </div>
          <p>
            ทุกบริการผ่านการประเมินก่อนเริ่ม แต่ใช้ข้อมูลคนละแบบ
            เลือกเส้นทางที่ตรงกับเป้าหมายของคุณ
          </p>
        </div>
       <div className="service-editorial-grid">
          {/* กล่อง 1: ฝั่งพื้นที่ */}
          <article
            id="products-for-space"
            className="service-editorial-card service-dark"
          >
            <img
              src="/space-connex-cafe.webp"
              alt="คาเฟ่และพื้นที่สำหรับวางสินค้า"
            />
            <div className="service-editorial-copy">
              <span>สำหรับเจ้าของคาเฟ่ ร้านค้า โรงแรม และ Wellness</span>
              <p className="service-overline">ฉันมีพื้นที่</p>
              <h3>หาสินค้ามาเติมพื้นที่</h3>
              <p>
                เราประเมินลูกค้า รูปแบบการใช้พื้นที่ และเป้าหมายรายได้
                ก่อนคัดเลือกสินค้าหรือแบรนด์ที่เหมาะเข้ามาทดลอง
              </p>
              <div className="assessment-label">สิ่งที่เราประเมินก่อนเริ่ม</div>
              <ul>
                <li>ศักยภาพ ทำเล และข้อจำกัดของพื้นที่</li>
                <li>กลุ่มลูกค้าและพฤติกรรมการใช้พื้นที่</li>
                <li>หมวดสินค้าที่สอดคล้องกับบริบท</li>
                <li>รูปแบบ Pilot และตัวชี้วัดเบื้องต้น</li>
              </ul>
              <a href="/apply?service=products&partner=space">
                กรอกข้อมูลพื้นที่เพื่อประเมิน <Arrow />
              </a>
            </div>
          </article>

          {/* กล่อง 2: ฝั่งแบรนด์ (รวม Pop-up และ Workshop ไว้ในการประเมินเบื้องต้น) */}
          <article
            id="product-pilot"
            className="service-editorial-card service-light"
          >
            <img
              src="/space-connex-popup.webp"
              alt="แบรนด์นำสินค้าไปทดลองในพื้นที่จริง"
            />
            <div className="service-editorial-copy">
              <span>สำหรับแบรนด์ ผู้ผลิต และออแกไนเซอร์</span>
              <p className="service-overline">ฉันมีสินค้าและกิจกรรม</p>
              <h3>หาพื้นที่ทดลองวางสินค้าและจัดงาน</h3>
              <p>
                ไม่ว่าจะเป็นการวางขายสินค้า จัด Pop-up หรือ Workshop เราจะประเมิน
                เพื่อค้นหาพื้นที่จริงที่ตอบโจทย์สมมติฐานทางธุรกิจของคุณ
              </p>
              <div className="assessment-label">สิ่งที่เราประเมินก่อนเริ่ม</div>
              <ul>
                <li>ความพร้อม รูปแบบ และจุดเด่นของแบรนด์</li>
                <li>งบประมาณ ราคา และกลุ่มลูกค้าเป้าหมาย</li>
                <li>ประเภทพื้นที่ที่มี Customer Fit ตรงกัน</li>
                <li>เงื่อนไข Pilot รูปแบบการจัดงาน และข้อกำหนด</li>
              </ul>
              <a href="/apply?service=space&partner=brand">
                กรอกข้อมูลแบรนด์เพื่อประเมิน <Arrow />
              </a>
            </div>
          </article>
        </div>
      </section>
      <section className="principles section">
        <div className="section-intro">
          <div>
            <p className="kicker">ส่วนที่ 4 • หลักการที่ยึดถือ</p>
            <h2>ทุกการจับคู่ต้องมีเหตุผลรองรับ</h2>
          </div>
          <p>
            หลักการนี้ช่วยให้ทุกฝ่ายเห็นเป้าหมาย ความเสี่ยง
            และข้อมูลที่ใช้ตัดสินใจร่วมกันอย่างตรงไปตรงมา
          </p>
        </div>
        <div className="principle-grid">
          <article>
            <span>01</span>
            <h3>Fit before Fill</h3>
            <p>
              เลือกจากความเหมาะสมของลูกค้า พื้นที่ และสินค้า
              ไม่ใช่เพียงต้องการเติมพื้นที่ว่าง
            </p>
            <ul><li>ตรวจ Customer Fit และ Brand Fit</li><li>พิจารณาบริบท ทำเล และพฤติกรรมลูกค้า</li><li>คัดเฉพาะตัวเลือกที่มีเหตุผลทางธุรกิจรองรับ</li></ul>
          </article>
          <article>
            <span>02</span>
            <h3>Pilot before Scale</h3>
            <p>
              ทดลองในขอบเขตที่วัดผลได้ ก่อนลงทุนหรือขยายความร่วมมือในวงกว้าง
            </p>
            <ul><li>กำหนดระยะเวลาและขอบเขตให้ชัด</li><li>ควบคุมต้นทุนและความเสี่ยงก่อนขยาย</li><li>ทดสอบสมมติฐานกับพื้นที่และลูกค้าจริง</li></ul>
          </article>
          <article>
            <span>03</span>
            <h3>Data before Decision</h3>
            <p>
              ตัดสินใจจากผลตอบรับ ยอดขาย ความสนใจ และข้อจำกัดที่พบในพื้นที่จริง
            </p>
            <ul><li>เก็บยอดขาย Conversion และการมีส่วนร่วม</li><li>บันทึกข้อจำกัดด้านพื้นที่และการปฏิบัติงาน</li><li>ใช้ผลจริงตัดสินใจว่าจะขยาย ปรับ หรือหยุด</li></ul>
          </article>
          <article>
            <span>04</span>
            <h3>Shared Clarity</h3>
            <p>
              กำหนดบทบาท เงื่อนไข ตัวชี้วัด
              และสิ่งที่แต่ละฝ่ายจะได้รับให้ชัดเจนตั้งแต่ต้น
            </p>
            <ul><li>ระบุบทบาทและผู้รับผิดชอบของแต่ละฝ่าย</li><li>ตกลงเงื่อนไข ค่าใช้จ่าย และสิ่งส่งมอบ</li><li>ใช้เป้าหมายและ KPI ชุดเดียวกันตลอด Pilot</li></ul>
          </article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}