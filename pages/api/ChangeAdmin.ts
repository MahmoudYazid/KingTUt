import type { NextApiRequest, NextApiResponse } from 'next'
import {UsersModel} from '../../MongoDbConfig/Schema'
import {conectionStr} from '../../MongoDbConfig/connectionString'
import mongoose from 'mongoose';
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const newname_=req.headers.newname;
    const newpassword_=req.headers.newpassword;
    const oldname_=req.headers.oldname;
    const oldpassword_=req.headers.oldpassword;
      mongoose.connect(conectionStr).
     then(()=>{
        UsersModel.findOneAndUpdate({
            name: oldname_,
            password: oldpassword_
        },{
            name: newname_,
            password: newpassword_
        }).then((FetchedData)=>{
              
                res.status(200).json({res:'Done'});

            
        })


     })
}