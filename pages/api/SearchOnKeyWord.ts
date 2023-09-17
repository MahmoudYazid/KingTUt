import type { NextApiRequest, NextApiResponse } from 'next'
import {UsersModel, productsModel} from '../../MongoDbConfig/Schema'
import {conectionStr} from '../../MongoDbConfig/connectionString'
import mongoose from 'mongoose';
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const _Word_=req.headers.word_;

      mongoose.connect(conectionStr).
     then(()=>{
        productsModel.find({
            name:{$regex:_Word_} ,
            
        }).then((FetchedData)=>{
            if(FetchedData.length>0){
              
           
                res.status(200).json({res:FetchedData});
            }else{
                res.status(200).json({res:'Null'});

            }
        })


     })
}