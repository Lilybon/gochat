import { names, images, messages, stickerNames } from './data'
import { getRandomNumber, pickFromArray } from './random'
import { Contact, Chatroom, Option, Sticker } from './types'

export const getCountryOptions = (): Promise<Array<Option>> =>
  Promise.resolve(
    Array.from(Array(50), (_, index) => ({
      name: `country-${ index }`,
      value: `+ ${ index }`
    }))
  )

export const getContacts = (): Promise<Array<Contact>> =>
  Promise.resolve(
    names
      .map((name, index) => ({
        id: index,
        chatroom: {
          id: index
        },
        name,
        avatar: pickFromArray(images),
        last_seen: 'last seen 7 minutes ago'
      }))
  )

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
  return Promise.resolve(Array.from(Array(messageLength), () => pickFromArray(generators)()))
}

export const getChatrooms = (): Promise<Array<Chatroom>> =>
  Promise.resolve(
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
  )

export const getStickers = (): Promise<Array<Sticker>> =>
  Promise.resolve(
    Array.from(Array(5), (_, index) => ({
      id: index,
      name: pickFromArray(stickerNames),
      count: getRandomNumber(100)
    }))
  )