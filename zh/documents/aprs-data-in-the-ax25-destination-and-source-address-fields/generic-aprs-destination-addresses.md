---
order: "4.2"
title: 通用 APRS 目的地址
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

APRS 使用以下通用信标风格的目的地址：

    AIR* †  ALL*    AP*    BEACON  CQ*     GPS*   DF*
    DGPS*   DRILL*  DX*    ID*     JAVA*   MAIL*  MICE*
    QST*    QTH*    RTCM*  SKY*    SPACE*  SPC*   SYM*
    TEL*    TEST*   TLM*   WX*     ZIP* †

星号是通配符，允许地址扩展（最多共 6 个字母数字字符）。因此，例如 *WX1*、*WX12* 和 *WX12CD* 都是有效的 APRS 目的地址。

† **AIR*** 和 **ZIP*** 地址正在被逐步淘汰，但目前需要保留以支持向后兼容。

所有这些地址的 SSID 均为 –0。非零 SSID 保留用于通用 APRS 数字中继。

这些地址被所有人复制。所有 APRS 软件都必须接受带有这些目的地址的数据包。

地址 **GPS**（即 3 个字母的地址 **GPS**，而非 **GPS***）专门用于通过数字中继器发送纬度/经度位置的跟踪器，这些数字中继器能够将位置转换为压缩数据格式。

地址 **DGPS** 和 **RTCM** 用于差分 GPS 校正站。大多数软件不会使用采用此地址的数据包，只是将其转发给连接的 GPS 单元。

地址 **SKY** 用于 Skywarn 气象观测站。

发送到 **SPCL** 的数据包用于特殊事件。APRS 软件可以显示此类数据包而排除其他所有数据包，以尽量减少屏幕上与特殊事件无关的其他电台的干扰。

地址 **TEL** 和 **TLM** 用于遥测电台。