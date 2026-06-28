# Registration → Google Sheet setup

The "Reserve your spot" forms (hero capture + first-visit popup) POST signups to a
Google Apps Script Web App bound to your registration sheet:

- Sheet: https://docs.google.com/spreadsheets/d/1oZRuKfm_kTSU98zLwJy7ECtzLwaQG6jzlCyGiF5N8Ro/edit
- Sheet id: `1oZRuKfm_kTSU98zLwJy7ECtzLwaQG6jzlCyGiF5N8Ro`

Each submission appends a row: **[timestamp, email, source]** (source is `hero` or `popup`).

## 1. Add the Apps Script

1. Open the sheet → **Extensions → Apps Script**.
2. Delete any boilerplate and paste this:

```javascript
function doPost(e) {
  try {
    // Open by ID so this works whether the script is bound or standalone.
    // (getActiveSpreadsheet() returns null in a web app / standalone script.)
    var sheet = SpreadsheetApp
      .openById('1oZRuKfm_kTSU98zLwJy7ECtzLwaQG6jzlCyGiF5N8Ro')
      .getSheets()[0];
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([new Date(), data.email || '', data.source || 'site']);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Save (disk icon).

## 2. Deploy as a Web App

1. **Deploy → New deployment** → gear icon → **Web app**.
2. Settings:
   - **Execute as:** Me
   - **Who has access:** Anyone
3. **Deploy**, authorize when prompted, and copy the **Web app URL** — it ends in `/exec`,
   e.g. `https://script.google.com/macros/s/AKfycb.../exec`.

## 3. Wire it into the site

Open `config.ts` and paste the URL into `REGISTER_ENDPOINT`:

```ts
export const REGISTER_ENDPOINT = 'https://script.google.com/macros/s/AKfycb.../exec';
```

Commit + redeploy (Vercel). That's it.

## 4. Test it

1. On the live site, submit a real email in the hero "Reserve your spot" box.
2. Confirm a new row appears in the sheet.

### Note on `no-cors`

The site posts with `fetch(..., { mode: 'no-cors' })` because Apps Script Web Apps
don't return CORS headers. The browser therefore gets an **opaque response** it can't
read, so the front end treats a completed request as success. This is expected — verify
success by checking that the row actually lands in the sheet, not by the UI alone.

If you ever redeploy the script, use **Manage deployments → edit (pencil) → Version: New
version** so the `/exec` URL stays the same (a brand-new deployment gives a new URL you'd
have to paste again).
