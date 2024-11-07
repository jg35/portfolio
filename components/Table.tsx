import React from "react";

export type TableData = {
  data: {
    [key: string]: string | number;
  };
};

export const Table = ({ data }: TableData) => {
  return (
    <table className="">
      {Object.entries(data).map(([key, value]) => (
        <tr key={key} className="border-y-4 border-transparent">
          <td className="text-lime capitalize align-top">{key}:</td>
          <td className="text-light">{value}</td>
        </tr>
      ))}
    </table>
  );
};
