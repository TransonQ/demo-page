import { Checkbox } from "@shopify/polaris"
import { useSelections } from "ahooks"
import React, { useEffect, useMemo, useState } from "react"

const Page2 = () => {
  // 固定数据
  const [hideOdd, setHideOdd] = useState(false)
  const list = useMemo(() => {
    if (hideOdd) {
      return [2, 4, 6, 8]
    }
    return [1, 2, 3, 4, 5, 6, 7, 8]
  }, [hideOdd])
  const {
    selected,
    allSelected,
    isSelected,
    toggle,
    toggleAll,
    partiallySelected // 是否是半选
  } = useSelections(list, [1])
  // 默认选中索引为一的选择框 👆

  useEffect(() => {
    console.log(selected)
  }, [selected])

  return (
    <>
      <Checkbox checked={allSelected} onChange={toggleAll} />
      全选按钮
      <br />
      <Checkbox type='checkbox' checked={hideOdd} onChange={() => setHideOdd(v => !v)} />
      hideOdd
      <br />
      {list.map(o => {
        return (
          <>
            <div key={o} htmlFor={o} style={{ color: isSelected(o) ? "red" : "" }}>
              <Checkbox label={`蒙版之类的${o}`} checked={isSelected(o)} onChange={() => toggle(o)} />
            </div>
          </>
        )
      })}
    </>
  )
}

export default Page2
