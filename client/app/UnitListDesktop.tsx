import Image from "next/image";
import React from "react";
import RateColor from "./RateColor";

function UnitListDesktop({ data }: any) {
  return (
    <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th className="px-6 py-3">Character</th>
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Quest Tier</th>
          <th className="px-6 py-3">Luna Tier</th>
          <th className="px-6 py-3">CB Tier</th>
          <th className="px-6 py-3">Arena Tier</th>
          <th className="px-6 py-3">Total Rate</th>
          <th className="px-6 py-3">Recommend Star/UE</th>

          <th className="px-6 py-3">Gear</th>
        </tr>
      </thead>
      <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        {data.map((item: any) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            key={item?.charName}
          >
            <td className="px-6 py-4">
              <Image
                src={item?.charIcon || ""}
                alt="Picture of the character"
                width={50}
                height={50}
              ></Image>
            </td>
            <td className="px-6 py-4 text-bold text-gray-100">
              {" "}
              {item.charName}
            </td>
            <td className="px-6 py-4">
              {" "}
              <RateColor rate={item.questTier}></RateColor>{" "}
            </td>
            <td className="px-6 py-4">
              <RateColor rate={item.lunaTier}></RateColor>
            </td>
            <td className="px-6 py-4">
              <RateColor rate={item.cbTier}></RateColor>
            </td>
            <td className="px-6 py-4">
              <RateColor rate={item.arenaTier}></RateColor>
            </td>
            <td className="px-6 py-4 text-orange-400">{item.totalRate}</td>
            <td className="px-6 py-4">{item["Order"]}</td>
            <td className="px-6 py-4">{item["Gear Overall"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UnitListDesktop;
