---
order: "4.4"
title: APRS 软件版本号
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

AX.25 目的地址字段可包含电台运行的 APRS 软件的版本号。了解版本号在调试时非常有用。

以下软件版本类型已保留（xx 和 xxx 表示版本号）：

    APCxxx   APRS/CE，Windows CE
    APDxxx   Linux aprsd 服务器
    APExxx   PIC-编码器
    APIxxx   Icom 电台（未来）
    APICxx   ICQ 消息
    APKxxx   Kenwood 电台
    APMxxx   MacAPRS
    APPxxx   pocketAPRS
    APRxxx   APRSdos
    APRS     旧版 APRSdos
    APRSM    旧版 MacAPRS
    APRSW    旧版 WinAPRS
    APSxxx   APRS+SA
    APWxxx   WinAPRS
    APXxxx   X-APRS
    APYxxx   Yaesu 电台（未来）
    APZxxx   实验性

此表将由 APRS 工作组添加。

例如，使用 MacAPRS 3.2.6 版本的电台可以使用第 4 章：AX.25 目的地址和源地址字段中的 APRS 数据 15 目的呼号 *APM326*。

实验性目的地址仅在产品开发期间、分配了特殊的 APRS 软件版本地址之前用于*临时*用途。