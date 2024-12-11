import React from 'react'
import { MessagingBar, MessagingChat } from '../../components'

const Messaging: React.FC = () => {
  return (
    <section className='flex h-full w-full bg-overlay-background'>
        <MessagingBar />
        <MessagingChat />
    </section>
  )
}

export default Messaging