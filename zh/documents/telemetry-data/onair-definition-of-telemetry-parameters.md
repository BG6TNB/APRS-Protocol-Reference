---
order: "13.2"
title: 遥测参数的空中定义
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

原则上，接收到的遥测数据可以以任何适当的方式解释。但在实践中，APRS 用户可以随时定义遥测参数（例如模拟值的二次系数，或二进制数据的含义），然后将这些定义作为 APRS 消息发送。其他接收到这些消息的站点就会知道如何解释数据。

这通过发送四条消息来实现：
- 参数名称消息（Parameter Name message）。
- 单位/标签消息（Unit/Label message）。
- 方程系数消息（Equation Coefficients message）。
- 位感知/项目名称消息（Bit Sense/Project Name message）。

消息的收件人是发送遥测数据的站点的呼号。例如，如果 N0QBF 发射了一个呼号为 N0QBF-11 的气球，那么这四条消息的收件人就是 N0QBF-11。

有关消息格式的完整详情，请参见第 14 章：消息、公告和通告。
