import { File, Customer } from '../models/file.dto';
import { formatRecord } from '../utils/format-records.mapper';
import { Task } from '../entities/Task';
import moment from 'moment';
import ExcelJS from 'exceljs';

export class FileService {
    
    async processFile(file: File): Promise<{ fileName: string, output: Array<Customer> }> {
        try {
            const { path, originalname,  } = file;
            const excelWorkbook = await new ExcelJS.Workbook().xlsx.readFile(path); 
            const customers: Array<Customer> = [];
            const taskCreated = await this.createTask(originalname, path);
            
            excelWorkbook.getWorksheet(1).eachRow((
                { values }, 
                number: number | string
            ) => {
                if(number != 1) customers.push(formatRecord(values));
            });
            
            await Task.updateOne({ _id: taskCreated['_id'] }, { $set: { customers: customers, noOfCustomers: customers.length } }, { upsert: true }).exec();            
            return { fileName: originalname, output: customers };

        } catch (e) {
            throw e;
        }
    }

    async createTask(fileName: string, filePath: string) {
        const task = new Task({
            filename: fileName,
            filepath: filePath,
            createdAt: moment().toDate(),
            status: 'created',
        });
        await task.save();
        return task;
    }



}