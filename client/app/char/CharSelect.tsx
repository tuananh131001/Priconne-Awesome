"use client";

import React, { useState } from "react";
import data from "../../../data/character_data_en.json";
import Character from "./Character";
import axios from "axios";
let requestData = {
  _sign: "切噜~卟卟叮咧啪叮叮噜哔卟铃卟啪嘭噜铃啪卟啪哔噜哔嘭啪叮啪咧咧嘭",
  def: [],
  language: 2,
  nonce: "jizheg2yg6t4di0i",
  page: 1,
  region: 1,
  sort: 1,
  ts: 1676709968,
};
function CharSelect() {
  const [def, setDef] = useState([]);
  const [defName, setDefName] = useState([]);
  const handleSubmit = async () => {
    if (def.length <= 4)  {
      return;
    }
    requestData.def = defName;
    const res = await axios.post(
      "https://api.pcrdfans.com/x/v1/search",
      requestData
    );
    console.log(res);
  };
  return (
    <div className="grid">
      <div className="grid grid-cols-6">
        {Object.keys(data).map((unit) => (
          <Character
            def={def}
            setDef={setDef}
            key={unit}
            name={unit}
            defName={defName}
            setDefName={setDefName}
          ></Character>
        ))}
      </div>
      <h1>Selected : </h1>
      <div className="flex gap-2">
        {" "}
        {defName &&
          defName.map((name) => (
            <Character
              def={def}
              setDef={setDef}
              key={name}
              name={name}
              defName={defName}
              setDefName={setDefName}
            ></Character>
          ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CharSelect;
