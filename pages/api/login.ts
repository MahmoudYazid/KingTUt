import type { NextApiRequest, NextApiResponse } from 'next'
import {UsersModel} from '../../MongoDbConfig/Schema'
import {conectionStr} from '../../MongoDbConfig/connectionString'
import mongoose from 'mongoose';
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const name_=req.headers.name;
    const password_=req.headers.password;
        
      mongoose.connect(conectionStr).
     then(()=>{
        UsersModel.find({
            name: name_,
            password: password_
        }).then((FetchedData)=>{
            if(FetchedData.length>0){
                 deleteCookie('kingtut', { req, res });
                
                setCookie('kingtut',JSON.stringify(FetchedData) , { req, res, maxAge: 60 * 60 * 24 })
           
                res.status(200).json({res:FetchedData});
            }else{
                res.status(200).json({res:'Null'});

            }
        })


     })
}