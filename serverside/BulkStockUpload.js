import express from 'express';
import multer from 'multer';
import mysql from 'mysql';
import fs from 'fs';
import bodyparser from 'body-parser';
import path from 'path';
import csv from 'fast-csv';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
app.use(express.static('./public'))
app.use(bodyparser.json())
app.use(
  bodyparser.urlencoded({
    extended: true,
  }),
)
const database = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '!Love2code',
  database: 'inventory',
})
// db.connect(function (err) {
//   if (err) {
//     return console.error('error: ' + err.message)
//   }
//   console.log('Database connected.')
// })

var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, './uploads/')
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname),
    )
  },
})
var upload = multer({
  storage: storage,
})
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
export const BulkStockUpload = app.post('/stockBulkUpload', upload.single('stockBulkUpload'), (req, res) => {
  csvToDb(`${__dirname}/uploads/${req.file.filename}`)
  res.json({
    msg: 'File successfully inserted!',
    filename: req.file,
  })
})
function csvToDb(csvUrl) {
  let stream = fs.createReadStream(csvUrl)
  let collectionCsv = []
  let csvFileStream = csv
    .parse()
    .on('data', function (data) {
      collectionCsv.push(data)
    })
    .on('end', function () {
      collectionCsv.shift()
     
          let query = 'INSERT INTO stock (stockCode, stockName, description, category, stockBrand, stockColor, purchaseDate, purchaseFrom, cost, url) VALUES ?'
          database.query(query, [collectionCsv], (error, res) => {
            console.log(error || res)
          })
      
      fs.unlinkSync(csvUrl)
    })
  stream.pipe(csvFileStream)
}

export default BulkStockUpload;