export const getCountryOptions = () => Promise.resolve(new Array(50).fill(0).map((_, i) => ({
  name: `country-${i}`,
  value: `+ ${i}`
})))

export const getContacts = () => Promise.resolve(new Array(50).fill(0).map((_, i) => ({
 id: i,
 name: '123',
 last_seen: new Date()
})))