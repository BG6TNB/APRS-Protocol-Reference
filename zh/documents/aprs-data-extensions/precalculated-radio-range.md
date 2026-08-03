---
order: "7.5"
title: 预先计算的无线电距离
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

7 字节的 RNGrrrr 数据扩展允许用户传输预先计算的全向无线电距离，其中 `rrrr` 是以英里为单位的距离（带前导零）。

例如：

```
RNG0050
```

表示无线电距离为 50 英里。

APRS 可以使用此值在电台周围绘制距离圈。
