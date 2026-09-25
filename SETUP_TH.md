# SPACE CONNEX — วิธีรัน Localhost และนำขึ้น Vercel

## สิ่งที่ต้องติดตั้ง

- Node.js 20.11 ขึ้นไป
- Docker Desktop

## รันบน Localhost โดยไม่มีค่าบริการ

1. คัดลอก `.env.example` เป็น `.env.local`
2. เปลี่ยน `NEXTAUTH_SECRET` เป็นข้อความสุ่มยาวอย่างน้อย 32 ตัวอักษร
3. เปิดฐานข้อมูลด้วย `docker compose up -d`
4. ติดตั้งแพ็กเกจด้วย `npm install`
5. สร้างบัญชีแอดมินด้วยคำสั่งด้านล่าง หลังตั้ง `ADMIN_EMAIL` และ `ADMIN_PASSWORD` ใน Environment ของ Terminal

```bash
export $(grep -v '^#' .env.local | xargs)
npm run db:seed-admin
```

6. เปิดเว็บไซต์ด้วย `npm run dev`
7. เข้า `http://localhost:3000`

สมาชิกทั่วไปสมัครจากหน้า `/login` ได้ทันที ส่วนบัญชีแอดมินต้องสร้างด้วยคำสั่ง `db:seed-admin` เพื่อป้องกันบุคคลอื่นสมัครด้วยอีเมลแอดมิน

## เปิด Google Login บน Localhost

สร้าง OAuth Client ใน Google Cloud Console แล้วกำหนด Authorized redirect URI:

```text
http://localhost:3000/api/auth/callback/google
```

นำค่า Client ID และ Client Secret ใส่ใน `.env.local` ระบบจะแสดงปุ่ม Google โดยอัตโนมัติ หากยังไม่ใส่ ระบบอีเมลและรหัสผ่านยังทำงานตามปกติ

## นำขึ้น Vercel

1. สร้าง PostgreSQL จากผู้ให้บริการที่รองรับ Vercel
2. รัน SQL ใน `docker/init.sql` กับฐานข้อมูล Production
3. นำโปรเจกต์ขึ้น GitHub และ Import เข้า Vercel
4. เพิ่ม Environment Variables จาก `.env.example`
5. เปลี่ยน `NEXTAUTH_URL` และ `NEXT_PUBLIC_SITE_URL` เป็นโดเมนจริง
6. ตั้ง `DATABASE_SSL=true` หากผู้ให้บริการฐานข้อมูลกำหนด
7. เพิ่ม Google redirect URI เป็น `https://โดเมนจริง/api/auth/callback/google`
8. Deploy แล้วรัน `npm run db:seed-admin` โดยเชื่อม `DATABASE_URL` ของ Production หนึ่งครั้ง

## เส้นทางสำคัญ

- `/login` สมัครสมาชิกและเข้าสู่ระบบ
- `/dashboard` หน้าสมาชิกและประวัติคำขอ
- `/admin` ระบบแอดมิน
- `/apply` ส่งคำขอใหม่ ต้องเข้าสู่ระบบก่อน

## ความปลอดภัย

- อย่านำ `.env.local` ขึ้น Git
- เปลี่ยนรหัสผ่านฐานข้อมูลเมื่อใช้งานจริง
- ใช้ `NEXTAUTH_SECRET` ที่ไม่ซ้ำกับระบบอื่น
- Google Client Secret และรหัสแอดมินต้องเก็บใน Vercel Environment Variables เท่านั้น
