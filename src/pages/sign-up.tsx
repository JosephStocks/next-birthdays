import Layout from "@/components/Layout";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <Layout
      title="Birthdays | Sign Up"
      className="flex items-center justify-center"
    >
      <SignUp
        appearance={{
          elements: {
            logoBox: "flex items-center justify-center",
          },
        }}
      />
    </Layout>
  );
}
