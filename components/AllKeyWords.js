import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function AllClasses() {
    const [AllClasses, SetAllClasses] = useState([])
    const getAllClasses = () => {
        const response = axios.get('http://localhost:3000/api/GetAllKeyWords').then((res_) => {
            SetAllClasses(res_.data.res)

        })
    }

    const DelClasses = (TargetId) => {
        const response = axios.get('http://localhost:3000/api/DelKeyWord', {
            headers: {
                id_: TargetId
            }
        }).then((res_) => {
            getAllClasses()

        })
    }
    useEffect(() => {
        getAllClasses()
    },[])
    return (
        <div className='bg-yellow-400 h-100 w-100 flex flex-col justify-start items-center overflow-scroll'>
            {
                AllClasses.map((FetchedData) => (

                    <a href="#" class=" mt-3 mb-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">KeyWord : {FetchedData.word} </p>
                            <p onClick={() => DelClasses(FetchedData._id)} class="mb-3 font-normal text-gray-700 dark:text-gray-400 hover:text-blue-700">Delete</p>

                        </div>
                    </a>

                ))
            }

        </div>
    )
}
