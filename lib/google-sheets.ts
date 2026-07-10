/**
 * Google Sheets utility — server-only
 *
 * Credentials and sheet IDs are stored in environment variables only.
 * Never import this file from a client component.
 */
import { google } from "googleapis"

/** Lazily initialised auth client (reused across requests in the same process) */
let _auth: InstanceType<typeof google.auth.GoogleAuth> | null = null

function getAuth() {
  if (_auth) return _auth

  const email = process.env.GS_CLIENT_EMAIL
  const rawKey = process.env.GS_PRIVATE_KEY

  if (!email || !rawKey) {
    throw new Error(
      "Google Sheets credentials missing. " +
        "Set GS_CLIENT_EMAIL and GS_PRIVATE_KEY in your environment."
    )
  }

  // Vercel / host dashboards escape newlines as literal \n — fix that.
  const privateKey = rawKey.replace(/\\n/g, "\n")

  _auth = new google.auth.GoogleAuth({
    credentials: { client_email: email, private_key: privateKey },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })

  return _auth
}

/**
 * Append a single row to a Google Sheet.
 *
 * @param sheetId  The spreadsheet ID (from the env-var, NOT hardcoded)
 * @param range    Named range / tab, e.g. "Sheet1!A:Z"
 * @param values   Flat array of cell values in column order
 */
export async function appendRow(
  sheetId: string,
  range: string,
  values: (string | number | null)[]
) {
  const auth = getAuth()
  const sheets = google.sheets({ version: "v4", auth })

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [values],
    },
  })
}

/**
 * Write the header row to row 1 only if that row is still blank.
 * Safe to call on every cold-start — won't overwrite existing data.
 */
export async function ensureHeaders(
  sheetId: string,
  headers: string[],
  tab = "Sheet1"
) {
  const auth = getAuth()
  const sheets = google.sheets({ version: "v4", auth })

  const check = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: `${tab}!A1:Z1`,
  })

  const row0 = check.data.values?.[0]
  if (!row0 || row0.every((v) => !v)) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: `${tab}!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [headers] },
    })
  }
}
