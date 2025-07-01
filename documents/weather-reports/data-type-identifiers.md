---
order: "12.2"
title: Data Type Identifiers
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The following APRS Data Type Identifiers are used in Weather Reports containing raw data:
- `!` Ultimeter 2000
- `#` Peet Bros U-II
- `$` Ultimeter 2000
- `*` Peet Bros U-II
- `_` Positionless weather data

In addition, where the raw data has been post-processed (for example, by the insertion of station location information), the four position Data Type Identifiers `!`, `=`, `/` and `@` may be used instead. In this case, the Weather Report is identified with the weather symbol `/_` or `\_` in the APRS Data.