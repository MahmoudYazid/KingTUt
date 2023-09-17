import React, { useEffect, useState } from 'react'
import KeyWords from './KeyWords'
import Link from 'next/link'
import axios from 'axios'
import  {useSelector,useDispatch} from 'react-redux'
import { change } from '@/Store/slicer'

export default function ShopBody() {
   
    const dispatch = useDispatch();
    const getAllProducts =async () => {
        const response =await  axios.get('http://localhost:3000/api/GetAllProducts').then((res_) => {

            dispatch(change(res_.data.res));
    

        })
    }


    useEffect(() => {
        getAllProducts()
    },[])
    const AllProducts = useSelector((state) => state.products.Data)
    console.log(AllProducts)
    

  return (
    <>
          <div className='grid md:grid-cols-[.2fr_1fr] grid-cols-[1fr] bg-white min-h-screen min-w-100 flex-grow  mt-20	 '>
          <KeyWords />
              <div className='bg-white justify-center min-h-100 min-w-100 flex-1 flex flex-row flex-wrap '>
       {
                      AllProducts.map((FetchedData=>(
                          <Link href={`/description/${FetchedData._id}`}
                              class=" hover:scale-110 hover:cursor-pointer	 mt-[50px] mr-[30px]    block max-w-[18rem] max-h-[20rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                              <div class="relative overflow-hidden bg-cover bg-no-repeat">
                                  <img
                                      class="rounded-t-lg h-[250px] w-[500px] "
                                      src={FetchedData.imgname == ''  ? '/Pharaoh.svg' : `/UploadedImg/${FetchedData.imgname}`   }
                                      alt={'img Not Exist'} />
                              </div>
                              <div class="p-6 bg-white text-center ">
                                  <p class=" text-3xl	text-black">
                                      {FetchedData.name}
                                  </p>

                              </div>

                          </Link>
                      )))
       }
             
  
          </div>
        
      
    </div>
     
         
      </>
  )
}
