import bcrypt from "bcryptjs";
import pg from "pg";
const{Pool}=pg;
const email=(process.env.ADMIN_EMAIL||"").trim().toLowerCase(),password=process.env.ADMIN_PASSWORD||"";
if(!process.env.DATABASE_URL||!email||password.length<8){console.error("Set DATABASE_URL, ADMIN_EMAIL and ADMIN_PASSWORD (8+ characters) before seeding.");process.exit(1);}
const pool=new Pool({connectionString:process.env.DATABASE_URL,ssl:process.env.DATABASE_SSL==="true"?{rejectUnauthorized:false}:undefined});
const hash=await bcrypt.hash(password,12);
await pool.query(`INSERT INTO users(name,email,password_hash,role) VALUES('SPACE CONNEX Admin',$1,$2,'admin') ON CONFLICT(email) DO UPDATE SET password_hash=EXCLUDED.password_hash,role='admin',updated_at=NOW()`,[email,hash]);
await pool.end();console.log(`Admin ready: ${email}`);
