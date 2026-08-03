---
order: "14.3"
title: 消息拒绝
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

如果站点无法接受消息，它可以发送 rej 消息代替 ack 消息。

**消息拒绝格式**
```
:收件人:rejxxxxx
```
- 收件人：9 个字符的字段
- rej：字面字符串
- xxxxx：正在拒绝的消息编号（最多 5 个字符）

**示例：**
```
:KB2ICI-14:rej003
```
