---
order: "20.8"
title: Symbol Precedence
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

APRS packets should not contain more than one symbol. However, it is conceivably possible to (erroneously) construct a packet containing up to three different symbols.

For example:

| Source Address SSID | Destination Address | Information Field |
|---|---|---|
| G3NRW-7 GPSMV |  | !0123.45N/01234.56Wj |
| Symbol: Small Aircraft | Symbol: Car | Symbol: Jeep |

In such a situation:

- The symbol in the Information field takes precedence over any other symbol.
- If there is no symbol in the Information field, the symbol in the Destination Address takes precedence over the symbol in the Source Address SSID.
