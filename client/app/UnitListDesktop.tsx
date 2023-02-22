"use client";
import Image from "next/image";
import React, { useState } from "react";
import RateColor from "./RateColor";
import { useRouter } from "next/navigation";
import { sortUnitBy } from "@/utils/sortUnitType";

function UnitListDesktop({ data }: any) {
  const [clientData, setClientData] = useState(data);
  const router = useRouter();
  return (
    <>
      <table className="rounded-md table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="  text-xs sticky top-0 text-gray-500 uppercase bg-gray-800 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Character</th>
            <th className="px-6 py-3">Name</th>
            <th
              className="px-6 py-3 cursor-pointer hover:text-white"
              onClick={() => {
                setClientData(sortUnitBy(clientData, "questTier"));
                router.refresh();
              }}
            >
              Quest Tier
            </th>
            <th
              className="px-6 py-3 cursor-pointer hover:text-white"
              onClick={() => {
                setClientData(sortUnitBy(clientData, "lunaTier"));
                router.refresh();
              }}
            >
              Luna Tier
            </th>
            <th
              className="px-6 py-3 cursor-pointer hover:text-white"
              onClick={() => {
                setClientData(sortUnitBy(clientData, "cbTier"));

                router.refresh();
              }}
            >
              CB Tier
            </th>
            <th
              className="px-6 py-3 cursor-pointer hover:text-white"
              onClick={() => {
                setClientData(sortUnitBy(clientData, "arenaTier"));
                router.refresh();
              }}
            >
              Arena Tier
            </th>
            <th
              className="px-6 py-3 cursor-pointer hover:text-white"
              onClick={() => {
                setClientData(sortUnitBy(clientData, "totalRate"));
                router.refresh();
              }}
            >
              Total Rate
            </th>
            <th
              className="px-6 py-3 cursor-pointer hover:text-white"
              onClick={() => {
                setClientData(sortUnitBy(clientData, "PVPATKTier"));
                router.refresh();
              }}
            >
              PVP ATK
            </th>
            <th className="px-6 py-3 cursor-pointer hover:text-white"  onClick={() => {
                setClientData(sortUnitBy(clientData, "PVPDEFTier"));
                router.refresh();
              }}>PVP DEF</th>

            <th className="px-6 py-3">Star||UE</th>

            <th className="px-6 py-3">Gear</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
          {clientData.map((item: any) => (
            <tr
              className="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700"
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
              <td className="px-6 py-4 text-blue-300">{item["PvP ATK"]}</td>
              <td className="px-6 py-4 text-blue-600">{item["DEF"]}</td>
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
