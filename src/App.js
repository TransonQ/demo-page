import React, { useCallback, useState } from "react"
import { Card, Page, Tabs } from "@shopify/polaris"
import Page1 from "./Pages/page1"
import Page2 from "./Pages/page2"
import Page3 from "./Pages/page3"

function App() {
  // tabsContents顺序 === pages顺序
  let tabContents = ["原生+useSelections", "Shopify+useSelections", "三"]
  let pages = [<Page1 />, <Page2 />, <Page3 />]

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
    <Page title='exam' divider>
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
          <Card.Section>{pages[selected]}</Card.Section>
        </Tabs>
      </Card>
    </Page>
  )
}

export default App
