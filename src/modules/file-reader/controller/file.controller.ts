import { File } from '../models/file.model';
import ExcelJS from 'exceljs';
import { formatRecord } from '../utils/format-records.mapper';

export default class FileController {
    
    static async processFile(file: File){
        const { path } = file;
        const workbook = new ExcelJS.Workbook(); 
        const excelWorkbook = await workbook.xlsx.readFile(path);
        const records: Array<any> = [];

        excelWorkbook.getWorksheet(1).eachRow((row, number) => {
            if(number != 1) records.push(formatRecord(row.values));
        })
        return {
            data: records,
        }
    }
}