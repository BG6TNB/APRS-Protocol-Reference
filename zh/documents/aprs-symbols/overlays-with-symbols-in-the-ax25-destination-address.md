---
order: "20.6"
title: AX.25 目标地址中带叠加的符号
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

如果 `GPSxyz`、`SPCxyz` 或 `SYMxyz` 地址中的 `z` 字符不是空格，它指定一个字母数字叠加字符，范围为 `0`-`9` 或 `A`-`Z`。

叠加只能与标记有 `[可叠加]` 图例的备用符号表中的符号一起使用。

例如，如果要为 "汽车" 图标叠加数字 "3"，目标地址将为 `GPSNV3`。

但是，即使地址支持叠加，也不一定需要指定叠加；例如 `GPSNV `。

`GPSCnn` 和 `GPSEnn` 符号不能有叠加。