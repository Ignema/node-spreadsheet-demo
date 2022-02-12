require('dotenv').config()

const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require(process.env.SERVICE_ACCOUNT_CREDENTIALS_PATH);

const openSpreadsheet = async (spreadsheet_id) => {
    const doc = new GoogleSpreadsheet(spreadsheet_id);
    await doc.useServiceAccountAuth(creds, process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
    await doc.loadInfo();
    return doc;
}

module.exports = openSpreadsheet;