export const sortUnitBy = (data: any, type: string) => {
    const rate: any = {
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
    }
    return data;
  };
  