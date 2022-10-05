import { File } from '../models/file.model';
import { formatRecord } from '../utils/format-records.mapper';
import { Task } from '../entities/Task';
import moment from 'moment';
import ExcelJS from 'exceljs';

export class FileService {
    
    async processFile(file: File): Promise<{ records: Array<object>, path: string, fileName: string  }> {
        const { path, filename,  } = file;
        const workbook = new ExcelJS.Workbook(); 
        const excelWorkbook = await workbook.xlsx.readFile(path);
        const records: Array<any> = [];
        excelWorkbook.getWorksheet(1).eachRow((row, number) => {
            if(number != 1) records.push(formatRecord(row.values));
        })
        return {
            records: records,
            path: path,
            fileName: filename,
        };
    }

    async createTask(fileName: string, filePath: string): Promise<void> {
        const task = new Task({
            filename: fileName,
            filepath: filePath,
            createdAt: moment().toDate(),
            processed: [],
            errored: [],
            status: 'created',
        });
        await task.save();
    }
}