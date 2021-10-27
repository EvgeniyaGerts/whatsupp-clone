import React from 'react'

const ChatsList: React.FC = () => (
  <div>
    <ul>
      <li>
        <img
          src='https://randomuser.me/api/portraits/thumb/men/1.jpg'
          alt='Profile pic'
        />
        <div>Eva Gerz</div>
        <div>You on your way?</div>
        <div>10:25</div>
      </li>
      <li>
        <img
          src='https://randomuser.me/api/portraits/thumb/men/2.jpg'
          alt='Profile pic'
        />
        <div>Pirozhok Tolstoy</div>
        <div>Mrrrrrrrr</div>
        <div>16: 02</div>
      </li>
    </ul>
  </div>
)

export default ChatsList
