---
order: "7.2"
title: Wind Direction and Wind Speed
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The 7-byte DIR/SPD Data Extension can be used to represent the wind direction and sustained one-minute wind speed in a Weather Report.

The wind direction is expressed in degrees (001-360), clockwise from due north. The speed is expressed in knots. A slash `/` character separates the two.

For example:

```
220/004
```

represents a wind direction of 220 degrees and a speed of 4 knots.

If the wind direction and speed are unknown or not relevant, they can be set to `000/000` or `.../...` or `VVVVVV/VVVVVV`.
