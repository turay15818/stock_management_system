// import BulkStock from '../models/BulkStockModel.js'
// // image Upload
// import multer from 'multer'
// import path from 'path'
// import BulkStockUpload from '../BulkStockUpload.js'
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


// export const addBulkStock = async (req, res) => {

//     let info = {
//         name: req.body.name,
//         code: req.body.code,
//         description: req.body.description,
//         brand: req.body.brand,
//         color: req.body.color,
//         quantity: req.body.quantity,
//         image: req.path,
//         purchaseDate: req.body.purchaseDate,
//         purchaseFrom: req.body.purchaseFrom,
//     }

//     const bulkStock = await BulkStock.create(info)
//     res.status(200).send(bulkStock)
//     console.log(product)

// }



// // 2. get all products

// export const getAllBulkStock = async (req, res) => {

//     let bulkStock = await BulkStock.findAll({})
//     res.status(200).send(bulkStock)

// }

// // 3. get single product

// export const getOneBulkStock = async (req, res) => {

//     let id = req.params.id
//     let bulkStock = await BulkStock.findOne({ where: { id: id }})
//     res.status(200).send(bulkStock)

// }

// // 4. update Product

// export const updateBulkStock = async (req, res) => {

//     let id = req.params.id

//     const bulkStock = await BulkStock.update(req.body, { where: { id: id }})

//     res.status(200).send(bulkStock)
   

// }

// // 5. delete product by id

// export const deleteBulkStock = async (req, res) => {

//     let id = req.params.id
    
//     await BulkStock.destroy({ where: { id: id }} )

//     res.status(200).send('Stock is deleted !')

// }

// // 6. get published product

// // export const getPublishedBulkStock = async (req, res) => {

// //     const bulkStock =  await BulkStock.findAll()

// //     res.status(200).send(bulkStock)

// // }

// // 7. connect one to many relation Product and Reviews



// // 8. Upload Image Controller

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'Images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

// export const upload = multer({
//     storage: storage,
//     limits: { fileSize: '1000000' },
//     fileFilter: (req, file, cb) => {
//         const fileTypes = /jpeg|jpg|png|gif/
//         const mimeType = fileTypes.test(file.mimetype)  
//         const extname = fileTypes.test(path.extname(file.originalname))

//         if(mimeType && extname) {
//             return cb(null, true)
//         }
//         cb('Give proper files formate to upload')
//     }
// }).single('image')


// export default BulkStockUpload








