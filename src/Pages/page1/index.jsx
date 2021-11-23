import { Card, Page, Stack, TextField, TextStyle } from "@shopify/polaris"
import React, { useEffect } from "react"
import "./idnex.css"
// douyin 时间选择器 & 中英切换
import { DatePicker as DouyinDatePicker } from "@douyinfe/semi-ui"
import en_GB from "@douyinfe/semi-ui/lib/es/locale/source/en_GB"
import zh_CN from "@douyinfe/semi-ui/lib/es/locale/source/zh_CN"
import { LocaleProvider } from "@douyinfe/semi-ui"

// ant 时间选择器
import { DatePicker as AntDatePicker } from "antd"
import "antd/dist/antd.css"
import moment from "moment"

// ant - datepicker 中文-英文(默认) 切换
import "moment/locale/zh-cn"
import zh from "antd/es/date-picker/locale/zh_CN"

const DatePickerChoice = () => {
  // ant 时间范围选择器
  const { RangePicker } = AntDatePicker

  const datepickToShopify = {
    width: "100%", // 自适应撑满 Satck.Item
    padding: "5px 12px", // padding向shopify输入框靠拢,根据实际情况自定义
    borderRadius: 4, // 向shopify靠拢
    border: "1px solid rgba(201, 204, 207, 1)" // shopify颜色变量里面取的
  }

  return (
    <>
      <Stack distribution='fillEvenly'>
        <Stack.Item>
          <TextField label='标题'></TextField>
        </Stack.Item>
        <Stack.Item>
          <TextField label='标题'></TextField>
        </Stack.Item>
      </Stack>
      <br />

      <Stack distribution='fillEvenly'>
        <Stack.Item>
          <h3 style={{ marginBottom: 4 }}>日期选择-a-time</h3>
          <AntDatePicker
            size='large'
            style={datepickToShopify}
            showTime
            defaultPickerValue={moment()}
            onOk={moment => {
              console.log(moment._d.getTime())
            }}
            onChange={(...rest) => {
              console.log("onchange:", rest)
            }}
          />
        </Stack.Item>
        <Stack.Item>
          <h3 style={{ marginBottom: 4 }}>日期选择-en</h3>
          <AntDatePicker size='large' style={datepickToShopify} />
        </Stack.Item>
      </Stack>
      <br />
      <Stack vertical>
        <Stack.Item>
          <h3 style={{ marginBottom: 4 }}>日期选择-zh</h3>
          <RangePicker size='large' style={datepickToShopify} locale={zh} />
        </Stack.Item>
      </Stack>
      <br />
      <Stack vertical>
        <Stack.Item>
          <h3 style={{ marginBottom: 4 }}>日期选择-time-default-en</h3>
          <RangePicker size='large' style={datepickToShopify} locale={undefined} showTime />
        </Stack.Item>
      </Stack>
      <br />
      <Stack distribution='fillEvenly'>
        <Stack vertical>
          <h3 style={{ marginBottom: -14 }}>日期选择-s</h3>
          <LocaleProvider locale={en_GB}>
            <DouyinDatePicker style={{ width: "100%" }} />
          </LocaleProvider>
        </Stack>
        <Stack vertical>
          <h3 style={{ marginBottom: -14 }}>带时间-zh</h3>
          <DouyinDatePicker style={{ width: "100%" }} type='dateTime' />
        </Stack>
      </Stack>
      <br />
    </>
  )
}

export default DatePickerChoice
