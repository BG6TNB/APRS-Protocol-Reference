---
order: "16.2"
title: 带有 Maidenhead 网格定位器的状态报告
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Maidenhead 网格定位器可以是 4 或 6 个字符长，并且必须紧跟在 `>` 数据类型标识符之后。

所有字母必须以大写形式发送。字母可以以大写或小写形式接收。

符号表标识符（Symbol Table Identifier）和符号编码（Symbol Code）位于定位器之后。

如果报告还包含状态文本，文本的第一个字符必须是空格。

带有 Maidenhead 定位器的状态报告不能包含时间戳。

## 状态报告格式 — 带有 Maidenhead 网格定位器

```
>   Maidenhead Locator   Sym Table ID   Symbol Code   Status Text (以空格开头)
        GG nn gg                              (最多 54 个字符)
字节数: 1      2 2 2                1              1                  1-54
```

示例
```
>IO91SX/G
>IO91/G
>IO91SX/-  My house                                                    (注意状态文本开头的空格)。
>IO91SX/-V^B7 Meteor Scatter beam heading = 110 degrees, ERP = 490 watts.
```
