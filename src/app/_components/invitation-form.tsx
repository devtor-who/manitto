import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db, user } from "@/db";
import { cn } from "@/lib/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function loginAction(formdata: FormData) {
  "use server";
  const invitationCode = formdata.get("invitationCode");
  console.log(invitationCode);

  // DB에 저장된 데이터 확인
  const users = await db.select().from(user);
  console.log(users);

  // DB에 저장된 code인 경우 cookie에 사용자 정보 저장
  const cookie = cookies();
  cookie.set("user", JSON.stringify({ id: "uuid", name: "name" }));
  redirect("/manitto");
}

export async function InvitationForm() {
  return (
    <form action={loginAction}>
      <fieldset
        className={cn("border rounded-md border-zinc-600 px-4 pb-6 space-y-4")}
      >
        <legend className={cn("px-4")}>
          <h5 className={cn("text-cqw-extra")}>초대코드를 입력해주세요.</h5>
        </legend>

        <section className={cn("flex gap-x-2")}>
          <Input
            type="text"
            name="invitationCode"
            className={cn("border-zinc-600 text-cqw-normal")}
            placeholder="초대코드는 메일을 확인하세요"
          ></Input>

          <Button
            className={cn("border-zinc-600 text-cqw-normal")}
            variant={"outline"}
          >
            확인
          </Button>
        </section>
      </fieldset>
    </form>
  );
}
