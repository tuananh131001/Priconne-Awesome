"use client";

import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";
import data from "../../../data/character_data_en.json";
import Character from "./Character";

function CharSelect() {
  const [def, setDef] = useState([]);

  return (
    <div className="grid">
      <div className="grid grid-cols-6">
        {Object.keys(data).map((unit) => (
          <Character
            def={def}
            setDef={setDef}
            key={unit}
            name={unit}
          ></Character>
        ))}
      </div>
      <h1>Selected : </h1>
      <div className="flex gap-2">
        {" "}
        {def &&
          def.map((unit) => <Character key={unit} name={unit}></Character>)}
      </div>
    </div>
  );
}

export default CharSelect;
