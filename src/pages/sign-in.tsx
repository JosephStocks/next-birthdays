import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            logoBox: "flex items-center justify-center",
          },
        }}
      />
      ;
    </main>
  );
}
