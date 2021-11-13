import React from "react"
import ReactDOM from "react-dom"
// import "./index.css"
import App from "./App"
import { RecoilRoot } from "recoil"
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
