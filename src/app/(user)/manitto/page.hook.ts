import { cookies } from "next/headers";

export async function getUserFromCookie() {
  "use server";
  return cookies().get("user")?.value;
}
