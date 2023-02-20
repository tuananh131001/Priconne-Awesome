"use client";
import Image from "next/image";
import React, { useState } from "react";
import RateColor from "./RateColor";
import { useRouter } from "next/navigation";
const sortUnitBy = (data: any, type: string) => {
  const rate: any = {
    SSS: 6,
    SS: 5,
    S: 4,
    A: 3,
    B: 2,
    C: 1,
    D: 0,
  };
  if (type === "cbTier") {
    data.sort((a: any, b: any) => {
      return rate[b.cbTier] - rate[a.cbTier];
    });
  } else if (type === "questTier") {
    data.sort((a: any, b: any) => {
      return rate[b.questTier] - rate[a.questTier];
    });
  } else if (type === "lunaTier") {
    data.sort((a: any, b: any) => {
      return rate[b.lunaTier] - rate[a.lunaTier];
    });
  } else if (type === "arenaTier") {
    data.sort((a: any, b: any) => {
      return rate[b.arenaTier] - rate[a.arenaTier];
    });
  }

  return data;
};

function UnitListDesktop({ data }: any) {
  const [clientData, setClientData] = useState(data);
  const router = useRouter();
  return (
    <>
      <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Character</th>
            <th className="px-6 py-3">Name</th>
            <th
              className="px-6 py-3 cursor-pointer"
              onClick={() => {
                setClientData(sortUnitBy(clientData, "questTier"));
                router.refresh();
              }}
            >
              Quest Tier
            </th>
            <th
              className="px-6 py-3 cursor-pointer"
              onClick={() => {
                setClientData(sortUnitBy(clientData, "lunaTier"));
                router.refresh();
              }}
            >
              Luna Tier
            </th>
            <th
              className="px-6 py-3 cursor-pointer"
              onClick={() => {
                setClientData(sortUnitBy(clientData, "cbTier"));
                router.refresh();
              }}
            >
              CB Tier
            </th>
            <th
              className="px-6 py-3 cursor-pointer"
              onClick={() => {
                setClientData(sortUnitBy(clientData, "arenaTier"));
                router.refresh();
              }}
            >
              Arena Tier
            </th>
            <th className="px-6 py-3">Total Rate</th>
            <th className="px-6 py-3">Star||UE</th>

            <th className="px-6 py-3">Gear</th>
          </tr>
        </thead>
        <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          {clientData.map((item: any) => (
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
              <td className="px-6 py-4">
                {" "}
                {item["Recommendations Stars Stars"]
                  ? item["Recommendations Stars Stars"]
                  : ""}
                {" || "}
                {item["Order"] ? item["Order"] : " "}
              </td>
              <td className="px-6 py-4">{item["Gear Overall"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UnitListDesktop;
