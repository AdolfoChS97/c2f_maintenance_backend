import express, { Request, Response } from 'express';
import FileController from './controller/file.controller';
import { File } from './models/file.model';
import Multer from 'multer';

const router = express.Router();
const upload = Multer({ dest: './../../../uploads' })


router.post('/upload', upload.single('document'), async (req: Request, res: Response) => {
    try {
        const document: File = req.file as unknown as File ;
        res.status(200).json(await FileController.processFile(document));
    } catch (e) {
        throw e;
    }
});

export default router;
