import React from "react";

export type TableData = {
  data: {
    [key: string]:
      | string
      | number
      | { pretext: string | null; type: string; value: string; href: string };
  };
};

export const Table = ({ data }: TableData) => {
  return (
    <table className="">
      <tbody>
        {Object.entries(data).map(([key, value]) => {
          const prettyKey = key.replace(/([A-Z])/g, " $1").toLowerCase();
          if (typeof value === "object") {
            return (
              <tr key={key} className="border-y-4 border-transparent">
                <td className="text-lime capitalize align-top">{prettyKey}:</td>
                <td className="text-light align-bottom">
                  {value.pretext && (
                    <span className="text-light">{value.pretext + " "}</span>
                  )}
                  <a
                    href={value.href}
                    target="_blank"
                    className="text-light underline underline-offset-2 hover:text-lime"
                  >
                    {value.value}
                  </a>
                </td>
              </tr>
            );
          }
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
