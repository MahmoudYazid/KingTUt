import React, { useState, useEffect } from 'react'

import Link from 'next/link'

import { deleteCookie, getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import AddClassification from './AddClassification'
import ChangeAdminOption from './ChangeAdminOption'
import AddProduct from "/components/AddProduct";
import AllClasses from './AllClasses'
import AllProducts from './AllProducts'
import AddKeyWord from './AddKeyWord'
import AllKeyWords from './AllKeyWords'
export default function DashBoard() {
    const [Routing, SetRouting] = useState('')
    const [visibility, SetVisibility] = useState('visible')
    const router = useRouter()
    const checkCOOKIE = () => {
        if (!getCookie('kingtut')) {
            router.push('/')
        } 
    }
    useEffect(() => {
        checkCOOKIE()
    }, [])
    return (
        <div className='flex justify-center items-center h-screen bg-white  w-100'>
            <div className='w-[50rem] h-[30rem] bg-white m-3 grid grid-row-[.2fr_1fr] md:grid-cols-[.2fr_1fr] '>
                <div className='bg-blue-400 h-100 w-100 flex flex-row md:flex-col justify-start items-center overflow-scroll		 '>
                    <div className={` bg-white w-[5rem] h-50 m-3 text-center rounded-lg hover:bg-green-300 hover:cusour-pointer cursor-pointer `} onClick={() => SetRouting('Add_Product')} ><p>Add Product</p></div>
                    <div className={`bg-white w-[5rem] h-50 m-3 text-center rounded-lg hover:bg-green-300 hover:cusour-pointer cursor-pointer	`} onClick={() => SetRouting('All_Products')} ><p>All Products</p></div>

                    <div onClick={()=>SetRouting('Add_classification')} className='bg-white w-[6rem] h-50 mt-3 text-center rounded-lg hover:bg-green-300 hover:cusour-pointer cursor-pointer	' ><p>Add classification</p></div>
                    <div className='bg-white w-[6rem] h-50 m-3 text-center rounded-lg hover:bg-green-300 hover:cusour-pointer cursor-pointer	' onClick={() => SetRouting('All_Classes')}><p>All classification</p></div>
                    <div className='bg-white w-[6rem] h-50 m-3 text-center rounded-lg hover:bg-green-300 hover:cusour-pointer cursor-pointer	' onClick={() => SetRouting('Change_admin_options')}><p>Change admin options</p></div>
                    <div className='bg-white w-[6rem] h-50 m-3 text-center rounded-lg hover:bg-green-300 hover:cusour-pointer cursor-pointer	' onClick={() => SetRouting('Add_Keyword')}><p>Add KeyWord</p></div>
                    <div className='bg-white w-[6rem] h-50 m-3 text-center rounded-lg hover:bg-green-300 hover:cusour-pointer cursor-pointer	' onClick={() => SetRouting('All_Keywords')}><p>All Keywords</p></div>
                    <Link href={"/"} onClick={() => {
                        deleteCookie('kingtut')
                    }} className='bg-white w-[5rem] h-50 m-3 text-center rounded-lg hover:bg-red-300 hover:cusour-pointer cursor-pointer	'><p>Sign Out</p></Link>

                </div>

         {
                    Routing == 'Add_classification' ? <AddClassification /> : Routing == 'Change_admin_options' ? <ChangeAdminOption /> : Routing == 'Add_Product' ? <AddProduct /> : Routing == 'All_Classes' ? <AllClasses /> : Routing == 'All_Products' ? <AllProducts /> : Routing == 'Add_Keyword' ? <AddKeyWord /> : Routing == 'All_Keywords' ? <AllKeyWords />:null
         }


            </div>
        </div>
    )
}