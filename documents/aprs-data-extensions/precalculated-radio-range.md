---
order: "7.5"
title: Pre-Calculated Radio Range
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The 7-byte RNGrrrr Data Extension allows users to transmit a pre-calculated omni-directional radio range, where `rrrr` is the range in miles (with leading zeros).

For example:

```
RNG0050
```

indicates a radio range of 50 miles.

APRS can use this value to plot a range circle around the station.
