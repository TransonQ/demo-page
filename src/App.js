import React, { useCallback, useState } from "react"
import { Card, Page, Tabs } from "@shopify/polaris"
import SyncRecoilAtom from "./Pages/page1"

function App() {
  // tabsContents顺序 === pages顺序
  let tabContents = ["时间选择器"]
  let pages = [<SyncRecoilAtom />]

  const tabs = tabContents.map(tab => {
    return {
      id: `_id_${tab}`,
      content: tab,
      panelID: `_panelID_${tab}`
    }
  })
  // tabs选择处理函数和状态
  const [selected, setSelected] = useState(0)
  const handleTabChange = useCallback(selectedTabIndex => setSelected(selectedTabIndex), [])

  return (
    <Page title='example' divider narrowWidth>
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
          <Card.Section title={tabs[selected].content + "内容如下:"}>{pages[selected]}</Card.Section>
        </Tabs>
      </Card>
    </Page>
  )
}

export default App
