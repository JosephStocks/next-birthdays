import { type NextPage } from "next";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Layout from "@/components/Layout";
import Link from "next/link";

const Home: NextPage = () => {
  const user = useUser();

  return (
    <Layout
      title="Birthdays"
      className="flex flex-col items-center justify-center"
    >
      {!user.isSignedIn && <SignInButton />}
      {!!user.isSignedIn && (
        <>
          <Link href="my-birthdays">My Birthdays!</Link>
          <SignOutButton />
        </>
      )}
    </Layout>
  );
};

export default Home;
