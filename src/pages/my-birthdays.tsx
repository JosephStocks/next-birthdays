import { type NextPage } from "next";
import { api } from "@/utils/api";
import Layout from "@/components/Layout";

const Home: NextPage = () => {
  const { data } = api.birthdays.getAll.useQuery();

  return (
    <Layout
      title="My Birthdays"
      className="flex flex-col items-center justify-center"
    >
      {data?.map((birthday) => (
        <div key={birthday.id}>{birthday.firstName}</div>
      ))}
    </Layout>
  );
};

export default Home;
