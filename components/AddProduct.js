import axios from "axios";
import React, { useRef, useState,useEffect } from "react";

const AddProduct = () => {

  const [ClassesState, SetClassesState] =useState([])
  const inputFileRef = useRef(null);
  const ProductNameRef = useRef();
  const ProductDescRef = useRef();
  const ClassificationRef = useRef();

  const handleOnClick = async (e) => {
    e.preventDefault()
    /* Prevent form from submitting by default */
   

    /* If file is not selected, then show alert message */
    if (!inputFileRef.current?.files?.length) {
      alert('Please, select file you want to upload');
      return;
    }


    /* Add files to FormData */
    const formData = new FormData();
    Object.values(inputFileRef.current.files).forEach(file => {
      formData.append('file', file);
    })

    /* Send request to our api route */
    const response = await fetch('/api/upload', {
      method: 'POST',
      headers:{
        productname: ProductNameRef.current.value,
        productdesc: ProductDescRef.current.value,
        classification: ClassificationRef.current.value
      },
      body: formData
    }).then((data)=>{
      console.log(data)
    });

   

  
  };
  const GetAllClassifications = ()=>{
    axios.get('http://localhost:3000/api/GetAllClasses').then((res_) => {
      SetClassesState(res_.data.res)

    })
  }
  useEffect(()=>{
    GetAllClassifications()
  },[])
  return (
      <form className='bg-yellow-400 h-100 w-100 flex flex-col justify-center items-center overflow-scroll'>

          <p>Name of Product</p>
      <input ref={ProductNameRef} type='text' className='rounded-lg w-[10rem] m-2' placeholder='Name of Product'></input>
          <p>Description</p>
      <textarea ref={ProductDescRef} className='rounded-lg w-[20rem] m-2' placeholder='Description'></textarea>
         
          <p> Classification</p>
      <select ref={ClassificationRef}  className='rounded-lg w-[10rem] m-2' placeholder='Classification'>
        {
          ClassesState.map(Fdata=>(
            <option value={Fdata.name}>{Fdata.name}</option>
          ))
        }
      </select>
          <p> Upload image</p>
      <input type="file" name="myfile" ref={inputFileRef}  />
      <div onClick={handleOnClick} className='bg-white w-[5rem] h-50 mt-3 text-center rounded-lg hover:bg-green-300 hover:cusour-pointer cursor-pointer	'><p>Enter</p></div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{}</p>

      </form>
 

  )
}

export default AddProduct
