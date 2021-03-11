export const getRandomNumber = (n: number): number => Math.floor(Math.random() * n)

export const pickFromArray = <T>(list: Array<T>): T  => {
  let index = getRandomNumber(list.length)
  return list[index]
}