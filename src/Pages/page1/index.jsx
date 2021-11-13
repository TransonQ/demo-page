import { Button, DisplayText, Stack } from "@shopify/polaris"
import React from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { countInitState, powerInitState } from "./state"

const SyncRecoilAtom = () => {
  // hooks用法: 只需要关注依赖项
  // const [count, setCount] = useRecoilState( atom或者selector )
  // const countPower = useRecoilValue( atom或者selector )
  // const setCount = useSetRecoilState( atom或者selector )

  const [count, setCount] = useRecoilState(countInitState)
  const countPower = useRecoilValue(powerInitState)

  return (
    <>
      <Stack distribution='center'>
        <DisplayText>t: {count}</DisplayText>
      </Stack>
      <Stack distribution='center'>
        <DisplayText>t²:{countPower}</DisplayText>
      </Stack>
      <Stack distribution='center'>
        <Button
          onClick={() => {
            setCount(pre => pre - 1)
          }}
        >
          -
        </Button>
        <Button
          onClick={() => {
            setCount(pre => pre + 1)
          }}
        >
          +
        </Button>
      </Stack>
    </>
  )
}

export default SyncRecoilAtom
