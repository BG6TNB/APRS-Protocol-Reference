---
order: "6.9"
title: NMEA 数据
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

APRS 识别符合 NMEA 0183 Version 2.0 规范的原始 ASCII 数据字符串，这些字符串来自 GPS 和 LORAN 接收机等导航设备。建议 APRS 电台至少解释以下 NMEA 接收语句类型：

| 语句 | 描述 |
| :--- | :--- |
| GGA | GPS 定位数据 |
| GLL | 地理位置、纬度/经度数据 |
| RMC | 推荐最小特定 GPS/传输数据 |
| VTG | 速度和航迹数据 |
| WPT | 航路点位置 |
