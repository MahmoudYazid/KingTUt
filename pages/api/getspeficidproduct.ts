// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {productsModel } from '@/MongoDbConfig/Schema'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import  {conectionStr} from '../../MongoDbConfig/connectionString'
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const _id_ = req.headers.id_;

    mongoose.connect(conectionStr).
     then(()=>{
        productsModel.find({
            _id: _id_,
            
        }).then((FetchedData)=>{
                    res.status(200).json({res:FetchedData});
     })

})
}
