import {
  Arrow,
  AbstractNetworkVisual,
  BrandIcon,
  BrandLockup,
  MeasureIcon,
  SiteFooter,
  SiteHeader,
  SpaceIcon,
} from "./site-chrome";

export default function Home() {
  return (
    <main>
      <SiteHeader active="solutions" />
      <section className="hero hero-single" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span /> OUR SOLUTIONS
          </div>
          <h1 className="hero-statement">
            <span className="hero-statement-muted">พื้นที่และสินค้า</span>
            <span className="hero-statement-main">เติบโตได้เมื่อจับคู่ถูก</span>
          </h1>
          <p className="hero-lead">
            SPACE CONNEX™
            คือระบบจับคู่เชิงกลยุทธ์ที่เชื่อมเจ้าของพื้นที่กับเจ้าของแบรนด์
            เพื่อทดลองตลาด สร้างรายได้ใหม่ และใช้ข้อมูลจริงวางแผนขยายผล
          </p>
          <div className="hero-actions hero-dual-actions">
            <a className="button button-primary join-button" href="/how-it-works#service-paths">
  ฉันมีพื้นที่ว่าง <Arrow />
</a>
<a className="button button-secondary join-button" href="/how-it-works#service-paths">
  ฉันมีสินค้า/แบรนด์ <Arrow />
</a>
          </div>
          <div className="trust-row">
            <span>วิเคราะห์ความเหมาะสม</span>
            <span>ออกแบบ Pilot</span>
            <span>วัดผลก่อนขยาย</span>
          </div>
        </div>
        <AbstractNetworkVisual home />
      </section>
      {/* The Real Challenge Section : Upgraded Premium Effect */}
      <section 
        className="section relative overflow-hidden py-32" 
        id="real-challenge" 
        style={{ background: 'radial-gradient(circle at 20% 80%, rgba(212,175,55,0.08), transparent 40%), linear-gradient(145deg, #071a31 0%, #0d2c50 50%, #17466f 100%)' }}
      >
        {/* Background Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#34cee2]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto relative z-10">
          
          {/* Header */}
          <div className="max-w-[800px] mx-auto text-center mb-24 scroll-dramatic-up">
  <span className="text-[#34cee2] font-bold text-sm tracking-[0.2em] uppercase mb-4 block">The Real Challenge</span>
  <h2 
    className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
    style={{ color: '#ffffff', opacity: 1 }}
  >
    มีพื้นที่หรือมีสินค้า<br/>
    ยังไม่พอ ถ้าความเหมาะสมไม่ตรงกัน
  </h2>
   <p className="text-[#9ba8b5] text-xl">
              เราช่วยเปลี่ยนโจทย์ที่คลุมเครือให้เป็นโอกาสทดลองที่วัดผลได้
            </p>
          </div>

          {/* Dual Cards Grid (Staggered) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-32">
            
            {/* Card 1: Space Owner */}
            <div className="relative group scroll-dramatic-up">
              {/* Hover Aura Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/30 to-transparent rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>
              
              <div className="relative h-full bg-[#121e2a]/70 backdrop-blur-2xl p-10 lg:p-14 rounded-[40px] border border-white/10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-3 group-hover:border-[#d4af37]/40 flex flex-col">
                <span className="text-[#d4af37] font-bold text-xs tracking-[0.15em] uppercase mb-6 block border border-[#d4af37]/30 bg-[#d4af37]/10 w-max px-4 py-2 rounded-full">Space Owner</span>
                <h3 className="text-3xl lg:text-4xl text-white font-bold mb-6 leading-tight">พื้นที่ยังสร้างรายได้<br />ไม่เต็มศักยภาพ</h3>
                <p className="text-[#9ba8b5] text-lg mb-10 leading-relaxed font-light">
                   ไม่แน่ใจว่าสินค้า กิจกรรม หรือแบรนด์แบบใดจะเข้ากับลูกค้าและบริบทของพื้นที่
      หลายครั้งพื้นที่มีศักยภาพมากกว่าที่ใช้อยู่ แต่ขาดข้อมูลหรือกระบวนการคัดกรองที่ชัดเจน
      ทำให้ไม่กล้าตัดสินใจเปิดรับพาร์ทเนอร์ใหม่
                </p>
                <ul className="space-y-5 mt-auto">
                  <li className="flex items-start text-[#cbd5e1] font-light">
                    <span className="text-[#d4af37] mr-4 mt-1 text-lg">✦</span>
                    <span className="leading-relaxed">ไม่ต้องการรับแบรนด์โดยไม่มีการคัดกรอง</span>
                  </li>
                  <li className="flex items-start text-[#cbd5e1] font-light">
                    <span className="text-[#d4af37] mr-4 mt-1 text-lg">✦</span>
                    <span className="leading-relaxed">ต้องการรายได้ใหม่โดยไม่เสียตัวตนของพื้นที่</span>
                  </li>
                  <li className="flex items-start text-[#cbd5e1] font-light">
                    <span className="text-[#d4af37] mr-4 mt-1 text-lg">✦</span>
                    <span className="leading-relaxed">ไม่มีเวลาหรือทีมงานพอจะประเมินทุกข้อเสนอที่เข้ามา</span>
                  </li>
                  <li className="flex items-start text-[#cbd5e1] font-light">
                    <span className="text-[#d4af37] mr-4 mt-1 text-lg">✦</span>
                    <span className="leading-relaxed">อยากทดลองก่อนผูกพันธะระยะยาวกับพาร์ทเนอร์รายใดรายหนึ่ง</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Brand Owner (Staggered down with lg:mt-20) */}
            <div className="relative group scroll-dramatic-up lg:mt-20">
              {/* Hover Aura Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#34cee2]/20 to-transparent rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>
              
              <div className="relative h-full bg-[#121e2a]/70 backdrop-blur-2xl p-10 lg:p-14 rounded-[40px] border border-white/10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-3 group-hover:border-[#34cee2]/40 flex flex-col">
                <span className="text-[#34cee2] font-bold text-xs tracking-[0.15em] uppercase mb-6 block border border-[#34cee2]/30 bg-[#34cee2]/10 w-max px-4 py-2 rounded-full">Brand Owner</span>
                <h3 className="text-3xl lg:text-4xl text-white font-bold mb-6 leading-tight">อยากทดลองตลาด<br />แต่ไม่รู้ว่าควรเริ่มที่ไหน</h3>
                <p className="text-[#9ba8b5] text-lg mb-10 leading-relaxed font-light">
                  การเลือกพื้นที่จากทำเลหรือราคาเพียงอย่างเดียว อาจไม่ตอบโจทย์กลุ่มลูกค้าจริง
      แบรนด์จำนวนมากลงทุนไปกับพื้นที่ที่ดูดีบนหน้ากระดาษ แต่กลับไม่มีลูกค้าที่ใช่เดินผ่าน
      ทำให้ผลการทดลองไม่สะท้อนศักยภาพที่แท้จริงของสินค้า
                </p>
                <ul className="space-y-5 mt-auto">
                  <li className="flex items-start text-[#cbd5e1] font-light">
                    <span className="text-[#34cee2] mr-4 mt-1 text-lg">✦</span>
                    <span className="leading-relaxed">ต้องการข้อมูลก่อนลงทุนระยะยาว</span>
                  </li>
                  <li className="flex items-start text-[#cbd5e1] font-light">
                    <span className="text-[#34cee2] mr-4 mt-1 text-lg">✦</span>
                    <span className="leading-relaxed">ต้องการพื้นที่ที่มี Customer Fit</span>
                  </li>
                  <li className="flex items-start text-[#cbd5e1] font-light">
                    <span className="text-[#34cee2] mr-4 mt-1 text-lg">✦</span>
                    <span className="leading-relaxed">ไม่อยากเสี่ยงงบประมาณกับพื้นที่ที่ยังไม่ผ่านการประเมิน</span>
                  </li>
                  <li className="flex items-start text-[#cbd5e1] font-light">
                    <span className="text-[#34cee2] mr-4 mt-1 text-lg">✦</span>
                    <span className="leading-relaxed">ต้องการรู้ผลลัพธ์ที่วัดได้ ก่อนตัดสินใจขยายไปพื้นที่อื่น</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Quote Section (Focus Glow) */}
          <div className="scroll-focus-glow max-w-[900px] mx-auto text-center relative px-8 py-16 lg:py-20 rounded-[40px] border border-white/10 bg-gradient-to-b from-[#121e2a]/60 to-transparent backdrop-blur-md">
            {/* Giant Quote Icon */}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[120px] text-[#d4af37] opacity-20 font-serif leading-none select-none">
              &ldquo;
            </span>
            
            <h3 className="text-3xl lg:text-5xl font-bold text-white leading-relaxed relative z-10 tracking-tight">
              เราไม่ได้เริ่มจากพื้นที่ว่าง<br/>
              <span className="text-[#d4af37]">แต่เริ่มจากความเหมาะสมทางธุรกิจ</span>
            </h3>
          </div>

        </div>
      </section>

      <section className="difference-section section">
        <div className="right-heading"><p className="kicker light">BEYOND SPACE LISTING</p><h2>มากกว่าการค้นหาพื้นที่<br />คือการออกแบบโอกาสร่วมกัน</h2></div>
        <div className="difference-stage" data-parallax="slow">
          <div>
            <small>เริ่มจากข้อมูลพื้นฐาน</small>
            <strong>ทำเล + ราคา</strong>
            <span>เหมาะสำหรับการค้นหาตัวเลือก แต่ผู้ใช้ยังต้องวิเคราะห์ความเหมาะสมและความเสี่ยงด้วยตัวเอง</span>
            <ul>
              <li>เปรียบเทียบทำเล ขนาด และค่าใช้จ่าย</li>
              <li>ติดต่อพื้นที่หรือแบรนด์โดยตรง</li>
              <li>ยังไม่มีกรอบทดสอบและตัวชี้วัดร่วมกัน</li>
            </ul>
          </div>
          <div className="difference-core">
            <small>SPACE CONNEX</small>
            <strong>Fit + Pilot + Data</strong>
            <span>เปลี่ยนจากการเลือกด้วยความรู้สึก เป็นกระบวนการจับคู่ที่ตรวจสอบความเป็นไปได้ก่อนลงทุนจริง</span>
            <ul>
              <li>ประเมิน Customer, Location, Product และ Brand Fit</li>
              <li>คัดกรองพาร์ทเนอร์และออกแบบเงื่อนไข Pilot</li>
              <li>กำหนดระยะเวลา งบประมาณ KPI และข้อมูลที่ต้องเก็บ</li>
              <li>ติดตามผลเพื่อวางแผนขยาย ปรับรูปแบบ หรือยุติการทดลอง</li>
            </ul>
          </div>
          <div>
            <small>ผลลัพธ์ที่นำไปใช้ต่อ</small>
            <strong>ตัดสินใจจากข้อมูลจริง</strong>
            <span>ทั้งเจ้าของพื้นที่และเจ้าของแบรนด์มองเห็นโอกาส ต้นทุน และขั้นตอนถัดไปได้ชัดขึ้น</span>
            <ul>
              <li>รู้ว่าโมเดลใดควรขยาย ปรับ หรือหยุด</li>
              <li>เห็นเงื่อนไขเชิงพาณิชย์ที่เหมาะสม</li>
              <li>มีข้อมูลประกอบการลงทุนระยะถัดไป</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="fit-system section" aria-labelledby="fit-system-title">
        <div className="fit-continuation"><span>FIT + PILOT + DATA</span><p>ต่อจากกรอบการทำงานด้านบน นี่คือรายละเอียดของ Fit + Pilot + Data ที่เราใช้ตรวจความเหมาะสมก่อนออกแบบการทดลองจริง</p></div>
        <div className="fit-heading"><p className="kicker light">THE FIT SYSTEM</p><h2 id="fit-system-title">ก่อนจับคู่<br />เรามองให้ครบ 6 ด้าน</h2><p>เพราะพื้นที่ที่ดีอาจไม่เหมาะกับทุกสินค้า และสินค้าที่ดีอาจไม่เหมาะกับทุกพื้นที่</p></div>
      <div className="fit-bento">
  <article className="fit-large">
    <div>
      <span>01</span>
      <h3>Customer Fit</h3>
      <p>กลุ่มลูกค้า พฤติกรรม กำลังซื้อ และเหตุผลที่เข้ามาใช้พื้นที่</p>
      <a className="fit-more-link" href="/fit-customer">ดูรายละเอียด <Arrow /></a>
    </div>
  </article>
  <article className="fit-location">
    <span>02</span>
    <h3>Location Fit</h3>
    <p>ทำเล การเข้าถึง ช่วงเวลา และ Traffic ที่เกี่ยวข้อง</p>
    <a className="fit-more-link" href="/fit-location">ดูรายละเอียด <Arrow /></a>
  </article>
  <article className="fit-product">
    <span>03</span>
    <h3>Product Fit</h3>
    <p>หมวดสินค้า ราคา และรูปแบบการตัดสินใจซื้อ</p>
    <a className="fit-more-link" href="/fit-product">ดูรายละเอียด <Arrow /></a>
  </article>
  <article className="fit-commercial">
    <span>04</span>
    <h3>Commercial Fit</h3>
    <p>ต้นทุน รายได้ และเงื่อนไขที่สมเหตุสมผล</p>
    <a className="fit-more-link" href="/fit-commercial">ดูรายละเอียด <Arrow /></a>
  </article>
  <article className="fit-operation">
    <span>05</span>
    <h3>Operational Fit</h3>
    <p>พื้นที่ อุปกรณ์ บุคลากร และระยะเวลา</p>
    <a className="fit-more-link" href="/fit-operational">ดูรายละเอียด <Arrow /></a>
  </article>
  <article className="fit-wide">
    <div className="fit-wide-copy">
      <span>06</span>
      <h3>Brand Fit</h3>
      <p>ภาพลักษณ์ คุณค่า และประสบการณ์ที่ทั้งสองฝ่ายต้องการสร้างร่วมกัน</p>
      <a className="fit-more-link" href="/fit-brand">ดูรายละเอียด <Arrow /></a>
    </div>
  </article>
</div>
      </section>


{/* Post-Match Support Section : Open Layout (ไร้กรอบ) + Scrollytelling */}
      <section 
        className="section relative overflow-hidden pb-32" 
        id="support"
        style={{ background: 'radial-gradient(circle at 80% 15%, rgba(87,146,202,.22), transparent 31%), linear-gradient(142deg, #06192f, #0d3154 60%, #174a74)' }}
      >
        
        {/* CSS สำหรับ Kinetic Typography */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes kinetic-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-kinetic {
            display: inline-block;
            white-space: nowrap;
            animation: kinetic-scroll 25s linear infinite;
          }
        `}} />

        {/* 1. Kinetic Typography (Background Marquee) */}
        <div className="absolute top-32 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none z-0">
          <h1 className="text-[12vw] font-black uppercase tracking-tighter text-white animate-kinetic">
            BEYOND MATCHING • DATA DRIVEN • AGILE OPTIMIZATION • SEAMLESS REMATCHING • BEYOND MATCHING • DATA DRIVEN • AGILE OPTIMIZATION • SEAMLESS REMATCHING • 
          </h1>
        </div>

        {/* Header Section */}
        <div className="max-w-[900px] mx-auto text-center mb-24 relative z-10 pt-16">
          <p className="kicker text-center text-[#d4af37] tracking-[0.3em] animate-pulse">BEYOND MATCHING</p>
          <h2 
            className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight"
            style={{ 
              background: 'linear-gradient(105deg, #ffffff 0%, #fffdf6 48%, #f1d58f 82%, #d5ae55 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent'
            }}
          >
            มากกว่าแค่การจับคู่<br />แต่เราดูแลจนกว่าคุณจะสำเร็จ
          </h2>
          <p className="text-[#9ba8b5] text-xl font-light">
            SPACE CONNEX™ ไม่ปล่อยให้คุณทำงานเพียงลำพัง เรามีทีมงานเคียงข้างตลอดกระบวนการ
          </p>
        </div>

        <div className="max-w-[1280px] mx-auto flex flex-col gap-32 lg:gap-40 relative z-10">
          
          {/* =========================================
              Step 01: Data & Tracking (Image Left, Text Right)
              ========================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center group">
            
            {/* Scrollytelling: Sticky Image Container */}
            <div className="lg:col-span-5 relative h-full">
              <div className="lg:sticky lg:top-32 h-[450px] lg:h-[650px] rounded-[40px] overflow-hidden shadow-2xl transition-all duration-1000 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.1)] group-hover:-translate-y-2">
                <img 
                  src="/space-connex-hotel.webp" 
                  alt="ทีมงานติดตามผล" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110 opacity-90" 
                />
                
                {/* Micro-interaction: Status Badge */}
                <div className="absolute bottom-10 left-10 bg-[#06192f]/80 backdrop-blur-md px-6 py-4 rounded-3xl shadow-xl border border-white/10 transition-transform duration-700 hover:scale-105 cursor-default">
                  <span className="text-[#d4af37] font-bold text-sm tracking-widest flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#f1d58f]"></span>
                    </span>
                    Data-Driven
                  </span>
                </div>
              </div>
            </div>

            {/* Content (ไร้กรอบ) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="mb-12">
                <span className="text-[#d4af37] font-bold text-xs tracking-[0.2em] mb-4 uppercase block">Step 01</span>
                <h3 className="text-4xl lg:text-5xl text-white font-bold mb-6 tracking-tight">ติดตามผลและ<br/>วิเคราะห์ข้อมูล</h3>
                <p className="text-[#9ba8b5] text-lg leading-relaxed m-0 font-light">
                 เราไม่ได้แค่แมตช์พื้นที่แล้วจบไป แต่มีทีม Support และที่ปรึกษาส่วนตัวคอยดูแลระบบหลังบ้านตลอดแคมเปญ จัดเก็บข้อมูลอย่างเป็นระบบ เพื่อให้คุณเห็นภาพรวมและแนวโน้มที่แท้จริง ไม่ต้องเดาเอง ไม่ต้องรอผลลัพธ์แบบไม่มีที่มา
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-5 text-[#d4af37]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </div>
                  <b className="block text-white text-xl mb-3">สิ่งที่เราติดตาม</b>
                  <ul className="text-[#9ba8b5] text-base leading-relaxed font-light list-disc pl-5">
                    <li>ยอดขายรายวัน และยอดขายเทียบช่วงเวลา</li>
                    <li>Feedback จากลูกค้าหน้างานโดยตรง</li>
                    <li>Traffic และความสนใจของลูกค้าในพื้นที่</li>
                    <li>พฤติกรรมการเลือกซื้อสินค้าในแต่ละจุดขาย</li>
                  </ul>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-5 text-[#d4af37]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  </div>
                  <b className="block text-white text-xl mb-3">สิ่งที่คุณจะได้รับ</b>
                  <ul className="text-[#9ba8b5] text-base leading-relaxed font-light list-disc pl-5">
                    <li>คำแนะนำเชิงลึกจากทีมผู้เชี่ยวชาญ</li>
                    <li>แนวทางปรับกลยุทธ์ต่อยอดจากข้อมูลจริง</li>
                    <li>อัปเดตสถานะแคมเปญผ่านทีมดูแล</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================
              Step 02: Agile Optimization (Text Left, Image Right)
              ========================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center group">
            
            {/* Content (ไร้กรอบ) */}
            <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
              <div className="mb-12">
                <span className="text-[#d4af37] font-bold text-xs tracking-[0.2em] mb-4 uppercase block">Step 02</span>
                <h3 className="text-4xl lg:text-5xl text-white font-bold mb-6 tracking-tight">ปรับกลยุทธ์ทันที<br/>เมื่อไม่ตามเป้า</h3>
                <p className="text-[#9ba8b5] text-lg leading-relaxed m-0 font-light">
                  หากยอดขายหรือความสนใจไม่เกิดตามที่คาด เราไม่ปล่อยให้เวลาสูญเปล่า ทีมงานพร้อมพูดคุยและลงพื้นที่เพื่อวิเคราะห์ปัญหา พร้อมปรับเปลี่ยนมุมจัดวางสินค้าให้โดดเด่นยิ่งขึ้น ทุกการตัดสินใจอิงจากข้อมูลจริง ไม่ใช่การเดา
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-5 text-[#d4af37]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </div>
                  <b className="block text-white text-xl mb-3">เมื่อเกิดปัญหา</b>
                  <ul className="text-[#9ba8b5] text-base leading-relaxed font-light list-disc pl-5">
                    <li>ทีมงานตรวจสอบสาเหตุหน้างานอย่างรวดเร็ว</li>
                    <li>หารือร่วมกับเจ้าของพื้นที่ทันที</li>
                    <li>วิเคราะห์จุดที่ลูกค้าสนใจ vs จุดที่ถูกมองข้าม</li>
                    <li>ประเมินว่าเป็นปัญหาเรื่องทำเล การจัดวาง หรือการนำเสนอ</li>
                  </ul>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-5 text-[#d4af37]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 Z"/></svg>
                  </div>
                  <b className="block text-white text-xl mb-3">การแก้ปัญหา</b>
                  <ul className="text-[#9ba8b5] text-base leading-relaxed font-light list-disc pl-5">
                    <li>ปรับเปลี่ยนมุมจัดแสดงสินค้าให้สะดุดตามากขึ้น</li>
                    <li>เพิ่มสื่อโปรโมท (POSM) ณ จุดขาย</li>
                    <li>ปรับวิธีการนำเสนอและการพูดคุยกับลูกค้า</li>
                    <li>ทดลองจัดชุดสินค้า (Bundle) หรือโปรโมชันเฉพาะพื้นที่</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Scrollytelling: Sticky Image Container */}
            <div className="lg:col-span-5 relative h-full order-1 lg:order-2">
              <div className="lg:sticky lg:top-32 h-[450px] lg:h-[650px] rounded-[40px] overflow-hidden shadow-2xl transition-all duration-1000 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.1)] group-hover:-translate-y-2">
                <img 
                  src="/workshop.jpg" 
                  alt="ปรับกลยุทธ์หน้างาน" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110 opacity-90" 
                />
                
                <div className="absolute bottom-10 right-10 bg-[#06192f]/80 backdrop-blur-md px-6 py-4 rounded-3xl shadow-xl border border-white/10 transition-transform duration-700 hover:scale-105 cursor-default">
                  <span className="text-[#d4af37] font-bold text-sm tracking-widest flex items-center gap-3">
                    Fast Action ⚡
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* =========================================
              Step 03: Seamless Re-matching (Image Left, Text Right)
              ========================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center group">
            
            {/* Scrollytelling: Sticky Image Container */}
            <div className="lg:col-span-5 relative h-full">
              <div className="lg:sticky lg:top-32 h-[450px] lg:h-[650px] rounded-[40px] overflow-hidden shadow-2xl transition-all duration-1000 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.1)] group-hover:-translate-y-2">
                <img 
                  src="/space-connex-popup.webp" 
                  alt="จับคู่พื้นที่ใหม่" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110 opacity-90" 
                />
                
                <div className="absolute bottom-10 left-10 bg-[#06192f]/80 backdrop-blur-md px-6 py-4 rounded-3xl shadow-xl border border-white/10 transition-transform duration-700 hover:scale-105 cursor-default">
                  <span className="text-[#d4af37] font-bold text-sm tracking-widest flex items-center gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"/><path d="m15 9 6-6"/></svg>
                    Re-matching
                  </span>
                </div>
              </div>
            </div>

            {/* Content (ไร้กรอบ) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="mb-12">
                <span className="text-[#d4af37] font-bold text-xs tracking-[0.2em] mb-4 uppercase block">Step 03</span>
                <h3 className="text-4xl lg:text-5xl text-white font-bold mb-6 tracking-tight">จับคู่ใหม่ให้<br/>โดยไม่ต้องเริ่มเอง</h3>
                <p className="text-[#9ba8b5] text-lg leading-relaxed m-0 font-light">
                  หากประเมินแล้วว่าทำเลเดิมไม่ตอบโจทย์จริงๆ ระบบจะนำ Data มาวิเคราะห์และหาทำเลใหม่ที่เหมาะสมกว่าให้คุณทันที โดยไม่ต้องเสียเวลาไปเริ่มต้นหาใหม่เองตั้งแต่ศูนย์
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-5 text-[#d4af37]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
                  </div>
                  <b className="block text-white text-xl mb-3">การประเมินทบทวน</b>
                  <ul className="text-[#9ba8b5] text-base leading-relaxed font-light list-disc pl-5">
                    <li>ทีมงานวิเคราะห์ความคุ้มค่า โอกาสการเติบโต และข้อจำกัดของพื้นที่เดิม</li>
                    <li>เปรียบเทียบผลลัพธ์จริงกับเป้าหมายที่ตั้งไว้</li>
                    <li>ตัดสินใจร่วมกับคุณก่อนย้ายทุกครั้ง ไม่มีการตัดสินใจฝ่ายเดียว</li>
                  </ul>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-5 text-[#d4af37]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/></svg>
                  </div>
                  <b className="block text-white text-xl mb-3">การจับคู่ครั้งใหม่</b>
                  <ul className="text-[#9ba8b5] text-base leading-relaxed font-light list-disc pl-5">
                    <li>ใช้ข้อมูลจากพื้นที่เดิมเป็นฐาน เพื่อเฟ้นหาพื้นที่ที่มี Customer Fit ได้แม่นยำกว่าเดิม</li>
                    <li>จับคู่กับทำเลใหม่ที่ตรงกลุ่มเป้าหมายมากขึ้น</li>
                    <li>เริ่มดำเนินการได้ทันที ไม่ต้องรอกระบวนการเริ่มต้นใหม่ทั้งหมด</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
  <section className="section relative overflow-hidden" id="solutions" style={{ background: 'radial-gradient(circle at 80% 12%, rgba(102,151,198,.24), transparent 30%), radial-gradient(circle at 12% 88%, rgba(219,183,99,.12), transparent 28%), linear-gradient(135deg, #26394d 0%, #1b3048 55%, #10283f 100%)' }}>
        {/* Background Parallax Effect */}
        <div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(212,175,55,0.15), transparent 30%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.05), transparent 30%)',
            backgroundAttachment: 'fixed' 
          }}
        />

        <div className="max-w-[900px] mx-auto text-center mb-16 lg:mb-24 relative z-10">
          <p className="kicker text-center text-[#d4af37]">2 MAIN PATHS</p>
         <h2 
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ 
              background: 'linear-gradient(105deg, #ffffff 0%, #fffdf6 48%, #f1d58f 82%, #d5ae55 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent'
            }}
          >
            เลือกเส้นทางที่ใช่<br />เพื่อเริ่มก้าวแรกกับเรา
          </h2>
          <p className="text-gray-300 text-lg">
            ทุกบริการเริ่มจากการประเมิน เลือกเส้นทางที่เป็นคุณเพื่อเข้าสู่กระบวนการจับคู่
          </p>
        </div>

        <div className="max-w-[1280px] mx-auto flex flex-col gap-24 lg:gap-32 relative z-10">
          
          {/* ทางเลือก 1: สำหรับเจ้าของพื้นที่ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center group">
            {/* Parallax Image Section (Left) */}
            <div className="lg:col-span-5 relative h-[400px] lg:h-[650px] rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.4)] transition-transform duration-700 group-hover:-translate-y-3" data-parallax>
              <img 
                src="/space-connex-cafe.webp" 
                alt="พื้นที่คาเฟ่สำหรับวางสินค้า" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90" 
              />
              {/* Floating Element */}
              <div className="absolute bottom-8 left-8 bg-[#0b192c]/80 backdrop-blur-md px-5 py-3 rounded-2xl shadow-2xl border border-white/20 transition-transform duration-700 group-hover:translate-y-3">
                <span className="text-[#d4af37] font-bold text-sm tracking-wider">✓ Space Verified</span>
              </div>
            </div>

            {/* Bento Grid Content Section (Right) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {/* Bento: Title & Description */}
              <div className="sm:col-span-2 bg-[#122841]/80 backdrop-blur-md p-8 lg:p-10 rounded-[32px] shadow-xl border border-white/10 transition-transform hover:-translate-y-1">
                <span className="text-[#d4af37] font-bold text-sm tracking-widest mb-3 uppercase block">01 · สำหรับเจ้าของพื้นที่</span>
                <h3 className="text-3xl lg:text-4xl text-white font-bold mb-4">หาสินค้ามาเติมพื้นที่</h3>
                <p className="text-gray-300 text-lg leading-relaxed m-0">
                  เหมาะกับคาเฟ่ ร้านค้า โรงแรม และ Wellness ที่ต้องการเพิ่มรายได้หรือประสบการณ์ใหม่ให้ลูกค้า
                </p>
              </div>

              {/* Bento: การประเมิน */}
              <div className="bg-[#173f68]/40 backdrop-blur-md p-7 rounded-[32px] border border-white/10 shadow-xl transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center mb-4">
                  <span className="text-[#d4af37] text-lg font-bold">1</span>
                </div>
                <b className="block text-white text-lg mb-2">สิ่งที่เราจะประเมิน</b>
                <span className="text-gray-300 text-sm leading-relaxed block">ทำเล ลูกค้า พื้นที่พร้อมใช้ และหมวดสินค้าที่สอดคล้อง</span>
              </div>

              {/* Bento: สิ่งที่ได้รับ */}
              <div className="bg-[#173f68]/40 backdrop-blur-md p-7 rounded-[32px] border border-white/10 shadow-xl transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <span className="text-white text-lg font-bold">2</span>
                </div>
                <b className="block text-white text-lg mb-2">สิ่งที่คุณจะได้รับ</b>
                <span className="text-gray-300 text-sm leading-relaxed block">แนวทางคัดเลือกแบรนด์ รูปแบบ Pilot และตัวชี้วัดเบื้องต้น</span>
              </div>

              {/* Bento: CTA Button - GOLD */}
              <div className="sm:col-span-2 mt-2">
                <a href="/apply?service=products&partner=space" className="flex items-center justify-between bg-gradient-to-r from-[#d4af37] to-[#b98e3d] p-6 lg:p-7 rounded-[32px] text-[#0b192c] hover:brightness-110 transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(212,175,55,0.3)] group/btn">
                  <span className="font-bold text-lg lg:text-xl ml-2">กรอกข้อมูลพื้นที่เพื่อประเมิน</span>
                  <span className="w-12 h-12 bg-[#0b192c]/10 rounded-full flex items-center justify-center group-hover/btn:bg-[#0b192c]/20 transition-colors">
                    <Arrow />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* ทางเลือก 2: สำหรับแบรนด์ (Reversed) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center group border-t border-white/10 pt-24 lg:pt-32">
            
            {/* Bento Grid Content Section (Left on Desktop) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 order-2 lg:order-1">
              <div className="sm:col-span-2 bg-[#122841]/80 backdrop-blur-md p-8 lg:p-10 rounded-[32px] shadow-xl border border-white/10 transition-transform hover:-translate-y-1">
                <span className="text-[#d4af37] font-bold text-sm tracking-widest mb-3 uppercase block">02 · สำหรับแบรนด์และผู้ผลิต</span>
                <h3 className="text-3xl lg:text-4xl text-white font-bold mb-4">หาพื้นที่ทดลองวางสินค้า</h3>
                <p className="text-gray-300 text-lg leading-relaxed m-0">
                  เหมาะกับแบรนด์ที่ต้องการจัด Pop-up, จัด Workshop หรือทดสอบตลาดก่อนเปิดร้านจริง
                </p>
              </div>

              <div className="bg-[#173f68]/40 backdrop-blur-md p-7 rounded-[32px] border border-white/10 shadow-xl transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center mb-4">
                  <span className="text-[#d4af37] text-lg font-bold">1</span>
                </div>
                <b className="block text-white text-lg mb-2">สิ่งที่เราจะประเมิน</b>
                <span className="text-gray-300 text-sm leading-relaxed block">สินค้า ราคา กลุ่มเป้าหมาย และประเภทพื้นที่ที่มี Customer Fit</span>
              </div>

              <div className="bg-[#173f68]/40 backdrop-blur-md p-7 rounded-[32px] border border-white/10 shadow-xl transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <span className="text-white text-lg font-bold">2</span>
                </div>
                <b className="block text-white text-lg mb-2">สิ่งที่คุณจะได้รับ</b>
                <span className="text-gray-300 text-sm leading-relaxed block">กรอบพื้นที่ที่เหมาะ เงื่อนไข Pilot และข้อมูลที่ควรเก็บ</span>
              </div>

              <div className="sm:col-span-2 mt-2">
                <a href="/apply?service=space&partner=brand" className="flex items-center justify-between bg-gradient-to-r from-[#d4af37] to-[#b98e3d] p-6 lg:p-7 rounded-[32px] text-[#0b192c] hover:brightness-110 transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(212,175,55,0.3)] group/btn">
                  <span className="font-bold text-lg lg:text-xl ml-2">กรอกข้อมูลแบรนด์และสินค้า</span>
                  <span className="w-12 h-12 bg-[#0b192c]/10 rounded-full flex items-center justify-center group-hover/btn:bg-[#0b192c]/20 transition-colors">
                    <Arrow />
                  </span>
                </a>
              </div>
            </div>

            {/* Parallax Image Section (Right on Desktop) */}
            <div className="lg:col-span-5 relative h-[400px] lg:h-[650px] rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.4)] transition-transform duration-700 group-hover:-translate-y-3 order-1 lg:order-2" data-parallax>
              <img 
                src="/space-connex-popup.webp" 
                alt="แบรนด์ทดลองสินค้าในพื้นที่จริง" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90" 
              />
              {/* Floating Element */}
              <div className="absolute bottom-8 right-8 bg-[#0b192c]/80 backdrop-blur-md px-5 py-3 rounded-2xl shadow-2xl border border-white/20 transition-transform duration-700 group-hover:translate-y-3">
                <span className="text-[#d4af37] font-bold text-sm tracking-wider">✓ Brand Matched</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="world-intro trust-summary section" id="about-space-connex">
        <div className="world-intro-visual" data-parallax="slow">
          <img src="/images6.jpg" alt="Nannapas Seesai CEO ICONNEX WORLD ผู้พัฒนา SPACE CONNEX" />
          <span className="world-intro-tag">GLOBAL STRATEGY · LOCAL OPPORTUNITY</span>
        </div>
        <div className="world-intro-copy">
          <p className="kicker">TRUST &amp; LEADERSHIP</p>
          <h2><span>SPACE CONNEX</span><br />เติบโตบนความร่วมมือที่ตรวจสอบได้</h2>
          <p>SPACE CONNEX™ พัฒนาโดย Nannapas Seesai — CEO เพื่อเชื่อมเจ้าของพื้นที่ แบรนด์ และพันธมิตรทางธุรกิจผ่านการประเมินความเหมาะสม การออกแบบ Pilot และกรอบข้อมูลที่ชัดเจนก่อนเริ่มความร่วมมือ</p>
          <p className="parent-company-line">ดำเนินการภายใต้เครือ ICONNEX WORLD</p>
          <div className="world-intro-points" aria-label="หลักการทำงานของ SPACE CONNEX WORLD"><span>Strategic Matching</span><span>Pilot Design</span><span>Data-led Growth</span></div>
          <a className="button button-primary" href="/trust">ดูข้อมูลบริษัทและผู้บริหาร <Arrow /></a>
        </div>
      </section>

      <section className="solution-faq section">
        <div className="faq-heading"><p className="kicker">BEFORE YOU START</p><h2>คำถามก่อนเริ่มต้น</h2></div>
        <div className="faq-list"><details><summary>การส่งข้อมูลมีค่าใช้จ่ายหรือไม่?</summary><p>การส่งข้อมูลเพื่อให้ทีมตรวจสอบเบื้องต้นยังไม่ใช่การยืนยันบริการ ค่าใช้จ่ายและขอบเขตงานจะแจ้งหลังประเมินโจทย์แล้ว</p></details><details><summary>แบรนด์ขนาดเล็กสามารถส่งข้อมูลได้หรือไม่?</summary><p>ได้ เราพิจารณาจากความพร้อม ความเหมาะสม และเป้าหมายของการทดลอง ไม่ได้พิจารณาจากขนาดธุรกิจเพียงอย่างเดียว</p></details><details><summary>SPACE CONNEX รับประกันยอดขายหรือไม่?</summary><p>ไม่รับประกันยอดขาย แต่ช่วยออกแบบเงื่อนไขทดลองและข้อมูลที่ควรเก็บ เพื่อให้ตัดสินใจจากตลาดจริงได้ดีขึ้น</p></details><details><summary>ใช้เวลาประเมินเบื้องต้นกี่วัน?</summary><p>ทีมจะตรวจสอบข้อมูลและติดต่อกลับภายใน 3–5 วันทำการ หากต้องใช้ข้อมูลเพิ่มจะประสานกับผู้ติดต่อโดยตรง</p></details></div>
      </section>
      <section className="cta-section">
        <div className="cta-copy">
          <BrandLockup inverse />
          <p className="kicker light">FIND THE RIGHT FIT</p>
          <h2>เริ่มจากสิ่งที่คุณมี แล้วออกแบบโอกาสร่วมกัน</h2>
          <p>
            บอกเราว่าคุณมีพื้นที่หรือมีสินค้า
            เพื่อเริ่มประเมินความเหมาะสมและกำหนด Pilot เบื้องต้น
          </p>
        </div>
        <div className="cta-choice">
          <div>
            <span>01</span>
            <h3>มีพื้นที่</h3>
            <p>เพิ่มศักยภาพพื้นที่ด้วยสินค้า กิจกรรม และพาร์ทเนอร์ที่เหมาะสม</p>
          </div>
          <div>
            <span>02</span>
            <h3>มีสินค้า</h3>
            <p>ค้นหาพื้นที่ทดลองขายที่ตรงกับกลุ่มเป้าหมายและเป้าหมายธุรกิจ</p>
          </div>
          <a className="button button-gold" href="/how-it-works#service-paths">
            ส่งข้อมูลให้ทีมประเมิน <Arrow />
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
