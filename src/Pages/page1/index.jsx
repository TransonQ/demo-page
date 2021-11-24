import { Stack, TextField } from "@shopify/polaris"
import React from "react"
import "./idnex.css"

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
          <div style={{ marginBottom: 4 }}>日期选择-a-time</div>
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
          <div style={{ marginBottom: 4 }}>日期选择-en</div>
          <AntDatePicker size='large' style={datepickToShopify} />
        </Stack.Item>
      </Stack>
      <br />
      <Stack vertical>
        <Stack.Item>
          <div style={{ marginBottom: 4 }}>日期选择-zh</div>
          <RangePicker size='large' style={datepickToShopify} locale={zh} />
        </Stack.Item>
      </Stack>
      <br />
      <Stack vertical>
        <Stack.Item>
          <div style={{ marginBottom: 4 }}>日期选择-time-default-en</div>
          <RangePicker size='large' style={datepickToShopify} locale={undefined} showTime />
        </Stack.Item>
      </Stack>
      <br />
    </>
  )
}

export default DatePickerChoice
