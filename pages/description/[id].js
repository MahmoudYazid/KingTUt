import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function MainId() {
  const router = useRouter()
  const { id } = router.query;

  const [IdData, setIdData]= useState([])
  const getSpecificId=()=>{
   
    axios.get('http://localhost:3000/api/getspeficidproduct',{
      headers:{
        id_:id
      }
    }).then((fetchedData)=>{
      setIdData(fetchedData.data.res);
      console.log(fetchedData.data.res)
    })
  }
  useEffect(()=>{
    console.log(id)
    getSpecificId()
  },[])
  return (
    <div className="min-h-screen min-w-100 flex   justify-center items-center 	bg-white		"  >
      {
        IdData.map((GetData)=>(
          <div className='flex md:flex-col flex-col w-[60rem] min-h-[30rem] bg-white   m-3 text-center border-black border-2  '>
            <img src={GetData.imgname == '' ? '/Pharaoh.svg' : `/UploadedImg/${GetData.imgname}`} className='min-w-[10rem] h-[10rem]  self-center ml-5	mt-5 mb-5 hover:scale-[2]	'></img>
            <div className='text-center flex  justify-center items-center'>
              <Link href={'/'} className='self-center ml-5 font-serif border-black border-2 p-1 rounded-lg hover:bg-black hover:text-white hover:cursor-pointer bg-white	'> Back </Link>
              <p className='self-center ml-5 font-serif border-black border-2 p-1 rounded-lg bg-white hover:bg-black hover:text-white hover:cursor-pointer	'> For order : Abuelyazid.software@gmail.com </p>
            </div>
            <div className='bg-black min-h-[14rem] mt-3 '>
              <p className='text-yellow-400'>Description</p>
              <p className='ml-5 mr-5 pharaoh-text '>{GetData.description}</p>
            </div>
          </div>
        ))
      }
     
      
    </div>
  )
}
