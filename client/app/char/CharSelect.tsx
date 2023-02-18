import React from "react";
import UnitsA from "../../config/constants/unita.json";
import Character from "./Character";

const UnitsArr: UnitData[] = UnitsA;
export interface UnitData {
  cid: number;
  id: number;
  name: string;
  equip: boolean;
  rarity: number;
  maxrarity: number;
  type: number;
  position: number;
  place: number;
  limited: boolean;
  comment: string;
}

function CharSelect({ width = 50 }) {
  
  const frontCharas = UnitsArr.filter((e: UnitData) => e.place === 1)
    .map((e: UnitData, i: number) => {
      return <Character cid={e.id} key={i} width={width} />;
    });

  const middleCharas = UnitsArr.filter((e: UnitData) => e.place === 2)
    .map((e: UnitData, i: number) => {
      return <Character cid={e.id} key={i} width={width} />;
    });

  const backCharas = UnitsArr.filter((e: UnitData) => e.place === 3)
    .map((e: UnitData, i: number) => {
      return <Character cid={e.id} key={i} width={width} />;
    });
  return (
    <div className="grid">
      <h1>front</h1>
      <div>{frontCharas}</div>
      <h1>middle</h1>
      <div>{middleCharas}</div>
      <h1>back</h1>
      <div>{backCharas}</div>
    </div>
  );
}

export default CharSelect;
