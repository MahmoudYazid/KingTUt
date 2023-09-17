// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ClassificationsModel, productsModel } from '@/MongoDbConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import  {conectionStr} from '../../MongoDbConfig/connectionString'
import fs from 'fs'
import path from 'path'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const _id_ = req.headers.id_;

    mongoose.connect(conectionStr).
     then(()=>{
        productsModel.find({
            _id: _id_,
            
        }).then(data => {
           
            const targetPath = path.join(process.cwd(), `/public/UploadedImg/${data[0].imgname}`);
            fs.unlink(targetPath   , (err) => {
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    console.log('File deleted successfully');
  }
});}).then(()=>{
  productsModel.findOneAndDelete({
            _id: _id_,
            
        }).then((FetchedData)=>{

           
                    res.status(200).json({res:'done'});
             

     })
})

           
      

})
}
