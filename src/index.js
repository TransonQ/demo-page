import React from "react"
import ReactDOM from "react-dom"
// import "./index.css"
import App from "./App"
// Recoil提供全局状态维护
import { RecoilRoot } from "recoil"
// 以下这些只是名叫shopify的UI框架提供的外层组件
import { AppProvider } from "@shopify/polaris"
import en from "@shopify/polaris/locales/en.json"
import "@shopify/polaris/build/esm/styles.css"

ReactDOM.render(
  <RecoilRoot>
    <AppProvider i18n={en} theme={{ colorScheme: "light" }}>
      <App />
    </AppProvider>
  </RecoilRoot>,
  document.getElementById("root")
)
