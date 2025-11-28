"use client";

import Image from 'next/image'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      setTime(timeString)
    }

    updateTime() // Initial call
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className='flex flex-col md:flex-row bg-white rounded-[20px]'>
        <div className='flex flex-col md:flex-row w-full md:justify-between items-center px-[12px] md:px-[24px] py-[24px]'>

          <div className='text-[18px] px-[12px] md:px-0 mb-2 md:mb-0 font-medium text-[#3D3936]'>People</div>
          <div className='flex items-center gap-[12px]'>

            <div title="Clock" className='flex items-center rounded-[40px] border border-[#3D39361A] py-[4px] pl-[12px] pr-[2px] hover:scale-105 transition-transform cursor-default'>
              <Image src="/Navbar/Clock.svg" alt="Clock" width={24} height={24} />
              <p className='text-[#3D3936] min-w-[60px] pl-[8px] pr-[16px]'>{time || "00:00:00"}</p>
              <Image src="/Navbar/Note.svg" alt="Note" width={40} height={40} className="cursor-pointer pr-1 hover:scale-110 transition-transform" title="Notes" />
            </div>
            <div title="Save" className="hover:scale-105 transition-transform cursor-pointer"> <Image src="/Navbar/Save.svg" alt="Save" width={48} height={48} /></div>
            <div title="Profile" className="hover:scale-105 transition-transform cursor-pointer"> <Image src="/Navbar/ProfilePic.svg" alt="Profile" width={48} height={48} /></div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Navbar