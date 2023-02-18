import React from "react";
import { PrismaClient } from "@prisma/client";
import Character from "./Character";

const prisma = new PrismaClient();

async function getData() {
  const unit = await prisma.unit_data.findMany();
  return unit;
}

async function page() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <h1>Char Page</h1>
      {data.map((unit) => (
        <div key={unit.unit_id}>
          <Character cid={unit.unit_id} name={unit.unit_name}></Character>
        </div>
      ))}
    </div>
  );
}

export default page;
