---
order: "14.9"
title: 美国国家气象局公告
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

标准 APRS 消息格式可用于多种其他应用。例如，在美国，发往通用呼号 NWS-xxxxx 的特殊格式消息用于高亮显示天气警报涉及的地图区域，使用以下格式：

**美国国家气象局公告格式**
```
:NWS-xxxxx:NWS 公告文本
```
- NWS-xxxxx：天气警报的通用呼号
- NWS 公告文本：天气警报的内容

**示例：**
```
:NWS-WARNV:092010z,THUNDER_STORM,AR_ASHLEY,{S9JbA
```
