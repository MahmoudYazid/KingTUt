import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from "fs";
import path from "path";
import formidable, { File } from 'formidable';
import { Extension } from 'typescript';
import { productsModel } from '@/MongoDbConfig/Schema';

export const config = {
    api: {
        bodyParser: false,
    }
};

type ProcessedFiles = Array<[string, File]>;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
        const ProductName_= req.headers.productname
        const ProductDesc_ = req.headers.productdesc
        const Classification_= req.headers.classification
        var filename_:String = ''
    let status = 200,
        resultBody = { status: 'ok', message: 'Files were uploaded successfully' };

    /* Get files using formidable */
    const files = await new Promise<ProcessedFiles | undefined>((resolve, reject) => {
        const form = new formidable.IncomingForm();
        const files: ProcessedFiles = [];
        form.on('file', function (field, file) {
            files.push([field, file]);
        })
        form.on('end', () => resolve(files));
        form.on('error', err => reject(err));
        form.parse(req, () => {
            //
        });
    })

    if (files?.length) {

        /* Create directory for uploads */
        const targetPath = path.join(process.cwd(), `/public/UploadedImg/`);
        try {
            await fs.access(targetPath);
        } catch (e) {
            await fs.mkdir(targetPath);
        }
       
        /* Move uploaded files to directory */
        for (const file of files) {
             const NoInQue = (await fs.readdir(targetPath)).length+1;
            const tempPath = file[1].filepath;
            await fs.rename(tempPath, targetPath +NoInQue + '_'  +file[1].originalFilename );
            filename_= String(NoInQue + '_'  +file[1].originalFilename)
        }
    }

    const newitem = new productsModel({
        name:ProductName_,
        description:ProductDesc_,
        imgname:filename_,
        classification:Classification_

    })
    newitem.save().then(() =>{
    res.status(status).json({res:filename_});

    })
}

export default handler;
