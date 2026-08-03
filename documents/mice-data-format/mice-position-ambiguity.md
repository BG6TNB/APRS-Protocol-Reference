---
order: "10.19"
title: Mic-E Position Ambiguity
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

As mentioned in Chapter 6 (Time and Position Formats), a station may reduce the precision of its position by introducing position ambiguity. This is also possible in Mic-E data format.

The position ambiguity is specified for the latitude (in the destination address). The same degree of ambiguity will then also apply to the longitude.

For example, if the destination address is `T4SQZZ`, the last two digits of the latitude are ambiguous (represented by `ZZ`). Then, if the longitude data in the Information field is `(_f`, as in the above example, the last two digits of the computed longitude will be ignored — that is, the longitude will be 112 degrees 7 minutes.
