import axios from "axios";
import * as cheerio from "cheerio";
import Image from "next/image";

async function getData() {
  const response = await fetch(
    "https://priconne.blogspot.com/p/character-tier-list.html"
  );
  const htmlString = await response.text();
  const $ = cheerio.load(htmlString);
  const table = $("table"); // select the table element

  const data: any = [];

  $("tr", table).each((i, row) => {
    const charIcon = $("th img#char-icon", row).attr("src"); // select the char-name column
    const charName = $("th span#char-name", row).text().trim(); // select the char-name column
    const questTier = $("th span#quest-tier", row).text().trim(); // select the quest-tier column
    const lunaTier = $("th span#luna-tier", row).text().trim(); // select the quest-tier column
    const cbTier = $("th span#cb-tier", row).text().trim(); // select the quest-tier column
    const arenaTier = $("th span#arena-tier", row).text().trim(); // select the quest-tier column
    const totalRate = convertRate({questTier, lunaTier, cbTier, arenaTier});
    if (charName && charIcon && questTier && lunaTier && cbTier && arenaTier) {
      // only store rows with both values
      data.push({
        charIcon,
        charName,
        questTier,
        lunaTier,
        cbTier,
        arenaTier,
        totalRate,
      });
    }
  });
  // sort data by totalRate
  data.sort((a:any, b:any) => {
    return b.totalRate - a.totalRate;
  });
  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <h1 className="text-lg text-center   ">Priconne Tier List</h1>
      <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Character</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Quest Tier</th>
            <th className="px-6 py-3">Luna Tier</th>
            <th className="px-6 py-3">CB Tier</th>
            <th className="px-6 py-3">Arena Tier</th>
            <th className="px-6 py-3">Total Rate</th>
          </tr>
        </thead>
        <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          {data.map((item:any) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={item.charName}
            >
              <td className="px-6 py-4">
                <Image
                  src={item.charIcon}
                  alt="Picture of the character"
                  width={50}
                  height={50}
                ></Image>
              </td>
              <td className="px-6 py-4">{item.charName}</td>
              <td className="px-6 py-4">{item.questTier}</td>
              <td className="px-6 py-4">{item.lunaTier}</td>
              <td className="px-6 py-4">{item.cbTier}</td>
              <td className="px-6 py-4">{item.arenaTier}</td>
              <td className="px-6 py-4 text-orange-400">{item.totalRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
// This gets called on every request
function convertRate(data:any) {
  const {questTier, lunaTier, cbTier, arenaTier} = data
  const rate:any = {
    SSS: 6,
    SS: 5,
    S: 4,
    A: 3,
    B: 2,
    C: 1,
    D: 0,
  };
  const questRate = rate[questTier];
  const lunaRate = rate[lunaTier];
  const cbRate = rate[cbTier];
  const arenaRate = rate[arenaTier];
  const totalRate = questRate + lunaRate + cbRate + arenaRate;
  return totalRate;
}