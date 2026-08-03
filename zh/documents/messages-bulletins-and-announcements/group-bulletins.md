---
order: "14.8"
title: 组公告
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

公告可以发送到公告组。公告组地址由字母 BLN 后跟一位数字组公告标识符，再跟组名称（最长 5 个字符，用填充空格填充至 5 个字符）组成。

**组公告格式**
```
:BLNnGROUP:组公告文本
```
- BLN：字面字符串
- n：一位数字组公告标识符
- GROUP：组名称（最多 5 个字符，已填充）
- 组公告文本：最多 67 个字符

**示例：**
```
:BLN4WXVVV:Stand by your snowplows
```
