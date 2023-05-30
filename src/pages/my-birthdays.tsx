import { type NextPage } from "next";
import Head from "next/head";
import { useUser } from "@clerk/nextjs";
import { api } from "@/utils/api";

const Home: NextPage = () => {
  const user = useUser();

  const { data } = api.birthdays.getAll.useQuery();

  return (
    <>
      <Head>
        <title>My Birthdays</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        {data?.map((birthday) => (
          <div>{birthday.firstName}</div>
        ))}
      </main>
    </>
  );
};

export default Home;