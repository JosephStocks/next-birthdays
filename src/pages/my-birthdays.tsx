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
    <Layout title="My Birthdays" className="max-w-screen-md p-4">
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Datepicker
          useRange={false}
          asSingle={true}
          value={value}
          onChange={handleValueChange}
        />
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>

      <section className="mt-10">
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Birthday</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(({ id, firstName, lastName, birthday }) => (
              <tr key={id}>
                <td>{firstName}</td>
                <td>{lastName ? ` ${lastName}` : ""}</td>
                <td>{birthday ? ` ${JSON.stringify(birthday)}` : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  );
};

export default Home;
