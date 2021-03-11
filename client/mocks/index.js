const names = ['Snow', 'Jerry', 'Kayne', 'Leon', 'Willy', 'Lay', 'Jason', 'Tim', 'Dan', 'Hiro', 'Brian']
const images =[
  'https://en.meming.world/images/en/thumb/e/e2/Crying_Cat_with_paw_up.jpg/300px-Crying_Cat_with_paw_up.jpg',
  'https://media.whatscap.com/4c5/d86/4c5d86b5848e0d03074c7427e82c22f20bbe459a_n.png',
  'https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440.jpg',
  'https://dvblobcdnjp.azureedge.net//Content/Upload/Popular/Images/2017-06/e99e6b5e-ca6c-4c19-87b7-dfd63db6381a_m.jpg'
]
const messages = [
  '好喔', '這個是後端的問題', 'thx', '/external/manage/user/balance', '是不是有人把agnet.username跟agent.id改掉了', '這麼酷= = 好 我再改看看',
  `
    referral_activity
    https://staging-api.h9339.com/v2/member/website/home-page/?platform=pc
  `,
  `
    類別關閉的WS通知格式:
    {
      type:"external-category-updated", data:[{code:"ag", display_name:"AG視訊", enabled: true...}, {code:"ag", display_name:"AG捕魚", enabled: true...}]
    }
  `,
  `
    curl 'https://staging-api.h9339.com/v1/manage/dashboard/notify_sound/' \
    -H 'authority: staging-api.h9339.com' \
    -H 'accept: application/json, text/plain, */*' \
    -H 'authorization: Bearer 526ab484d2a3f915d13f1f0b749d11ec' \
    -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36' \
    -H 'origin: https://staging-hedwig.h9339.com' \
    -H 'sec-fetch-site: same-site' \
    -H 'sec-fetch-mode: cors' \
    -H 'sec-fetch-dest: empty' \
    -H 'referer: https://staging-hedwig.h9339.com/' \
    -H 'accept-language: zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7' \
    --compressed
  `
]

const pickOne = list => {
  let max = list.length
  let randomIdx = Math.floor(Math.random() * max)
  return list[randomIdx]
}

export const getCountryOptions = () => 
  new Array(50)
    .fill(0)
    .map((_, i) => ({
      name: `country-${i}`,
      value: `+ ${i}`
    }))

export const getContacts = () =>
  names
    .map(name => ({
      id: Math.floor(Math.random() * 100),
      chatroom: {
        id: Math.floor(Math.random() * 100)
      },
      name,
      avatar: pickOne(images),
      last_seen: 'last seen 7 minutes ago'
    }))

export const getChatroomMessages = () => {
  let result = []
  const length = 40
  const generator = {
    message: () => {
      return {
        name: pickOne(names),
        content: pickOne(messages),
        time: new Date()
      }
    },
    'time-bar': () => {
      return {
        time: new Date()
      }
    },
    image: () => {
      return {
        name: pickOne(names),
        imageUrl: pickOne(images),
        time: new Date()
      }
    },
    sticker: () => {
      return {
        name: pickOne(names),
        imageUrl: 'https://en.meming.world/images/en/thumb/e/e2/Crying_Cat_with_paw_up.jpg/300px-Crying_Cat_with_paw_up.jpg',
        time: new Date()
      }
    }
  }
  const types = Object.keys(generator)
  for (let i = 0; i < length; i++) {
    let type = pickOne(types)
    let message = generator[type]()
    message.type = type
    result.push(message)
  }
  return result
}

export const getChatrooms = () =>
  names
    .map((name, i) => ({
      id: i,
      name,
      avatar: pickOne(images),
      unread: Math.floor(Math.random() * 100),
      last_message: {
        type: '',
        sender: 'Lilybon',
        content: '123',
        time: '10:30 PM'
      }
    }))