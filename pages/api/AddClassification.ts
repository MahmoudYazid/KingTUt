// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ClassificationsModel } from '@/MongoDbConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import  {conectionStr} from '../../MongoDbConfig/connectionString'
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const ClassificationName = req.headers.classificationname_;

    mongoose.connect(conectionStr).
     then(()=>{
        ClassificationsModel.find({
            name: ClassificationName,
            
        }).then((FetchedData)=>{
            if(FetchedData.length>0){
                
                res.status(200).json({res:'existed'});
            }else{
                const newitem = new ClassificationsModel({
                    name: ClassificationName
                })
                newitem.save().then(()=>{
                    res.status(200).json({res:'done'});
                });

               

            }
        })


     })

}
