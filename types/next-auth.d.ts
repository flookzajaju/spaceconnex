import "next-auth";
import "next-auth/jwt";
declare module "next-auth"{interface User{role:"member"|"admin"}interface Session{user:{id:string;role:"member"|"admin";name?:string|null;email?:string|null;image?:string|null}}}
declare module "next-auth/jwt"{interface JWT{role?:"member"|"admin"}}
