import React from 'react'
import { chats } from '../../db'
import moment from 'moment'

const ChatsList: React.FC = () => (
  <div>
    <ul>
      {chats.map(({ id, picture, name, lastMessage }) => {
        console.log(lastMessage)
        return (
          <li key={id}>
            <img src={picture} alt='Profile pic' />
            <div>{name}</div>
            <div>{lastMessage?.content}</div>
            <div>{moment(lastMessage?.createdAt).format('HH:mm')}</div>
          </li>
        )
      })}
    </ul>
  </div>
)

export default ChatsList
