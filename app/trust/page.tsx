import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-chrome";
export const metadata: Metadata = {
  title: "ความน่าเชื่อถือ | SPACE CONNEX™",
  description:
    "ข้อมูลตรวจสอบบริษัทและทีมผู้บริหาร ICONNEX WORLD สำหรับประกอบการพิจารณาความร่วมมือ",
};
export default function TrustPage() {
  return (
    <main>
      <SiteHeader active="trust" />
      <PageHero
        eyebrow="TRUST & VERIFICATION"
        title={
          <>ข้อมูลพร้อมตรวจสอบก่อนเริ่มความร่วมมือ</>
        }
        description="รวม Company Verification และทีมผู้บริหารไว้ในหน้าเดียว เพื่อให้คู่ค้าเห็นข้อมูลสำคัญและผู้รับผิดชอบโดยตรงอย่างชัดเจน"
        visual="collage"
        tags={["COMPANY", "LEADERSHIP", "PARTNERSHIP"]}
      />
      <section className="trust-overview section">
        <div className="verification-panel">
          <div className="verification-heading">
            <span className="verified-mark">✓</span>
            <div>
              <p>COMPANY VERIFICATION</p>
              <h3>ICONNEX WORLD</h3>
              <span>บริษัท ไอซีเอ็น จำกัด • ICN CO., LTD.</span>
            </div>
          </div>
          <dl className="verification-data">
            <div>
              <dt>เลขทะเบียนนิติบุคคล</dt>
              <dd>0115565009421</dd>
            </div>
            <div>
              <dt>ผู้บริหาร</dt>
              <dd>Nannapas Seesai — CEO</dd>
            </div>
            <div>
              <dt>ที่ตั้งสำนักงาน</dt>
              <dd>204/38 ถนนสรรพาวุธ แขวงบางนาใต้ เขตบางนา กรุงเทพฯ 10260</dd>
            </div>
            <div>
              <dt>ช่องทางตรวจสอบ</dt>
              <dd>
                <a href="mailto:iconnexworld@gmail.com">
                  iconnexworld@gmail.com
                </a>
                <br />
                <a href="https://www.iconnexthailand.com">
                  www.iconnexthailand.com
                </a>
              </dd>
            </div>
          </dl>
          <p className="source-note">
            ข้อมูลอ้างอิงจากเอกสารบริษัทที่จัดเตรียมไว้สำหรับคู่ค้า
          </p>
        </div>
        <div className="leadership-heading">
          <div>
            <p className="kicker">VERIFIED LEADERSHIP</p>
            <h2>ทีมผู้บริหารที่ประสานงานได้โดยตรง</h2>
          </div>
          <p>
            ข้อมูลบริษัท ตำแหน่ง และช่องทางติดต่อถูกรวบรวมในรูปแบบเดียวกัน
            เพื่อยืนยันตัวตนและลดความคลุมเครือก่อนเริ่มงาน
          </p>
        </div>
        <div className="executive-profiles">
          <article className="executive-profile executive-ceo">
            <div className="executive-portrait"><img src="/nannapas-seesai.png" alt="Nannapas Seesai CEO ICONNEX WORLD" /></div>
            <div className="executive-content">
              <div className="executive-title"><span>CHIEF EXECUTIVE OFFICER</span><div className="executive-name-row"><h3>Nannapas Seesai</h3><b className="executive-role-chip">CEO</b></div><p>Global Strategy · Digital Innovation · Sustainable Growth</p><strong>Navigating Global Success</strong></div>
              <div className="executive-pillars" aria-label="ความเชี่ยวชาญของ Nannapas Seesai">
                <div><b>Global Perspective</b><span>มองไกลระดับสากล วางกลยุทธ์เพื่อการเติบโตอย่างยั่งยืน</span></div>
                <div><b>Digital Innovation</b><span>ผสานเทคโนโลยีและ AI สร้างสรรค์โซลูชันที่ล้ำสมัย</span></div>
                <div><b>Strategic Growth</b><span>ขับเคลื่อนธุรกิจด้วยกลยุทธ์ที่แม่นยำ วัดผลได้จริง</span></div>
                <div><b>Partnership Excellence</b><span>ทำงานร่วมกับพันธมิตรอย่างมืออาชีพ เพื่อผลลัพธ์ที่ดีที่สุด</span></div>
                <div><b>People Empowerment</b><span>พัฒนาศักยภาพคนและองค์กรให้พร้อมก้าวสู่อนาคต</span></div>
              </div>
              <div className="executive-contact-grid">
                <div><span>โทรศัพท์</span><a href="tel:+66945462224">+66 94 546 2224</a><a href="tel:+66909146992">+66 90 914 6992</a></div>
                <div><span>LINE · WhatsApp · WeChat</span><a href="tel:+66945462224">+66 94 546 2224</a></div>
                <div><span>อีเมล</span><a href="mailto:iconnexworld@gmail.com">iconnexworld@gmail.com</a></div>
                <div><span>เว็บไซต์</span><a href="https://www.iconnexthailand.com">www.iconnexthailand.com</a></div>
              </div>
              <div className="executive-company-facts">
                <div><span>บริษัท</span><b>บริษัท ไอซีเอ็น จำกัด · ICN CO., LTD.</b></div>
                <div><span>เลขทะเบียนนิติบุคคล</span><b>0115565009421</b></div>
                <div><span>สำนักงาน</span><b>204/38 ถนนสรรพาวุธ แขวงบางนาใต้ เขตบางนา กรุงเทพฯ 10260</b></div>
                <div><span>สถานะ</span><b>Verified Company · Trusted · Professional · Global</b></div>
              </div>
            </div>
          </article>

          <article className="executive-profile executive-coo">
            <div className="executive-portrait"><img src="/nuttanicha-seesay.png" alt="Nuttanicha Seesay COO ICONNEX WORLD" /></div>
            <div className="executive-content">
              <div className="executive-title">
                <span>CHIEF OPERATING OFFICER</span>
                <div className="executive-name-row">
                  <h3>Nuttanicha Seesay</h3>
                  <b className="executive-role-chip">COO</b>
                </div>
                <p>ผู้ประสานงานด้านปฏิบัติการและความร่วมมือ</p>
                <strong>Operational Coordination · Partnership Support</strong>
              </div>
              <div className="executive-pillars" aria-label="หลักการดำเนินงานของ ICONNEX WORLD">
                <div><b>Global Perspective</b><span>มองไกลระดับสากล วางกลยุทธ์เพื่อการเติบโตอย่างยั่งยืน</span></div>
                <div><b>Digital Innovation</b><span>ผสานเทคโนโลยีและ AI สร้างสรรค์โซลูชันที่ล้ำสมัย</span></div>
                <div><b>Strategic Growth</b><span>ขับเคลื่อนธุรกิจด้วยกลยุทธ์ที่แม่นยำ วัดผลได้จริง</span></div>
                <div><b>Partnership Excellence</b><span>ทำงานร่วมกับพันธมิตรอย่างมืออาชีพ เพื่อผลลัพธ์ที่ดีที่สุด</span></div>
                <div><b>People Empowerment</b><span>พัฒนาศักยภาพคนและองค์กรให้พร้อมก้าวสู่อนาคต</span></div>
              </div>
              <div className="executive-contact-grid">
                <div><span>โทรศัพท์โดยตรง</span><a href="tel:+66832346438">+66 83 234 6438</a></div>
                <div><span>ช่องทางบริษัท · LINE · WhatsApp · WeChat</span><a href="tel:+66945462224">+66 94 546 2224</a></div>
                <div><span>อีเมล</span><a href="mailto:iconnexworld@gmail.com">iconnexworld@gmail.com</a></div>
                <div><span>เว็บไซต์</span><a href="https://www.iconnexthailand.com">www.iconnexthailand.com</a></div>
              </div>
              <div className="executive-company-facts">
                <div><span>บริษัท</span><b>บริษัท ไอซีเอ็น จำกัด · ICN CO., LTD.</b></div>
                <div><span>เลขทะเบียนนิติบุคคล</span><b>0115565009421</b></div>
                <div><span>สำนักงาน</span><b>204/38 ถนนสรรพาวุธ แขวงบางนาใต้ เขตบางนา กรุงเทพฯ 10260</b></div>
                <div><span>สถานะ</span><b>Verified Company · Trusted · Professional · Global</b></div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
