// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ClassificationsModel, KeyWordsModel } from '@/MongoDbConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import  {conectionStr} from '../../MongoDbConfig/connectionString'
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const _Word_ = req.headers.word_;

    mongoose.connect(conectionStr).
     then(()=>{
        KeyWordsModel.find({
            word: _Word_,
            
        }).then((FetchedData)=>{
            if(FetchedData.length>0){
                
                res.status(200).json({res:'existed'});
            }else{
                const newitem = new KeyWordsModel({
                    word: _Word_
                })
                newitem.save().then(()=>{
                    res.status(200).json({res:'done'});
                });

               

            }
        })


     })

}
