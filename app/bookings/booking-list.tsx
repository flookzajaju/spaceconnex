"use client";
import { useCallback, useEffect, useState } from "react";
import { services, statuses, type Booking } from "../booking-options";
const requestLabels: Record<string,string> = { spaceType:"ประเภทพื้นที่",customerProfile:"กลุ่มลูกค้าหลัก",availableArea:"พื้นที่พร้อมใช้งาน",productCategories:"หมวดสินค้าที่สนใจ",productName:"ชื่อสินค้า",productCategory:"หมวดสินค้า",priceRange:"ช่วงราคา",targetCustomer:"กลุ่มลูกค้าเป้าหมาย",preferredArea:"ลักษณะพื้นที่ที่ต้องการ",popupFormat:"รูปแบบ Pop-up",campaignGoal:"เป้าหมาย",duration:"ระยะเวลา",activityName:"ชื่อกิจกรรม",activityType:"รูปแบบกิจกรรม",participants:"จำนวนผู้เข้าร่วม",spaceNeeds:"พื้นที่และอุปกรณ์",consultationTopic:"เรื่องที่ปรึกษา",currentSituation:"สถานการณ์ปัจจุบัน",desiredOutcome:"ผลลัพธ์ที่ต้องการ",challenge:"ปัญหาที่ต้องการประเมิน" };
export default function BookingList({ admin }: { admin: boolean }) {
  const [scope,setScope] = useState(admin ? "all" : "mine");
  const [items,setItems] = useState<Booking[]>([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState("");
  const [filter,setFilter] = useState("all");
  const load = useCallback(async (signal?: AbortSignal) => {
    setLoading(true); setError("");
    try { const response = await fetch(`/api/bookings?scope=${scope}`,{ cache: "no-store", signal }); const data = await response.json() as { error?: string; bookings: Booking[] }; if (!response.ok) throw new Error(data.error); setItems(data.bookings); }
    catch(e) { if (!signal?.aborted) setError(e instanceof Error ? e.message : "โหลดรายการไม่สำเร็จ"); }
    finally { if (!signal?.aborted) setLoading(false); }
  },[scope]);
  useEffect(() => { const controller = new AbortController(); void load(controller.signal); return () => controller.abort(); },[load]);
  return <>
    <div className="booking-toolbar"><div className="booking-tabs">{!admin&&<button disabled={loading} aria-pressed={scope === "mine"}>คำขอของฉัน</button>}{admin&&<button disabled={loading} aria-pressed={scope === "all"}>คำขอทั้งหมด</button>}</div><label>สถานะ <select value={filter} onChange={e => setFilter(e.target.value)}><option value="all">ทั้งหมด</option>{Object.entries(statuses).map(([key,label]) => <option key={key} value={key}>{label}</option>)}</select></label><button className="button booking-secondary" disabled={loading} onClick={() => void load()}>โหลดรายการใหม่</button></div>
    <p className="booking-notice">การยืนยันและข้อความจากทีมจะแสดงในหน้านี้ ไม่มีอีเมลหรือ LINE แจ้งเตือนอัตโนมัติ กรุณากลับมาตรวจสอบสถานะ หรือติดต่อ <a href="tel:0855455955">085 545 5955</a></p>
    {error && <p role="alert" className="booking-error">{error}</p>}
    {loading ? <p role="status" className="booking-empty">กำลังโหลดรายการ…</p> : !error && <>
      <p className="booking-count">{items.filter(b => filter === "all" || b.status === filter).length} รายการ · แสดงสูงสุด 200 รายการล่าสุด</p>
      {!items.some(b => filter === "all" || b.status === filter) && <div className="booking-empty"><h2>ยังไม่มีคำขอในสถานะนี้</h2><p>เลือกบริการและส่งคำขอจองได้จากแบบฟอร์ม</p><a className="button button-primary" href="/apply">เริ่มส่งคำขอจอง</a></div>}
      <div className="booking-cards">{items.filter(b => filter === "all" || b.status === filter).map(b => <BookingCard key={`${b.id}-${b.updated_at}`} booking={b} manage={admin && scope === "all"} reload={() => load()}/>)}</div>
    </>}
  </>;
}
function BookingCard({booking:b,manage,reload}:{booking:Booking;manage:boolean;reload:()=>Promise<void>}) {
  const [note,setNote] = useState(b.team_note);
  const [status,setStatus] = useState(b.status);
  const [busy,setBusy] = useState(false);
  const [cancel,setCancel] = useState(false);
  const [error,setError] = useState("");
  async function update(nextStatus: string) {
    if (busy) return; setBusy(true); setError("");
    try { const response = await fetch("/api/bookings",{ method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({ id:b.id,status:nextStatus,expectedStatus:b.status,teamNote:note }) }); const data = await response.json() as { error?: string; bookings: Booking[] }; if (!response.ok) throw new Error(data.error); await reload(); }
    catch(e) { setError(e instanceof Error ? e.message : "บันทึกไม่สำเร็จ"); }
    finally {setBusy(false);}
  }
  const requestData = (()=>{try{return JSON.parse(b.request_data||"{}");}catch{return {};}})() as Record<string,string>;
  return <article className="booking-card"><div className="booking-card-top"><span className={`status-pill ${b.status}`}>{statuses[b.status]}</span><small>ส่งเมื่อ {new Date(b.created_at).toLocaleDateString("th-TH", {timeZone:"Asia/Bangkok"})}</small></div><h2>{services[b.service]}</h2><p className="booking-reference">{b.id}</p><dl className="booking-summary"><div><dt>ธุรกิจ / พื้นที่</dt><dd>{b.business} · {b.location}</dd></div>{Object.entries(requestData).map(([key,value])=><div key={key}><dt>{requestLabels[key] || key}</dt><dd>{value}</dd></div>)}<div><dt>ผู้ติดต่อ</dt><dd>{b.name}<br/><a href={`tel:${b.phone}`}>{b.phone}</a> · <a href={`mailto:${b.email}`}>{b.email}</a></dd></div></dl>
    {b.team_note && <div className="team-note"><strong>ข้อความจากทีม</strong><p>{b.team_note}</p></div>}
    {manage && b.status !== "cancelled" ? <div className="booking-management"><label>สถานะ<select value={status} onChange={e => setStatus(e.target.value as Booking["status"])}>{Object.entries(statuses).map(([key,label]) => <option key={key} value={key}>{label}</option>)}</select></label><label>ข้อความถึงผู้จอง<textarea rows={3} maxLength={1000} value={note} onChange={e => setNote(e.target.value)} placeholder="ระบุเวลานัด สถานที่ และรายละเอียดที่ตกลงกับผู้จอง"/></label><p>ก่อนยืนยัน กรุณาตรวจสอบเวลาว่าง สถานที่ และเงื่อนไขกับผู้จองแล้ว</p><button className="button button-primary" disabled={busy} onClick={() => void update(status)}>{busy ? "กำลังบันทึก…" : "บันทึกสถานะและข้อความ"}</button></div> : b.status !== "cancelled" && <div className="booking-cancel">{cancel ? <><p>ยืนยันยกเลิกคำขอนี้หรือไม่? หากต้องการจองอีกครั้งจะต้องส่งคำขอใหม่</p><button className="button booking-danger" disabled={busy} onClick={() => void update("cancelled")}>{busy ? "กำลังยกเลิก…" : "ยืนยันยกเลิก"}</button><button className="button booking-secondary" disabled={busy} onClick={() => setCancel(false)}>เก็บรายการไว้</button></> : <button className="reset-button" onClick={() => setCancel(true)}>ยกเลิกคำขอจอง</button>}</div>}
    {error && <p role="alert" className="booking-error">{error}</p>}
  </article>;
}
