// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ClassificationsModel, productsModel } from '@/MongoDbConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import  {conectionStr} from '../../MongoDbConfig/connectionString'
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   
    const SpecificClass = req.headers.specificclass_
    mongoose.connect(conectionStr).
     then(()=>{
        productsModel.find({
           classification:SpecificClass 
            
        }).then((FetchedData)=>{
                
                res.status(200).json({res:FetchedData});
            
        })


     })

}