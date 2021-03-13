import { RecentCallStatusType } from './types'

export const names: Array<string> = [
  'Snow',
  'Jerry',
  'Kayne',
  'Leon',
  'Willy',
  'Lay',
  'Jason',
  'Tim',
  'Dan',
  'Hiro',
  'Brian'
]

export const avatars: Array<string> = [
  'https://i.pinimg.com/originals/6b/92/83/6b92835acb70da7f8c86b86b981eedf8.jpg',
  'https://onepage.nownews.com/sites/default/files/styles/crop_thematic_mobile_banner_img/public/2021-01/FotoJet%20-%202021-01-26T182735.400.jpg?h=33077bfc&itok=BSSsvzfm',
  'https://i.imgflip.com/2k4wr6.jpg',
  'https://pbs.twimg.com/media/ERHyxgXU8AEhPjY.jpg'
]

export const stickers: Array<string> = [
  'https://lh3.googleusercontent.com/proxy/E-He4JADI1m4PoqPbsGqIXVkseL2vsrhWqG6fZAWaDOosMtyZuOmmAOp_pJDSd5lmVbU4WF0Kqh67hI7xiGNaxtMXQxjW-TMVNImOalL9iOR5Dkd8k72uQ'
]

export const images: Array<string> = [
  'https://en.meming.world/images/en/thumb/e/e2/Crying_Cat_with_paw_up.jpg/300px-Crying_Cat_with_paw_up.jpg',
  'https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440.jpg',
  'https://dvblobcdnjp.azureedge.net//Content/Upload/Popular/Images/2017-06/e99e6b5e-ca6c-4c19-87b7-dfd63db6381a_m.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QB_clk81f4Z1CQoUb7zbWjt62tQPfbE2HQ&usqp=CAU',
  'https://media.whatscap.com/4c5/d86/4c5d86b5848e0d03074c7427e82c22f20bbe459a_n.png',
  'https://s3.amazonaws.com/rapgenius/1362713678_black-kid-crying-tear.gif'
]

export const messages: Array<string> = [
  'thx',
  '好喔',
  'ㄏㄏ',
  '恩恩',
  '喔喔',
  '這個是後端的問題',
  '我又被套牢了 哭哭',
  '/external/manage/user/balance',
  '是不是有人把agnet.username跟agent.id改掉了',
  '這麼酷= = 好 我再改看看',
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

export const stickerNames: Array<string> = [
  '杰哥不要啦',
  'igotallday_fans',
  'Peepo pepe',
  'Bobby Hill',
  'PEPEtopAnim'
]

export const recentCallStatus: Array<RecentCallStatusType> = [
  'outgoing',
  'missed'
]