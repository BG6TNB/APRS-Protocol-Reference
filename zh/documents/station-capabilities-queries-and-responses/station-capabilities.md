---
order: "15.1"
title: 基站能力
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

基站可以定义一组一个或多个基站属性，称为**基站能力（Station Capabilities）**。基站通过使用 `<` 数据类型标识符，响应 IGATE 查询（见下文）来发送其能力信息。

每个能力是一个 **TOKEN** 或 **TOKEN=VALUE** 对。一行中可以包含多个能力，每个能力之间用逗号分隔。

目前已定义的能力包括：
- IGATE
- MSG_CNT=n
- LOC_CNT=n

其中 IGATE 将基站定义为 IGate，MSG_CNT 是已发送的消息数量，LOC_CNT 是"本地"基站的数量（即 IGate 将在本地 RF 网络中向其传递消息的那些基站）。
