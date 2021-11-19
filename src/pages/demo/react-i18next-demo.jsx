import React from "react"
import { useTranslation } from "react-i18next"

export const Reacti18nextDemo = () => {
  const { t, i18n } = useTranslation()

  return (
    <div className='App'>
      <button
        onClick={() => {
          i18n.changeLanguage("zh")
        }}
      >
        切换中文
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage("en")
        }}
      >
        切换英文
      </button>
      <h1>{t("home.hot_recommended")}</h1>
      <h2>{t("header.register")}</h2>
    </div>
  )
}
