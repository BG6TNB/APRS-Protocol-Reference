---
order: "4.9"
title: 用 AX.25 源地址 SSID 指定符号
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

AX.25 源地址字段包含发起电台的呼号和 SSID。如果 SSID 为 –0，APRS 不会对其进行任何特殊处理。

但是，如果源地址 SSID 为非零，APRS 将其解释为显示图标。此功能仅适用于独立跟踪器，在这些跟踪器中没有其他方法可以指定显示符号或目的地址（例如 MIM 跟踪器或 NMEA 跟踪器）。

更多信息请参见第 20 章：APRS 符号。