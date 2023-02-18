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
}) {
  console.log(data);

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
  const newName = name.substring(0,name.indexOf("(")).trim(); // extracts the name "Yui" from the original string
  const rest = name
    .substring(name.indexOf("(") + 1, name.indexOf(")"))
    .replace(/\s/g, "_"); // extracts the "New Year" part and replaces spaces with underscores
  const newStr = rest + "_" + newName; // concatenates the two parts in the desired order
  return (
    <>
      <Image
        width={width}
        height={width}
        alt={name}
        src={`https://expugn.github.io/priconne-quest-helper/images/unit_icon_webp/${newStr}.webp`}
      ></Image>
    </>
  );
}
