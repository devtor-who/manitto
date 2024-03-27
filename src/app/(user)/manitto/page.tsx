import { getUserFromCookie } from "./page.hook";

export const runtime = "edge";

export default async function page() {
  const user = await getUserFromCookie();
  return (
    <>
      <section>{user}</section>
    </>
  );
}
