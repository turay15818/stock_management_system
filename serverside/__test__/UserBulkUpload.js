const User = require ('./models/UserModel')
const express = require ('express');
const multer = require ('multer');
const mysql = require ('mysql');
const fs = require ('fs');
const path = require ('path');
const csv = require ('fast-csv');
const bodyParser = require ("body-parser");
// const { fileURLToPath } = require ('url');
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const connection = require ('./config/connection');



const app = express()
app.use(express.static('./public'))





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
    // res.sendFile(__dirname + '/index.html')
  })
const UsersBulkUpload = app.post('/usersBulkUpload', upload.single('usersBulkUpload'), (req, res) => {
    csvToDb(`${__dirname}/uploads/${req.file.filename}`)
    res.json({
      msg: 'File successfully inserted!',
      file: req.file,
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
        connection.connect((error) => {
          if (error) {
            console.error(error)
          } else {
            let query = 'INSERT INTO users (staffId, name,  department, staffStatus, email, password, role) VALUES ?'
            connection.query(query, [collectionCsv], (error, res) => {
              console.log(error || res)
            })
          }
        })
        fs.unlinkSync(csvUrl)
      })
    stream.pipe(csvFileStream)
  }
// , creator, ipAddress, location, createdTime, actionPerformed

module.exports = {UsersBulkUpload};








































































































































