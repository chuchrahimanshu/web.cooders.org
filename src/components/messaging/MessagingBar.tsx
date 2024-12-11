import React from 'react'
import BarHeader from './BarHeader'
import BarSearch from './BarSearch'
import BarUsers from './BarUsers'

const MessagingBar: React.FC = () => {
  return (
    <section className='w-[400px] bg-green-200'>
        <BarHeader />
        <BarSearch />
        <BarUsers />  
    </section>
  )
}

export default MessagingBar