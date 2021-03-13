export interface Contact {
  id: number,
  chatroom: Partial<Chatroom>,
  name: string,
  avatar: string,
  last_seen: string
}

export interface Chatroom {
  id: number,
  name: string,
  avatar: string,
  last_message: LastMessage
}

interface LastMessage {
  type: string,
  sender: string,
  content: string,
  time: string
}

export interface Option {
  name: string
  value: string
}

export interface Message {
  name: string,
  type: string,
  content?: string,
  imageUrl?: string,
  time: Date
}

export interface Sticker {
  id: number,
  name: string,
  count: number
}