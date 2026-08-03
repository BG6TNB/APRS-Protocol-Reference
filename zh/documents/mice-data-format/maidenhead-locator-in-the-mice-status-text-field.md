---
order: "10.22"
title: Mic-E 状态文本字段中的 Maidenhead 定位器
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Mic-E 状态文本字段可以包含 Maidenhead 定位器。

如果定位器后面跟着纯文本注释，文本的第一个字符必须是空格。例如：

```
IO91SX/G  Hello world (来自 Mic-E 或 PIC-E)
>IO91SX/G  Hello world (来自 Kenwood TH-D7)
]IO91SX/G  Hello world (来自 Kenwood TM-D700)
```

`(/G` 是网格定位器符号。
