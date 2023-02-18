import React from "react";
import * as cheerio from "cheerio";

async function getData() {
  const response = await fetch("https://www.pcrdfans.com/en/units");
  const htmlString = await response.text();
  const $ = cheerio.load(htmlString);
  let res: any[] = [];
  $(".collapse-css-transition>div").each((i, row) => {
    //push div to res
    console.log(row)

  });
  return res;
}

async function page() {
  const data = await getData();
  console.log(data);
  return <h1>h1</h1>;
}

export default page;
