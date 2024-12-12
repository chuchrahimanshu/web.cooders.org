import React from 'react'
import ChatInput from './ChatInput'
import ChatHeader from './ChatHeader'
import Chat from './Chat'

const MessagingChat: React.FC = () => {
  return (
    <section className='w-full flex flex-col justify-between'>
        <div className='h-full'>
            <ChatHeader />
            <Chat />
        </div>
        <ChatInput />
    </section>
  )
}

export default MessagingChat