import{redirect}from "next/navigation";
import{getServerSession}from "next-auth";
import{authOptions}from "@/lib/auth";
import{BrandLockup}from "../site-chrome";
import LoginForm from "./login-form";
export const dynamic="force-dynamic";
export default async function LoginPage(){const session=await getServerSession(authOptions);if(session)redirect(session.user.role==="admin"?"/admin":"/dashboard");return <main className="login-page"><header className="login-header"><a href="/"><BrandLockup inverse/></a><a href="/">กลับหน้าเว็บไซต์</a></header><section className="login-shell"><div className="login-copy"><p className="kicker light">MEMBER ACCESS</p><h1>เข้าสู่ระบบเพื่อจัดการโอกาสของคุณ</h1><p>ส่งข้อมูลให้ทีมประเมิน ติดตามสถานะ และดูประวัติคำขอทั้งหมดได้จากบัญชีเดียว</p><ul><li>ข้อมูลคำขอผูกกับบัญชีของคุณ</li><li>ติดตามสถานะได้ทุกอุปกรณ์</li><li>ข้อมูลของแต่ละบัญชีแยกจากกัน</li></ul></div><div className="login-card"><p className="kicker">SPACE CONNEX ACCOUNT</p><h2>เข้าสู่ระบบหรือสมัครสมาชิก</h2><p>เลือกใช้อีเมลและรหัสผ่าน หรือบัญชี Google</p><LoginForm googleEnabled={Boolean(process.env.GOOGLE_CLIENT_ID&&process.env.GOOGLE_CLIENT_SECRET)}/></div></section></main>}
