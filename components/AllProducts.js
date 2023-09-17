import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { change } from '@/Store/slicer'

export default function AllProducts() {
    const dispatch = useDispatch();

    const getAllProducts = async () => {
        const response = await axios.get('http://localhost:3000/api/GetAllProducts').then((res_) => {

            dispatch(change(res_.data.res));


        })
    }
   
    const DelClasses = (TargetId) => {
        const response = axios.get('http://localhost:3000/api/DelProducts', {
            headers: {
                id_: TargetId
            }
        }).then((res_) => {
            getAllProducts()

        })
    }
    const StateNow=useSelector((state) => state.Selected)
    if (StateNow!=''){

    }
    useEffect(() => {
        getAllProducts()
    },[])
    const AllProducts = useSelector((state) => state.products.Data)

    return (
        <div className='bg-yellow-400 h-100 w-100 flex flex-col justify-start items-center overflow-scroll'>
            {
                AllProducts.map((FetchedData) => (

                    <a href="#" class=" mt-3 mb-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">Product Name : {FetchedData.name} </p>
                            <p onClick={() => DelClasses(FetchedData._id)} class="mb-3 font-normal text-gray-700 dark:text-gray-400 hover:text-blue-700">Delete</p>

                        </div>
                    </a>

                ))
            }

        </div>
    )
}
