export const sortUnitBy = (data: any, type: string) => {
  const rate: any = {
    EX: 7,
    SSS: 6,
    SS: 5,
    S: 4,
    A: 3,
    B: 2,
    C: 1,
    D: 0,
  };
  if (type === "cbTier") {
    data.sort((a: any, b: any) => {
      return rate[b.cbTier] - rate[a.cbTier];
    });
  } else if (type === "questTier") {
    data.sort((a: any, b: any) => {
      return rate[b.questTier] - rate[a.questTier];
    });
  } else if (type === "lunaTier") {
    data.sort((a: any, b: any) => {
      return rate[b.lunaTier] - rate[a.lunaTier];
    });
  } else if (type === "arenaTier") {
    data.sort((a: any, b: any) => {
      return rate[b.arenaTier] - rate[a.arenaTier];
    });
  } else if (type === "totalRate") {
    data.sort((a: any, b: any) => {
      return rate[b.totalRate] - rate[a.totalRate];
    });
  } else if (type === "PVPATKTier") {
    data.sort((a: any, b: any) => {
      return (rate[b["PvP ATK"]] != null ? rate[b["PvP ATK"]] : Infinity) -
      (rate[a["PvP ATK"]] != null ? rate[a["PvP ATK"]] : Infinity);
      // return ((rate[b["PvP ATK"]] != null) - ((rate[a["PvP ATK"]] != null) || (rate[a["PvP ATK"]] - (rate[b["PvP ATK"]];
     
      // return  (rate[b["PvP ATK"]] != null ? rate[b["PvP ATK"]] : Infinity) - (rate[a["PvP ATK"]] != null ? rate[a["PvP ATK"]] : Infinity);
    });
  } else if (type === "PVPDEFTier") {
    data.sort((a: any, b: any) => {
      return (rate[b.DEF] != null ? rate[b.DEF] : Infinity) - (rate[a.DEF] != null ? rate[a.DEF] : Infinity);
    });
  }
  return data;
};
