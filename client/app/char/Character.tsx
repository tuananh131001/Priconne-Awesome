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
  name = "",
  borderRadius = 6,
  borderWidth = 1,
  grey = false,
  show6x = false,
  def,
  setDef,
}) {
  let charaid = cid; // in case of cid overflow
  let mapValue: SubJsonProps = (charaMap as JsonProps)[cid];
  if (!mapValue) {
    mapValue = (charaMap as JsonProps)[100001];
    charaid = 100001;
  }
  const ratio = width / 60;
  const size = (show6x ? 184 : 927) * ratio; // width of charas.png
  const backX = mapValue?.x * ratio;
  const backY = mapValue?.y * ratio;

  const handleClick = () => {
    if (!def.includes(name) && def.length < 5) {
      setDef([...def, name]);
    }
    console.log(def);

    // def.push(cid);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col gap-2 flex-wrap w-12 hover:opacity-80 cursor-pointer"
    >
      <Image
        width={width}
        height={width}
        alt={name}
        src={`/images/unit_icon_webp/${name}.webp`}
      ></Image>
      <h1 className="text-xs text-ellipsis w-12">{name}</h1>
    </div>
  );
}
