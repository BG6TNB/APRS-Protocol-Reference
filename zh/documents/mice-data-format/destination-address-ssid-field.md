---
order: "10.6"
title: 目的地址 SSID 字段
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Mic-E 数据包中目的地址字段的 SSID 被编码以指定传统的 digipeater VIA 路径（包含在 AX.25 帧的 Digipeater 地址字段中），或 15 种通用 APRS digipeater 路径之一。参见第 4 章：AX.25 目的地址和源地址字段中的 APRS 数据。

目的地址中的 SSID 字段（即第 7 个地址字节）编码如下：

目的地址 SSID 中的 APRS Digipeater 路径

| SSID | 路径 | SSID | 路径 |
| --- | --- | --- | --- |
| -0 | 使用 VIA 路径 | -8 | 北路径 |
| -1 | WIDE1-1 | -9 | 南路径 |
| -2 | WIDE2-2 | -10 | 东路径 |
| -3 | WIDE3-3 | -11 | 西路径 |
| -4 | WIDE4-4 | -12 | 北路径 + WIDE |
| -5 | WIDE5-5 | -13 | 南路径 + WIDE |
| -6 | WIDE6-6 | -14 | 东路径 + WIDE |
| -7 | WIDE7-7 | -15 | 西路径 + WIDE |
