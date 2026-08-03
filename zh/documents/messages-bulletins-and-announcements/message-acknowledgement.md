---
order: "14.2"
title: 消息确认
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

消息确认类似于消息，不同之处在于消息文本字段仅包含字母 ack，后跟正在确认的消息编号。

**消息确认格式**
```
:收件人:ackxxxxx
```
- 收件人：9 个字符的字段
- ack：字面字符串
- xxxxx：正在确认的消息编号（最多 5 个字符）

**示例：**
```
:KB2ICI-14:ack003
```
