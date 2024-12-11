import React from 'react'
import { IoSearchSharp, IoClose } from 'react-icons/io5'

const BarHeader: React.FC = () => {
  return (
    <div className='h-[75px] flex items-center justify-center'>
      <div className='flex items-center justify-center gap-2 bg-base-border py-[7px] px-3 rounded-full'>
        <IoSearchSharp size={20} className='opacity-50' />
        <input type="text" className='bg-transparent outline-none' />
        <IoClose size={23} className='opacity-50 hover:opacity-90 cursor-pointer' />
      </div>
    </div>
  )
}

export default BarHeader