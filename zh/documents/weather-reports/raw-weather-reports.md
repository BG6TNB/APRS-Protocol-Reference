---
order: "12.3"
title: 原始天气报告
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

来自独立气象站的原始天气数据包含在 APRS AX.25 帧的信息字段中：

**原始天气报告格式**
```
! or # or $ or *
原始天气数据
```
字节数：1 n

**示例：**
```
!!006B005803500000----03E9--------002105140000005D  Ultimeter 2000
#50B7500820082  Peet Bros U-II
$ULTW0031003702CE0069----000086A00001----011901CC00000005  Ultimeter 2000
*7007600000000  Peet Bros U-II
```