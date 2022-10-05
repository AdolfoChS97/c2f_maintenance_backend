import { File } from '../models/file.model';
import { formatRecord } from '../utils/format-records.mapper';
import { FileService } from '../service/file.service';

const fileService: FileService = new FileService();

export default class FileController {
    
    static async processFile(file: File){
        const { 
            records, 
            fileName, 
            path 
        }  = await fileService.processFile(file);

        await fileService.createTask(fileName, path);

        return { 
            records: records, 
            recordsQuantified: records.length, 
            fileName: fileName, 
            filePath: path 
        };
    }
}