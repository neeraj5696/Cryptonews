import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
function
  App() {
  const [dj, setDj] = useState('+');
  const [he, setHe] = useState('-')
  const djj = () => { setDj(dj = '-') }

  return (
    <div>
      <div className='bg-white-500  m-4'>


        <div className='Main_icon main_menu flex '>
          <a href="/">
            <img className=' m-x pl-1  h-10 w-auto ' src="https://cimg.co/p/crypto-news-logo-full.svg" alt="Crypto News" />
          </a>

          <div className='main_menu md:flex  ml-20 my-2 hidden md:visible '>
            <a href='/' >All</a>
            <span className='py-1'><FiMenu /></span>
          </div>
        </div>


        <div className='md:flex'>
          <a href='/' >News{dj}</a>
          <div className='cursor-pointer' onClick={djj} >Exclusive{dj}</div>
          <div>Videos{dj}</div>
          <div>Guides{dj}</div>
          <div>Exchange{dj}</div>
          <div>Poscast{dj}</div>
          <div>Tools{dj}</div>
          <div>Recommended{dj} </div>

        </div>





        <hr className="h-px my-6 bg-gray-300 border-0 dark:bg-gray-700 bold"></hr>

      </div>
    </div>
  )
}

export default App
