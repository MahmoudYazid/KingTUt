// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ClassificationsModel, KeyWordsModel } from '@/MongoDbConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import  {conectionStr} from '../../MongoDbConfig/connectionString'
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   

    mongoose.connect(conectionStr).
     then(()=>{
        KeyWordsModel.find({
           
            
        }).then((FetchedData)=>{
                
                res.status(200).json({res:FetchedData});
            
        })


     })

}
