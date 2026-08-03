---
order: "15.4"
title: 定向基站查询
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

定向到单个基站的查询采用 APRS 消息格式（除了它们从不包含消息标识符）。收件人为被查询基站的呼号。

消息文本为查询类型。其后可选地跟随另一个呼号 — 该呼号不需要填充空格，因为它位于数据末尾。

**定向基站查询格式**
```
:Addressee:?QueryType[Callsign]
```
字节数：1 9 1 1 5 0-9

**示例：**
- `:KH2ZVVVVV:?APRSD` — 查询 KH2Z 他直接听到了哪些基站。
- `:KH2ZVVVVV:?APRSHVN0QBF` — 查询在最近 8 小时的每个小时中 N0QBF 被听到的次数。（注意 APRSH 后面呼号中的尾随空格，将呼号填充为 9 个字符）。
- `:KH2ZVVVVV:?APRSM` — 查询 KH2Z 是否有任何未确认或未递送的消息。KH2Z 会回复所有此类消息。
- `:KH2ZVVVVV:?APRSO` — 查询 KH2Z 的 APRS 对象。
- `:KH2ZVVVVV:?APRSP` — 查询 KH2Z 的位置。
- `:KH2ZVVVVV:?APRSS` — 查询 KH2Z 的状态。
- `:KH2ZVVVVV:?APRST` — 查询 KH2Z 到达此处的路由追踪。
- `:KH2ZVVVVV:?PING?` — 使用 PING 替代 APRST 的相同查询。
