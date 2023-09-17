import axios from 'axios'
import React, { useState,useRef } from 'react'
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';


export default function ChangeAdminOption() {
  const oldnameRef = useRef()
  const oldPasswordRef = useRef()
  const newnameRef = useRef()
  const newPasswordRef = useRef()
  const [resState, SetresState]= useState('')
  const ChangeAdmin=()=>{
    if (oldPasswordRef.current.value == '' && newPasswordRef.current.value == '' && oldnameRef.current.value == '' && newnameRef.current.value ==''){
      SetresState('Fill All the inputs')
      return 0
    } 
    const response = axios.get('http://localhost:3000/api/ChangeAdmin',{
      headers:{
        newname : newnameRef.current.value,
        newpassword :newPasswordRef.current.value,
        oldname: oldnameRef.current.value,
        oldpassword: oldPasswordRef.current.value ,
      }
    }).then(response_=>{
      SetresState(response_['data'].res)
    })
  }
  return (
      <div className='bg-yellow-400 h-100 w-100 flex flex-col justify-center items-center overflow-scroll'>

          <p>Old Name</p>
      <input ref={oldnameRef} type='text' className='rounded-lg w-[10rem] m-2' placeholder='Old Name'></input>
          <p>Old password</p>
      <input ref={oldPasswordRef} type='text' className='rounded-lg w-[10rem] m-2' placeholder='Old password'></input>
          <p>new Name</p>
      <input ref={newnameRef} type='text' className='rounded-lg w-[10rem] m-2' placeholder='new Name'></input>
          <p> new password</p>
      <input ref={newPasswordRef} type='text' className='rounded-lg w-[10rem] m-2' placeholder='new password'></input>

      <div onClick={() => ChangeAdmin()} className='bg-white w-[5rem] h-50 mt-3 text-center rounded-lg hover:bg-green-300 hover:cusour-pointer cursor-pointer	'><p>Enter</p></div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{resState}</p>

      </div>
  )
}
