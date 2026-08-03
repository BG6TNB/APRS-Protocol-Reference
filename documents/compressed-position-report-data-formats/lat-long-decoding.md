---
order: "9.5"
title: Lat/Long Decoding
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

To decode a compressed lat/long, the reverse process is needed. That is, if `YYYY` is represented as `y1 y2 y3 y4` and `XXXX` as `x1 x2 x3 x4`, then:

```
Lat = 90 - ((y1 - 33) x 91^3 + (y2 - 33) x 91^2 + (y3 - 33) x 91 + y4 - 33) / 380926
```

```
Long = -180 + ((x1 - 33) x 91^3 + (x2 - 33) x 91^2 + (x3 - 33) x 91 + x4 - 33) / 190463
```

For example, if the compressed value of the longitude is `<*e7` (as computed above), the calculation becomes:

```
Long = -180 + (27 x 91^3 + 9 x 91^2 + 68 x 91 + 22) / 190463
     = -180 + (20346417 + 74529 + 6188 + 22) / 190463
     = -180 + 107.25
     = -72.75 degrees
```
