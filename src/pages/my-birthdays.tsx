import { type NextPage } from "next";
import { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { api } from "@/utils/api";
import Layout from "@/components/Layout";
import type { DateValueType } from "react-tailwindcss-datepicker/dist/types";
import { useForm, type SubmitHandler } from "react-hook-form";
import { NamesOnlySchema, type NamesOnly } from "@/models/birthdays";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";

const MyBirthdays: NextPage = () => {
  const nbsp = "\u00A0";
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<NamesOnly>({
    resolver: zodResolver(NamesOnlySchema),
  });

  const onSubmit: SubmitHandler<NamesOnly> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    console.log(isValid);
  }, [isValid]);

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
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mx-auto mt-10 grid max-w-screen-sm grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-12">
          <div className="sm:col-span-6">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                {...register("firstName")}
                id="firstName"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p className="p-1 text-sm font-normal tracking-wider text-red-500">
                {errors.firstName?.message ? errors.firstName?.message : nbsp}
              </p>
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                {...register("lastName")}
                id="lastName"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p className="p-1 text-sm font-normal tracking-wider text-red-500">
                {errors.lastName?.message ? errors.lastName?.message : nbsp}
              </p>
            </div>
          </div>
          <div className="sm:col-span-6 sm:col-start-4">
            <label
              htmlFor="birthday"
              className="block text-sm font-medium leading-6"
            >
              Birthday
            </label>
            <div className="mt-2">
              <Datepicker
                useRange={false}
                asSingle={true}
                value={value}
                onChange={handleValueChange}
                // {...register("birthday")}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-primaryblue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryblue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>

      <section className="mt-10 w-full">
        <table className="w-full">
          <thead className="border-b border-primaryblue-400 p-5">
            <tr className="text-left text-base">
              <th className="p-2">First name</th>
              <th className="p-2">Last name</th>
              <th className="p-2">Birthday</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(({ id, firstName, lastName, birthday }) => (
              <tr className="even:bg-primaryblue-400" key={id}>
                <td className="p-2">{firstName}</td>
                <td className="p-2">{lastName ? ` ${lastName}` : ""}</td>
                <td className="p-2">
                  {birthday ? ` ${dayjs(birthday).format("MMMM D, YYYY")}` : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  );
};

export default MyBirthdays;
