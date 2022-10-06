import express, { Request, Response } from 'express';
import Multer from 'multer';

// Module files
import FileController from './controller/file.controller';
import { File } from './models/file.dto';

const router = express.Router();
const upload = Multer({ dest: `${process.cwd()}/uploads/` })


router.post('/process/upload', upload.single('document'), async (req: Request, res: Response) => {
    try {
        console.info(' ⚡️[server]: Reached endpoint /file/process/upload')
        console.time(' ⚡️[server]: Upload file process');
        const document: File = req.file as unknown as File;
        res.status(200).json(await FileController.processFile(document));
        console.timeEnd(' ⚡️[server]: Upload file process');
    } catch (e) {
        throw e;
    }
});

export default router;
