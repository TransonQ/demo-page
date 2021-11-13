import { atom, selector } from "recoil"

export const countInitState = atom({
  key: "countInitState",
  default: 0
})

export const powerInitState = selector({
  key: "powerInitState",
  get: ({ get }) => {
    const count = get(countInitState)
    return count ** 2
  }
})
