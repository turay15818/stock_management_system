const  express = require ('express');
const  multer = require ('multer');
const  mysql = require ('mysql');
const  fs = require ('fs');
const  bodyparser = require ('body-parser');
const  path = require ('path');
const  csv = require ('fast-csv');
const  { fileURLToPath } = require ('url');
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

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


 const UsersBulkUpload = app.post('/api/bulkstockupload', upload.single('bulkstockupload'), (req, res) => {
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
      database.connect((error) => {
        if (error) {
          console.error(error)
        } else {
          let query = 'INSERT INTO stock (stockUId, stockCode, stockName, description, category, stockBrand, stockColor, purchaseDate, purchaseFrom, cost, assignedTo, staffId, department, giver, dateGiven, status, stockRecoder, recoderIp, recoderLocation,  recoderAction, assignerIp, assignerLocation, assignerAction, image, url) VALUES ?'
          database.query(query, [collectionCsv], (error, res) => {
            console.log(error || res)
          })
        }
      })
      fs.unlinkSync(csvUrl)
    })
  stream.pipe(csvFileStream)
}

module.exports = UsersBulkUpload;