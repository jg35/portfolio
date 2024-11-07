import React from "react";

export type TableData = {
  data: {
    [key: string]: string | number;
  };
};

export const Table = ({ data }: TableData) => {
  return (
    <table className="">
      <tbody>
        {Object.entries(data).map(([key, value]) => {
          const prettyKey = key.replace(/([A-Z])/g, " $1").toLowerCase();
          return (
            <tr key={key} className="border-y-4 border-transparent">
              <td className="text-lime capitalize align-top">{prettyKey}:</td>
              <td className="text-light align-bottom">{value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
