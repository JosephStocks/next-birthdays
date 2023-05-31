import Layout from "@/components/Layout";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <Layout
      title="Birthdays | Sign In"
      className="flex items-center justify-center"
    >
      <SignIn
        appearance={{
          elements: {
            logoBox: "flex items-center justify-center",
          },
        }}
      />
    </Layout>
  );
}
