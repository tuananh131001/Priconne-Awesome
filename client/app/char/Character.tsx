import axios from "axios";
import * as cheerio from "cheerio";
import Image from "next/image";
import charaMap from "../../config/constants/charas.json";
const data: any = {
  _sign: "切噜~卟卟叮咧啪叮叮噜哔卟铃卟啪嘭噜铃啪卟啪哔噜哔嘭啪叮啪咧咧嘭",
  def: [111001, 100801, 112201, 102801, 103001],
  language: 2,
  nonce: "jizheg2yg6t4di0i",
  page: 1,
  region: 1,
  sort: 1,
  ts: 1676709968,
};

interface SubJsonProps {
  x: number;
  y: number;
}

interface JsonProps {
  [key: number]: SubJsonProps;
}


export default function Character({
  cid = 105201,
  width = 50,
  show1x = false,
  selected = false,
  noBorder = false,
  style = {},
  borderRadius = 6,
  borderWidth = 1,
  grey = false,
  show6x = false,
}) {
  console.log(data);

  let charaid = cid; // in case of cid overflow
  let mapValue: SubJsonProps = (charaMap as JsonProps)[cid];

  const ratio = width / 60;
  const size = (show6x ? 184 : 927) * ratio; // width of charas.png
  const backX = mapValue.x * ratio;
  const backY = mapValue.y * ratio;
  return (
    <>
      <div
        style={{
          width: `${width}px`,
          height: `${width}px`,
          backgroundImage: `url("https://www.pcrdfans.com/charas-20230216.png")`,
          backgroundSize: `${size}px`,
          borderRadius: `${borderRadius}px`,
          backgroundPositionX: `-${backX}px`,
          backgroundPositionY: `-${backY}px`,
          opacity: selected ? 1 : 0.6,
          cursor: noBorder ? "inherit" : "pointer",
          border:
            selected && !noBorder
              ? `solid ${borderWidth}px #ffa500`
              : `solid ${borderWidth}px transparent`,
          display: "inline-block",
          margin: "2px 2px",
          filter: grey ? "grayscale(1)" : "unset",
          ...style,
        }}
      ></div>
    </>
  );
}
