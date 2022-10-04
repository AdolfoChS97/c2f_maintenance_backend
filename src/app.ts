import express, { Express } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

//Modules allowed
import excelReaderModule from './modules/file-reader'


dotenv.config();

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/file', excelReaderModule);

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.listen(process.env.APP_PORT, () => {
    console.log('\n');
    console.log(`⚡️[server]: Server is running at http://localhost:${process.env.APP_PORT}/`);

});