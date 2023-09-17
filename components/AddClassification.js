import axios from 'axios'
import React, { useRef, useState } from 'react'

export default function AddClassification() {
  const Newclass = useRef()
  const [Showedres, setShowedres] = useState('')
  const AddToDb = ()=>{
    console.log(Newclass.current.value)
    const request = axios.get('http://localhost:3000/api/AddClassification',{
      headers: {
        classificationname_: Newclass.current.value,

      }
    }).then((res)=>{
     
      setShowedres(res['data'].res)
    })
  }
  return (
    <div className='bg-yellow-400 h-100 w-100 flex flex-col justify-center items-center overflow-scroll'>
    
      <p>Classification Name</p>
      <input ref={Newclass}  type='text' className='rounded-lg w-[10rem] m-2' placeholder='Class name'></input>

      <div onClick={() => AddToDb()} className='bg-white w-[5rem] h-50 mt-3 text-center rounded-lg hover:bg-green-300 hover:cusour-pointer cursor-pointer	'><p>Enter</p></div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{Showedres}</p>

    </div>
  )
}
