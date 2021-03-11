import { names, images, messages } from './data'
import { getRandomNumber, pickFromArray } from './random'
import { Contact, Chatroom, Option } from './types'

export const getCountryOptions = (): Array<Option> => 
  new Array(50)
    .fill(0)
    .map((_, i) => ({
      name: `country-${i}`,
      value: `+ ${i}`
    }))

export const getContacts = (): Array<Contact> =>
  names
    .map(name => ({
      id: getRandomNumber(100),
      chatroom: {
        id: 100 + getRandomNumber(100)
      },
      name,
      avatar: pickFromArray(images),
      last_seen: 'last seen 7 minutes ago'
    }))

export const getChatroomMessages = (messageLength = 40) => {
  const generators = [
    () => ({
      type: 'message',
      name: pickFromArray(names),
      content: pickFromArray(messages),
      time: new Date()
    }),
    () => ({
      type: 'time-bar',
      time: new Date()
    }),
    () => ({
      type: 'image',
      name: pickFromArray(names),
      imageUrl: pickFromArray(images),
      time: new Date()
    }),
    () => ({
      type: 'sticker',
      name: pickFromArray(names),
      imageUrl: 'https://en.meming.world/images/en/thumb/e/e2/Crying_Cat_with_paw_up.jpg/300px-Crying_Cat_with_paw_up.jpg',
      time: new Date()
    })
  ]
  return Array.from(Array(messageLength), () => pickFromArray(generators)())
}

export const getChatrooms = (): Array<Chatroom> =>
  names
    .map((name, i) => ({
      id: i,
      name,
      avatar: pickFromArray(images),
      unread: getRandomNumber(100),
      last_message: {
        type: '',
        sender: 'Lilybon',
        content: '123',
        time: '10:30 PM'
      }
    }))