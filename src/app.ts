import express, { Express } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

//Modules allowed
import excelReaderModule from './modules/file-reader'
import { colours } from './utils/colours'
import mongoose from 'mongoose';

dotenv.config();

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/file', excelReaderModule);

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.listen(process.env.APP_PORT, () => {
    console.clear();
    console.log(
        colours.fg.green,
        `⚡️[server]: Server is running at http://localhost:${process.env.APP_PORT}/`
    );
    console.log('\n');
    
    mongoose.connect(`${process.env.MONGO_URI}`, { dbName: process.env.MONGO_DATABASE })
    .then((con) => {
        console.log(
            colours.fg.green, 
            `⚡️[server]: Connected to ${process.env.MONGO_URI?.split('@').pop()?.split('.').shift()?.toUpperCase()}`)
    })
    .catch((e) => console.error(`We couldn't connect due to this error: ${e}`));
});
