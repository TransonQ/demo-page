import { useSelections } from "ahooks"
import React, { useEffect, useMemo, useState } from "react"

const Page1 = () => {
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
      <input type='checkbox' className='all_checked' checked={allSelected} onChange={toggleAll} />
      全选按钮
      <br />
      <input type='checkbox' checked={hideOdd} onChange={() => setHideOdd(v => !v)} />
      hideOdd
      <br />
      {list.map(o => {
        return (
          // react 不能使用关键字 for, 用htmlFor替换
          <div key={o}>
            <label htmlFor={o} style={{ color: isSelected(o) ? "red" : "" }}>
              <input id={o} type='checkbox' checked={isSelected(o)} onChange={() => toggle(o)} />
              蒙版之类的{o}
            </label>
          </div>
        )
      })}
    </>
  )
}

export default Page1
