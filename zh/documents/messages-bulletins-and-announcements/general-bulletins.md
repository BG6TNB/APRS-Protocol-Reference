---
order: "14.6"
title: 通用公告
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

通用公告是指收件人由字母 BLN 后跟一位数字公告标识符，再加 5 个填充空格组成的消息。通用公告通常每小时发送几次，持续数小时，通常包含时效性信息（如天气状况）。

公告文本最长可达 67 个字符，可以包含除 | 或 ~ 之外的任何可打印 ASCII 字符。

**通用公告格式**
```
:BLNnVVVVV:公告文本
```
- BLN：字面字符串
- n：一位数字公告标识符
- VVVVV：5 个填充空格
- 公告文本：最多 67 个字符

**示例：**
```
:BLN3VVVVV:Snow expected in Tampa RSN
```
