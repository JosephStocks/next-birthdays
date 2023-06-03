import { useAutoAnimate } from "@formkit/auto-animate/react";
import type { Birthday } from "@prisma/client";
import dayjs from "dayjs";

type Props = {
  data?: Birthday[];
};

const BirthdaysTable = ({ data }: Props) => {
  const [parent] = useAutoAnimate();
  return (
    <table ref={parent} className="w-full">
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
  );
};
export default BirthdaysTable;
