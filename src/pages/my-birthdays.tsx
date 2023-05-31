import { type NextPage } from "next";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { api } from "@/utils/api";
import Layout from "@/components/Layout";
import type { DateValueType } from "react-tailwindcss-datepicker/dist/types";

const Home: NextPage = () => {
  const { data } = api.birthdays.getAll.useQuery();
  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: null,
  });

  const handleValueChange = (newValue: DateValueType) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <Layout
      title="My Birthdays"
      className="flex max-w-screen-md flex-col items-center justify-center p-4"
    >
      <Datepicker
        useRange={false}
        asSingle={true}
        value={value}
        onChange={handleValueChange}
      />
      {data?.map(({ id, firstName, lastName, birthday }) => (
        <div key={id}>
          {firstName}
          {lastName ? ` ${lastName}` : ""}
          {JSON.stringify(birthday)}
        </div>
      ))}
    </Layout>
  );
};

export default Home;
