---
order: "17.5"
title: 通过互联网发送消息的示例
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

**场景：**

- WB4APR-14 想通过互联网向 G3NRW 发送一条消息。
- WB4APR-14 最近的 Internet 网关是 K4HG，可通过 RELAY,WIDE 路径到达。
- G3NRW 最近的 Internet 网关是 G9RXG。

**过程：**

- WB4APR-14 以正常方式构建一个消息数据包，包含：
```
:G3NRW **VVVVVVVV** :Hi Ian{001
```
- WB4APR-14 通过其 UNPROTO 路径 RELAY,WIDE 发送该数据包。
- Internet 网关 K4HG 恰好从路径中的 RELAY 数字中继器接收到此数据包。
- K4HG 构建一个新的数据包，其中包含源路径和原始消息：
```
WB4APR-14>APRS,RELAY*,WIDE::G3NRW **VVVVVVVV** :Hi Ian{001
```
- K4HG 将此数据包（使用 telnet）发送到互联网上的 APRServer。
- 全球所有连接到 APRServe 网络的 Internet 网关（包括 G9RXG）都会接收到该数据包。
- G9RXG 将该数据包转换为第三方数据包：
```
}WB4APR-14>APRS,RELAY,TCPIP,G9RXG*::G3NRW **VVVVVVVV** :Hi Ian{001
```

注意，WIDE 数字中继器已从头中剥离，因为它未被使用。

- G9RXG 通过本地 APRS 网络发送该数据包。
- G3NRW 接收到该数据包，剥离第三方头，并发现数据包中包含给他的消息。然后，G3NRW 从头中确定确认应发送回 WB4APR-14。
