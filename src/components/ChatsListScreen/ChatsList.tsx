import React from 'react'
import moment from 'moment'

import { chats } from '../../db'
import {
  Container,
  StyledList,
  StyledListItem,
  ChatPicture,
  ChatInfo,
  ChatName,
  MessageContent,
  MessageDate,
} from './ChatsList.styled'

const ChatsList: React.FC = () => (
  <Container>
    <StyledList>
      {chats.map(({ id, picture, name, lastMessage }) => {
        console.log(lastMessage)
        return (
          <StyledListItem key={id}>
            <ChatPicture src={picture} alt='Profile pic' />
            <ChatInfo>
              <ChatName>{name}</ChatName>
              <MessageContent>{lastMessage?.content}</MessageContent>
              <MessageDate>
                {moment(lastMessage?.createdAt).format('HH:mm')}
              </MessageDate>
            </ChatInfo>
          </StyledListItem>
        )
      })}
    </StyledList>
  </Container>
)

export default ChatsList
