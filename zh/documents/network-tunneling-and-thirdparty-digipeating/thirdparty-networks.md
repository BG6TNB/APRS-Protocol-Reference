---
order: "17.1"
title: 第三方网络
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

APRS 提供了一种机制，用于格式化要通过第三方（即非 AX.25）网络传输的数据包，例如互联网、以太网 LAN 或直接有线连接。

这些网络不理解 APRS 源、目的地址和数字中继器（digipeater）地址，因此有必要将它们作为数据发送，并随同原始数据一起传输。
