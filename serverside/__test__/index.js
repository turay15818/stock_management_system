const express = require ( "express");
const flash = require ('express-flash');
const cors = require ("cors");
const session = require ("express-session");
const dotenv = require ("dotenv");
const db = require ("./config/Database.js");
const SequelizeStore = require ("connect-session-sequelize");
const FileUpload = require ("express-fileupload");
const UserRoute = require ("./routes/UserRoute");
const RequestRoute = require ("./routes/RequestRoute");
const StockRoute = require ("./routes/StockRoute");
const bodyParser = require ("body-parser");
const AuthRoute = require ("./routes/AuthRoute");
const ListRouter = require ("./routes/ListRoute");
const UsersReset = require ("./controllers/UsersReset")
const BulkStockUpload = require ('./BulkStockUpload')
const cookieParser = require ('cookie-parser');
const logger = require ('morgan');
const UsersBulkUpload = require ("./controllers/UsersBulkUpload");
// const BulkStockRoute = require ('./routes/BulkStockRoute')








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
app.use(StockRoute);
app.use(UsersBulkUpload);
app.use(BulkStockUpload);
app.use(UserRoute);
app.use(UsersReset);

app.use(RequestRoute);
// app.use('/request', RequestRoute);
app.use(AuthRoute);
app.use(FileUpload());
app.use(express.static("public"));
app.use(ListRouter);
// app.use(BulkStockRoute);
// app.use('/Images', express.static('./Images'))
app.use('/users', UserRoute);
app.use('/resetPasswordEmail', UsersReset);
// store.sync();

// const PORT = process.env.PORT || 5000;
// const server = app.listen(PORT, (error) => {
//     error ? console.error(error) : console.log(`server running on port \n http://localhost:${PORT}`);
// });


module.exports = app;