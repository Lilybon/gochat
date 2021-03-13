import { avatars, names, images, messages, stickers, stickerNames, recentCallStatus } from './data'
import { getRandomNumber, pickFromArray } from './random'
import { Contact, Chatroom, Option, Sticker, RecentCall } from './types'

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
        avatar: pickFromArray(avatars),
        lastSeen: 'last seen 7 minutes ago'
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
      imageUrl: pickFromArray(stickers),
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
        avatar: pickFromArray(avatars),
        unread: getRandomNumber(100),
        lastMessage: {
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

export const getRecentCalls = (): Promise<Array<RecentCall>> =>
  Promise.resolve(
    Array.from(Array(8), (_, index) => ({
      id: index,
      status: pickFromArray(recentCallStatus),
      time: '2/8/21',
      contact: {
        avatar: pickFromArray(avatars),
        name: pickFromArray(names)
      }
    }))
  )