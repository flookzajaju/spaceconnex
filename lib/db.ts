import {Pool,type QueryResultRow} from "pg";
const globalForDb=globalThis as unknown as{spaceConnexPool?:Pool};
export const pool=globalForDb.spaceConnexPool??new Pool({connectionString:process.env.DATABASE_URL,ssl:process.env.DATABASE_SSL==="true"?{rejectUnauthorized:false}:undefined,max:process.env.NODE_ENV==="production"?5:10});
if(process.env.NODE_ENV!=="production")globalForDb.spaceConnexPool=pool;
export async function query<T extends QueryResultRow>(text:string,values:unknown[]=[]){return pool.query<T>(text,values);}
