import React from 'react'
import BarHeader from './BarHeader'
import BarMenu from './BarMenu'
import BarUsers from './BarUsers'

const MessagingBar: React.FC = () => {
  return (
    <section className='w-[400px] border-r border-r-base-border'>
        <BarHeader />
        <BarMenu />
        <BarUsers />  
    </section>
  )
}

export default MessagingBar