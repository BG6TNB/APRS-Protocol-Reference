---
order: "20.5"
title: AX.25 目标地址中的符号
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

当无法在信息字段中包含符号时，可以在 AX.25 目标地址中指定符号，使用以下通用目标地址：`GPSxyz`、`GPSCnn`、`GPSEnn`、`SPCxyz` 和 `SYMxyz`。

字符 `xy` 和 `nn` 指代 APRS 符号表中的条目。例如，跟踪器可以使用目标地址 `GPSMV ` 或 `GPS30` 来指定 "汽车" 图标（来自主符号表）。

字符 `z` 指定叠加字符（在允许的情况下），或为空格——空格是填充字符，因为所有 AX.25 地址必须恰好为 6 个字符长。

`GPS`/`SPC`/`SYM` `xy` 和 `GPSCnn`/`GPSEnn` 地址可以互换使用。因此，例如，`GPSBM `、`SPCBM `、`SYMBM ` 和 `GPSC12` 都指定了 "童子军" 图标（来自主符号表），而 `GPSOM `、`SPCOM `、`SYMOM ` 和 `GPSE12` 都指定了 "女童子军" 图标（来自备用符号表）。