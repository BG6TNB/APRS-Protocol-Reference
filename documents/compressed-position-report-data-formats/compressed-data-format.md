---
order: "9.2"
title: Compressed Data Format
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Compressed data may be generated in several ways:

- by APRS software.
- pre-entered manually into a digipeater's beacon text.
- by a digipeater converting raw tracker NMEA packets to compressed.

[In future, there is the possibility that a Kantronics KPC-3 or other tracker TNC will be able to compress data directly from an attached GPS receiver].

In all cases the compressed format is a fixed 13-character field:

```
/YYYYXXXX$csT
```

where:

- `/` is the Symbol Table Identifier
- `YYYY` is the compressed latitude
- `XXXX` is the compressed longitude
- `$` is the Symbol Code
- `cs` is the compressed course/speed or compressed pre-calculated radio range or compressed altitude
- `T` is the compression type indicator

**Compressed Position Data**

| Sym Table ID | Compressed Lat `YYYY` | Compressed Long `XXXX` | Symbol Code | Compressed Course/Speed / Compressed Radio Range / Compressed Altitude | Comp Type `T` |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 4 | 4 | 1 | 2 | 1 |

Compressed format can be used in place of lat/long position format anywhere that `...ddmm.hhN/dddmm.hhW$xxxxxxx...` occurs.

All bytes except for the `/` and `$` are base-91 printable ASCII characters (`!..{`). These are converted to numeric values by subtracting 33 from the decimal ASCII character code. For example, `#` has an ASCII code of 35, and represents a numeric value of 2 (i.e. 35-33).
