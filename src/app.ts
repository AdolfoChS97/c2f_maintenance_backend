import express, { Express } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';

//Modules allowed
import excelReaderModule from './modules/file-reader/routes'
import { colours } from './utils/colours'

dotenv.config();

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/file', excelReaderModule);

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
            `⚡️[server]: Connected to ${process.env.MONGO_URI?.split('@').pop()?.split('.').shift()?.toUpperCase()}`
        );
        console.log('\n');
    })
    .catch((e) => console.error(colours.fg.red,`We couldn't connect due to this error: ${e}`));
});
