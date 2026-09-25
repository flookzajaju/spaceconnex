export const services = {
  consultation: "ปรึกษาและประเมินโอกาส",
  products: "หาสินค้ามาเติมพื้นที่",
  space: "หาพื้นที่ทดลองวางสินค้า",
  popup: "จองพื้นที่ Pop-up",
  workshop: "จัดกิจกรรม / Workshop",
} as const;
export const windows = { morning: "09:00–12:00 น.", afternoon: "13:00–17:00 น." } as const;
export const statuses = { pending:"รอตรวจสอบ",reviewing:"กำลังประเมิน",needs_info:"ขอข้อมูลเพิ่ม",approved:"ผ่านการประเมิน",completed:"เสร็จสิ้น",cancelled:"ยกเลิกแล้ว" } as const;
export type BookingInput = { requestKey: string; service: string; partnerType: string; business: string; location: string; date: string; timeWindow: string; name: string; phone: string; email: string; detail: string; requestData: Record<string,string>; consent: boolean };
export type Booking = { id: string; service: keyof typeof services; partner_type: string; business: string; location: string; date: string; time_window: keyof typeof windows | ""; name: string; phone: string; email: string; detail: string; request_data: string; status: keyof typeof statuses; team_note: string; created_at: string; updated_at: string };
export function bangkokToday(now = new Date()) { return new Date(now.getTime() + 7 * 3600000).toISOString().slice(0, 10); }
export function validateBooking(value: unknown, now = new Date()): string | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return "ข้อมูลไม่ถูกต้อง";
  const d = value as Record<string, unknown>;
  for (const [key, max] of Object.entries({ requestKey: 80, service: 30, partnerType: 20, business: 160, location: 300, name: 120, phone: 30, email: 254 })) {
    if (typeof d[key] !== "string" || (d[key] as string).length > max || !(d[key] as string).trim()) return `กรุณาตรวจสอบ${({ requestKey: "รหัสคำขอ", service: "บริการ", partnerType: "ประเภทผู้จอง", business: "ชื่อธุรกิจ", location: "ทำเล", name: "ชื่อผู้ติดต่อ", phone: "เบอร์โทรศัพท์", email: "อีเมล" } as Record<string, string>)[key]}ให้ครบและไม่เกินความยาวที่กำหนด`;
  }
  if (!Object.hasOwn(services, d.service as string) || (d.timeWindow !== "" && !Object.hasOwn(windows, d.timeWindow as string)) || !["space", "brand", "organizer"].includes(d.partnerType as string)) return "กรุณาเลือกประเภทข้อมูลให้ถูกต้อง";
  if (!d.requestData || typeof d.requestData !== "object" || Array.isArray(d.requestData) || JSON.stringify(d.requestData).length > 8000) return "กรุณาตรวจสอบข้อมูลคำขอ";
  const required: Record<string,string[]> = { products:["spaceType","customerProfile","availableArea","productCategories"], space:["productName","productCategory","priceRange","targetCustomer","preferredArea"], popup:["popupFormat","campaignGoal","preferredArea","duration"], workshop:["activityName","activityType","participants","spaceNeeds"], consultation:["consultationTopic","currentSituation","desiredOutcome","challenge"] };
  const requestData = d.requestData as Record<string,unknown>;
  if (!(required[d.service as string] || []).every(key => typeof requestData[key] === "string" && (requestData[key] as string).trim() && (requestData[key] as string).length <= 500)) return "กรุณากรอกข้อมูลสำหรับบริการนี้ให้ครบ";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email as string)) return "กรุณากรอกอีเมลให้ถูกต้อง";
  if (!/^[+\d ()-]+$/.test(d.phone as string) || (d.phone as string).replace(/\D/g, "").length < 9 || (d.phone as string).replace(/\D/g, "").length > 15) return "กรุณากรอกหมายเลขโทรศัพท์ให้ถูกต้อง";
  if (!/^[a-zA-Z0-9-]{16,80}$/.test(d.requestKey as string)) return "กรุณาลองส่งคำขอใหม่";
  if (d.consent !== true) return "กรุณายืนยันการใช้ข้อมูลเพื่อดำเนินการจอง";
  return null;
}
