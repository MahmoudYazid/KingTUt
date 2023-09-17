import React, { useRef,useEffect } from 'react'
import { GiCancel, GiExitDoor } from 'react-icons/gi';
import { BiLogIn } from 'react-icons/bi';
import Link from 'next/link';
import { AiOutlineFacebook, AiOutlineMobile, AiOutlineMail } from 'react-icons/ai';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';

export default function LoginComponant() {
    const checkCOOKIE = () => {
        if (getCookie('kingtut')) {
            router.push('/kingtutController/admin')
        }
    }
    useEffect(() => {
        checkCOOKIE()
    }, [])
    const router = useRouter()

    const usernameref = useRef()
    const passwordref = useRef()

    const loginFunc = () => {
        const response = axios.get('http://localhost:3000/api/login', {
            headers: {
                name: usernameref.current.value,
                password: passwordref.current.value,
            }

        }).then((res) => {

            if (res['data'].res != 'Null') {
                router.push('/kingtutController/admin')
            }
        })

    }

  return (
      <div className='min-h-screen min-w-100 flex   justify-center items-center'>
          <div className={`   w-[50rem] ml-2 mr-2 h-[30rem] bg-white  z-20 border-black border-2 flex justify-center items-center flex-col`}>

              <img src='/Pharaoh.svg' className=' w-[4rem] h-[5rem] '></img>

              <p className=' font-mono border-black  hover:text-yellow-700 cursor-default text-black'>kingtut-trading Login</p>
              <input type='text' className='border-2 border-black mt-2' placeholder='Username' ref={usernameref}></input>
              <input type='text' className='border-2 border-black mt-2' placeholder='Password' ref={passwordref}></input>
              <div className='flex flex-row'>
                  <div onClick={()=>loginFunc()}>
                      <BiLogIn size={50} className=' hover:text-green-400 mr-2 hover:cursor-pointer'></BiLogIn>

                </div>
                  <Link href={'/'} className=' font-mono border-black  mr-2 hover:text-yellow-700 hover:cursor-pointer  text-black'>
                      <GiExitDoor size={50}></GiExitDoor>
                  </Link>
              </div>

          </div>
      </div>
  )
}
