---
order: "12.2"
title: 数据类型标识符
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

以下 APRS 数据类型标识符用于包含原始数据的天气报告：
- `!` Ultimeter 2000
- `#` Peet Bros U-II
- `$` Ultimeter 2000
- `*` Peet Bros U-II
- `_` 无位置天气数据

此外，在原始数据经过后处理（例如通过插入电台位置信息）的情况下，可以改用四个位置数据类型标识符 `!`、`=`、`/` 和 `@`。在这种情况下，天气报告通过 APRS 数据中的天气符号 `/_` 或 `\_` 来标识。