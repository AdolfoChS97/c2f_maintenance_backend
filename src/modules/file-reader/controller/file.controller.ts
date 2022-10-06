import { File } from '../models/file.dto';
import { formatRecord } from '../utils/format-records.mapper';
import { FileService } from '../service/file.service';

const fileService: FileService = new FileService();

export default class FileController {
    
    static async processFile(file: File){
        return await fileService.processFile(file);
    }
}