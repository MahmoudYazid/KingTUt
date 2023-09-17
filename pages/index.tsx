import Image from 'next/image'
import NavBar from '../components/NavBar'
import ContactUs from '../components/ContactUs'

import ShopBody from '../components/ShopBody'


export default function Home() {
  return (
    <div className='bg-white min-h-screen min-w-100 flex  flex-col  '>
      <NavBar></NavBar>
      <ShopBody></ShopBody>

   </div>
  )
}
