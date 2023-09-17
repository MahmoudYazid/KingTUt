import { change } from '@/Store/slicer'
import axios from 'axios'
import React , {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'

export default function KeyWords() {
  const [AllKeyWords, SetKeyWords] = useState([])
  const dispatch = useDispatch()

  const getAllKeyWords = () => {
    const response = axios.get('http://localhost:3000/api/GetAllKeyWords').then((res_) => {
      SetKeyWords(res_.data.res)

    })
  }
  const ChangeSearchedData = (Taget_) => {
    axios.get('http://localhost:3000/api/SearchOnKeyWord', {
      headers: {
        word_: Taget_
      }
    }).then((res_) => {
      console.log(res_.data.res)
      if (res_.data.res=='Null' || res_.data.res== null){
      dispatch(change([]));
      }
      else{
        dispatch(change(res_.data.res));

      }

    })

  }
  useEffect(()=>{
    getAllKeyWords()
  },[])
  return (
      <div className=' invisible md:visible   text-center bg-white text-white min-h-100 min-w-100 flex-col border-r-[1px] border-black border-h-80 flex justify-start content-center item-center '>
          <p className=' text-black  mt-3 border-black underline'>Key Words</p>
        {
        AllKeyWords.map((Fdata)=>(
          <p className=' text-black hover:text-sky-400 hover:cursor-pointer mt-3  h-fit' onClick={() => ChangeSearchedData(Fdata.word)}>{Fdata.word}</p>

        ))

        }
        </div>
      
  )
}
