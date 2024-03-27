import { cn } from "@/lib/utils";
import { InvitationForm } from "./_components/invitation-form";

export default async function page() {
  return (
    <>
      <main
        className={cn(
          "grid place-items-center",
          "h-screen supports-[height:100lvh]:h-lvh"
        )}
      >
        <InvitationForm />
      </main>
    </>
  );
}
