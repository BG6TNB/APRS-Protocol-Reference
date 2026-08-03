---
order: "9.6"
title: Course/Speed, Pre-Calculated Radio Range and Altitude
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The two `cs` bytes following the Symbol Code character can contain either the compressed course and speed or the compressed pre-calculated radio range or the station's altitude. These two bytes are in base 91 format.

In the special case of `c` = ` ` (space), there is no course, speed or range data, in which case the `csT` bytes are ignored.

## Course/Speed

If the ASCII code for `c` is in the range `!` to `z` inclusive — corresponding to numeric values in the range 0–89 decimal (i.e. after subtracting 33 from the ASCII code) — then `cs` represents a compressed course/speed value:

```
course = c x 4
speed = 1.08^s – 1
```

For example, if the `cs` characters are `7P`, the corresponding values of `c` and `s` (after subtracting 33 from the ASCII character code) are 22 and 47 respectively. Substituting these values in the above equations:

```
course = 22 x 4 = 88 degrees
speed = 1.08^47 – 1 = 36.2 knots
```

## Pre-Calculated Radio Range

If `c` = `{`, then `cs` represents a compressed pre-calculated radio range value:

```
range = 2 x 1.08^s
```

For example, if the `cs` bytes are `{?`, the ASCII code for `?` is 63, so the value of `s` is 30 (i.e. 63-33). Thus:

```
range = 2 x 1.08^30
      ~ 20 miles
```

So APRS will draw a circle of radius 20 miles around the station plot on the screen.
