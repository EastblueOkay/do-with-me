import { createContext, useContext } from 'react'
import enUS from './locale/en-US'
import zhCN from './locale/zh-CN'

export type Value = 'zh-CN' | 'en-US' | typeof enUS

const context = createContext<{ locale: Value }>({
  locale: 'en-US',
})

function deepget(
  obj: { [key: string]: string },
  path: string,
  data: { [key: string]: any } = {}
) {
  const props = path.split ? path.split('.') : path
  let lastReference: any = obj

  for (let i = 0, len = props.length; i < len; i += 1) {
    if (lastReference[props[i]] !== undefined) {
      lastReference = lastReference[props[i]]
    }
  }
  if (!lastReference) {
    console.warn(`[i18n]: can't find key ${path}`)
    return ''
  }
  lastReference = lastReference.replace(
    /\{[a-zA-Z][0-9a-zA-Z_]*\}/g,
    (item: string) => {
      const name = item.slice(1, item.length - 1)
      if (!data[name]) return item
      return data[name]
    }
  )
  return lastReference
}

const localeMap = {
  'zh-CN': zhCN,
  'en-US': enUS,
}

export const Provider = context.Provider

export default function useI18n() {
  const { locale } = useContext(context)
  if (!locale) return (d: any) => d
  const localeData = typeof locale === 'string' ? localeMap[locale] : locale
  return (d: string, data?: { [key: string]: any }) => {
    const text = deepget(localeData, d, data) as string
    if (!text) console.warn(`No i18n content found by ${d}`)
    return text
  }
}
