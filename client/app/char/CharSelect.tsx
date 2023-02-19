"use client";

import React, { useState } from "react";
import data from "../../../data/character_data_en.json";
import Character from "./Character";
import axios from "axios";
import { generateNonce } from "@/utils/function";
import moment from "moment";
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
  
    
    const nonce = generateNonce();
    const ts = parseInt(moment().format('X'), 10);
    requestData.def = def;
    requestData.nonce = nonce;
    requestData.ts = ts;
    // body._sign = calcHash(body);
    const res = await axios.post(
      "/api/search",
      requestData
    );
  };
  return (
    <div className="grid">
      <div className="grid grid-cols-6">
        {Object.keys(data).map((unit:string) => (
          <Character
            def={def}
            setDef={setDef}
            key={unit}
            name={unit}
            cid={data[unit as keyof typeof data].unit_id}
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
