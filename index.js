const cheerio = require("cheerio");
const axios = require("axios");

axios
  .get("https://priconne.blogspot.com/p/character-tier-list.html")
  .then((response) => {
    const $ = cheerio.load(response.data);
    const table = $("table"); // select the table element

    const data = [];

    $("tr", table).each((i, row) => {
      const charName = $("th span#char-name", row).text().trim(); // select the char-name column
      const questTier = $("th span#quest-tier", row).text().trim(); // select the quest-tier column
      const lunaTier = $("th span#luna-tier", row).text().trim(); // select the quest-tier column
      const cbTier = $("th span#cb-tier", row).text().trim(); // select the quest-tier column
      const arenaTier = $("th span#arena-tier", row).text().trim(); // select the quest-tier column
      const totalRate = convertRate(questTier, lunaTier, cbTier, arenaTier);
      if (charName && questTier && lunaTier && cbTier && arenaTier) {
        // only store rows with both values
        data.push({
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
    data.sort((a, b) => {
      return b.totalRate - a.totalRate;
    });
    console.table(data);
  })

  .catch((error) => console.log(error));
function convertRate(questTier, lunaTier, cbTier, arenaTier) {
  console.log(questTier);
  const rate = {
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
