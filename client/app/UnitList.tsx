"use client";
import Image from "next/image";
import React, { useState } from "react";
import RateColor from "./RateColor";
import { Dropdown, Button } from "flowbite-react";
import { sortUnitBy } from "@/utils/sortUnitType";
import { useRouter } from "next/navigation";

function UnitList({ data }: any) {
  const [clientData, setClientData] = useState(data);
  const router = useRouter();
  return (
    <div>
      {" "}
      <div className="flex gap-2 flex-col p-2 lg:flex-row">
        {" "}
        <Dropdown label="Sort By">
          <Dropdown.Item>
            <a
              onClick={() => {
                setClientData(sortUnitBy(clientData, "cbTier"));
                router.refresh();
              }}
            >
              CB Rate
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              onClick={() => {
                setClientData(sortUnitBy(clientData, "questTier"));
                router.refresh();
              }}
            >
              Quest Tier
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              onClick={() => {
                setClientData(sortUnitBy(clientData, "lunaTier"));
                router.refresh();
              }}
            >
              {" "}
              Luna Tier{" "}
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            {" "}
            <a
              onClick={() => {
                setClientData(sortUnitBy(clientData, "arenaTier"));
                router.refresh();
              }}
            >
              {" "}
              Arena Tier{" "}
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            {" "}
            <a
              onClick={() => {
                setClientData(sortUnitBy(clientData, "totalRate"));
                router.refresh();
              }}
            >
              {" "}
              Total Rate{" "}
            </a>
          </Dropdown.Item>
        </Dropdown>
        {clientData.map((item: any) => (
          <div
            key={item.name}
            className="outline-1 outline outline-blue-500 p-2 rounded-lg"
          >
            <section className="flex items-center gap-2">
              {" "}
              <Image
                src={item?.charIcon || ""}
                alt="Picture of the character"
                width={50}
                height={50}
              ></Image>
              <h1 className="text-gray-100">{item.charName}</h1>
            </section>
            <div className="p-2">
              <div className="flex justify-between">
                <section>
                  <h1 className="text-gray-100">Quest Tier: </h1>
                  <RateColor rate={item.questTier}></RateColor>
                  <h1 className="text-gray-100">Luna Tier:</h1>
                  <RateColor rate={item.lunaTier}></RateColor>
                </section>
                <section>
                  <h1 className="text-gray-100">CB Tier: </h1>
                  <RateColor rate={item.cbTier}></RateColor>
                  <h1 className="text-gray-100">Arena Tier: </h1>
                  <RateColor rate={item.arenaTier}></RateColor>
                </section>
                <section>
                  <h1 className="text-gray-100">STAR/UE: </h1>

                  <p className="text-yellow-100">
                    {item["Recommendations Stars Stars"]
                      ? item["Recommendations Stars Stars"]
                      : ""}
                    {" || "}
                    {item["Order"] ? item["Order"] : " "}
                  </p>
                  <h1 className="text-gray-100">GEAR: </h1>
                  <p className="text-orange-300">
                    {" "}
                    {item["Gear Overall"] ? item["Gear Overall"] : " "}
                  </p>
                </section>
              </div>
              <h1 className="text-gray-100">Total Rate: {item.totalRate}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UnitList;
