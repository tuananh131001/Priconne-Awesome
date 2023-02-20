import Image from "next/image";
import React from "react";
import RateColor from "./RateColor";

function UnitList({ data }:any) {
  return (
    <div className="flex gap-2 flex-col p-2 lg:flex-row">
      {data.map((item: any) => (
        <div key={item.name} className="outline-1 outline outline-blue-500 p-2 rounded-lg">
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
            </div>
            <h1 className="text-gray-100">Total Rate: {item.totalRate}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UnitList;
