require('dotenv').config()

const express = require('express')
const openSpreadsheet = require('./spreadsheet/init')

const app = express()
const port = process.env.PORT || 3000

app.get('/', async (req, res) => {
    const doc = await openSpreadsheet(process.env.SPREADSHEET_ID);
    res.send(doc.title)
})

app.listen(port, () => {
  console.log(`Server started on port ${port}. Now listening for requests...`)
})