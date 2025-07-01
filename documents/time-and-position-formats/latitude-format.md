---
order: "6.3"
title: Latitude Format
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Latitude in APRS packets is expressed in degrees and minutes, followed by a hemisphere indicator ('N' for north, 'S' for south). This format provides sufficient precision for most APRS applications.

## Format
```
DDMM.mmN
```
- **DD**: Degrees (00–90)
- **MM.mm**: Minutes and hundredths of a minute (00.00–59.99)
- **N/S**: Hemisphere indicator ('N' for north, 'S' for south)

## Example
```
4903.50N
```
This represents 49 degrees, 3.50 minutes north latitude.

## Usage Notes
- Latitude always precedes longitude in APRS position reports.
- The format is fixed-width for easy parsing.
- In compressed or alternative formats, latitude may be encoded differently (see relevant sections).

---

Correct interpretation of latitude is essential for accurate mapping and tracking in APRS.