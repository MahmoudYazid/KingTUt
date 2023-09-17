import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AiOutlineFacebook, AiOutlineMobile, AiOutlineMail } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux'
import { GiCancel } from 'react-icons/gi';
import { change } from '@/Store/slicer';

export default function NavBar() {
    const [SideBarVisibilityState, SetSideBarVisibilityState]=useState('invisible')
  const [PopUp, setPopUp] = useState('hidden')
  const [PopUpData, setPopUpPopUpData] = useState('')

  const [CustomJewelaryPopUp, setCustomJewelaryPopUp] = useState('hidden')
  const [AllClasses, SetAllClasses] = useState([])

  const dispatch = useDispatch()

  const getAllClasses = () => {
    axios.get('http://localhost:3000/api/GetAllClasses').then((res_) => {
      SetAllClasses(res_.data.res)

    })
  }
  const ChangeSearchedData=(name_)=>{
    axios.get('http://localhost:3000/api/GetSpecificClass',{
      headers:{
        specificclass_: name_
      }
    }).then((res_) => {
      dispatch(change(res_.data.res));

    })

  }
  useEffect(()=>{
getAllClasses()
  },[])
  return (
    <>
   
      <div className='bg-white fixed z-10 flex flex-row min-w-full min-h-[50px] content-center border-b-2 border-black '>
              <img src='/Pharaoh.svg' className='ml-4 w-[4rem] h-[5rem] '></img>
              <p className='self-center ml-5 font-mono border-black border-r-2 p-2 hover:text-yellow-700	 cursor-default text-black'>kingtut-trading</p>
        <Link href={'/loginPage'} className='self-center ml-2 font-mono  p-2 hover:text-yellow-700	 cursor-default text-black hover:cursor-pointer'>Login</Link>
        <p className='self-center ml-2 font-mono hover:text-sky-700 hover:cursor-pointer text-black' onClick={()=>{
            SideBarVisibilityState =='visible'? SetSideBarVisibilityState('invisible') : SetSideBarVisibilityState('visible');
          CustomJewelaryPopUp == 'visible' ? setCustomJewelaryPopUp('hidden') : null;
          }}>Shop</p>
        <a onClick={() => {
          PopUp == 'visible' ? setPopUp('invisible') : setPopUp('visible');
        }} className='self-center ml-2 font-mono hover:text-sky-700 hover:cursor-pointer mr-2 text-black'  >Contact</a>
    </div>

      <div className={` ${SideBarVisibilityState} z-10 min-h-[5rem] fixed  top-[5rem] left-[15rem] 	w-[10rem] bg-slate-50 flex flex-col  fixed `}>
        {
          AllClasses.map((Fdata)=>(
            <>
              <p onClick={()=>{
                ChangeSearchedData(Fdata.name)
              }} className='self-center ml-5 font-mono hover:text-sky-700 hover:cursor-pointer text-black'>{Fdata.name}</p>

            </>
          ))
        }
    
    </div>
     
    
     
      <div className={`${PopUp} fixed md:w-[30rem] w-[20rem] h-[30rem] bg-white md:left-[30%] left-[0%] top-[10%] z-20 border-black border-2 flex justify-center items-center flex-col`}>

        <img src='/Pharaoh.svg' className=' w-[4rem] h-[5rem] '></img>

        <p className=' font-mono border-black  hover:text-yellow-700 cursor-default text-black'>kingtut-trading Contact</p>
        <div className='flex flex-row '>
          <AiOutlineFacebook size={50} className='hover:text-yellow-500 hover:cursor-pointer text-black'></AiOutlineFacebook>
          <AiOutlineMobile onClick={() => setPopUpPopUpData('01005648558')} size={50} className='hover:text-yellow-500 hover:cursor-pointer text-black'></AiOutlineMobile>
          <AiOutlineMail onClick={() => setPopUpPopUpData('Abuelyazid.software@gmail.com')} size={50} className='hover:text-yellow-500 hover:cursor-pointer text-black'></AiOutlineMail>
        </div>
        <p className='text-black'>{PopUpData}</p>
        <GiCancel size={50} onClick={()=>setPopUp('hidden')} className='mt-5 hover:text-red-400 hover:cursor-pointer'></GiCancel>
      </div>

      

    </>
  )
}
