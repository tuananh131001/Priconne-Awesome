import React from "react";

function RateColor({ rate }: any) {
  return (
    <>
      {" "}
      {rate?.includes("EX") ? (
        <p className="font-bold text-red-900">{rate}</p>
      ) : rate?.includes("SSS") ? (
        <p className="font-bold text-red-700">{rate}</p>
      ) : rate?.includes("SS") ? (
        <p className="font-bold text-red-500">{rate}</p>
      ) : rate?.includes("S") ? (
        <p className="font-bold text-red-300">{rate}</p>
      ) : rate?.includes("A") ? (
        <p className="font-bold text-yellow-500">{rate}</p>
      ) : rate?.includes("B") ? (
        <p className="font-bold text-black-500">{rate}</p>
      ) : (
        <p className="font-bold">{rate}</p>
      )}
    </>
  );
}

export default RateColor;
