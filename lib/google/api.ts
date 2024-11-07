import { google } from "googleapis";

google.options({
  auth: new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  }),
});

export const sheets = google.sheets({
  version: "v4",
});

export async function getSheets() {
  const films = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEETS_ID_EVERYTHING,
    range: "FILM",
  });

  const tv = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEETS_ID_EVERYTHING,
    range: "TV",
  });

  return {
    films: toJson(films.data.values),
    tv: toJson(tv.data.values),
  };
}

// TODO TS type this
function toJson(values) {
  const keys = values[0];
  return (
    values
      .slice(1)
      .map((row) => {
        return keys.reduce((obj, key, i) => {
          obj[key.toLowerCase()] = row[i];
          return obj;
        }, {});
      })
      // return only rows with all required fields (TBC which ones needed)
      .filter((item) => {
        return (
          // todo validate each field is in the correct format
          item.date && item.title && item.rating && item.imdb && item.trailer
        );
      })
  );
}
