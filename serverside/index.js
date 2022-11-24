import express from "express";
import flash from'express-flash';
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import FileUpload from "express-fileupload";
import UserRoute from "./routes/UserRoute.js";
import RequestRoute from "./routes/RequestRoute.js";
import StockRoute from "./routes/StockRoute.js";
import StockInRoute from "./routes/StockInRoute.js";
import bodyParser from "body-parser";
import AuthRoute from "./routes/AuthRoute.js";
import ListRoute from "./routes/ListRoute.js";
import LoginIpAddressRoute from "./routes/LoginIpAddressRoute.js"
import multer from "multer";
import UsersReset from "./controllers/UsersReset.js"
import BulkStockUpload from './BulkStockUpload.js'
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import UsersBulkUpload from "./controllers/UsersBulkUpload.js";

// import BulkStockRoute from './routes/BulkStockRoute.js'








dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }))
const sessionStore = SequelizeStore(session.Store);
app.use(logger('dev'));
const store = new sessionStore({
    db: db
});

// (async () => {
//     await db.sync();
// })();

app.use(flash());


app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));














app.use(express.json());
// app.use(BulkStockRoute);
app.use(UsersBulkUpload);
app.use(BulkStockUpload);
app.use(UserRoute);
app.use(UsersReset);
app.use(RequestRoute);
app.use(StockInRoute);
app.use(AuthRoute);
app.use(FileUpload());
app.use(express.static("public"));
// app.use('/Images', express.static('./Images'))
app.use(StockRoute);
app.use(ListRoute);
app.use(LoginIpAddressRoute);
// app.use('/api/users', UserRoute);
// store.sync();

const PORT = process.env.PORT || 5000;
app.listen(PORT, (error) => {
    error ? console.error(error) : console.log(`server running on port \n http://localhost:${PORT}`);
});


