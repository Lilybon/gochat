export const getCountryOptions = () => Promise.resolve(new Array(50).fill(0).map((_, i) => ({
  name: `country-${i}`,
  value: `+ ${i}`
})))

export const getContacts = () => Promise.resolve(new Array(5).fill(0).map((_, i) => ({
 id: i,
 name: 'Cry cat',
 avatar: 'https://en.meming.world/images/en/thumb/e/e2/Crying_Cat_with_paw_up.jpg/300px-Crying_Cat_with_paw_up.jpg',
 last_seen: 'last seen 7 minutes ago'
})))