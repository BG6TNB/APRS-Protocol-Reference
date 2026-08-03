---
order: "12.4"
title: 无位置天气报告
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

来自独立气象站的通用原始天气数据包含在 APRS AX.25 帧的信息字段中：

**无位置天气报告格式**
```
_
时间 MDHM
无位置天气数据
S（APRS 软件类型）
uuuu（气象站单位类型）
```
字节数：1 8 n 1 2-4

**示例：**
```
_10090556c220s004g005t077r000p000P000h50b09900wRSW
```
该报告源自 Radio Shack 气象站数据。