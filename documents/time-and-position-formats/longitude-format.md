---
order: "6.4"
title: Longitude Format
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Longitude in APRS packets is expressed in degrees and minutes, followed by a hemisphere indicator ('E' for east, 'W' for west). This format provides sufficient precision for most APRS applications.

## Format
```
DDDMM.mmE
```
- **DDD**: Degrees (000–180)
- **MM.mm**: Minutes and hundredths of a minute (00.00–59.99)
- **E/W**: Hemisphere indicator ('E' for east, 'W' for west)

## Example
```
07201.75W
```
This represents 72 degrees, 1.75 minutes west longitude.

## Usage Notes
- Longitude always follows latitude in APRS position reports.
- The format is fixed-width for easy parsing.
- In compressed or alternative formats, longitude may be encoded differently (see relevant sections).

---

Correct interpretation of longitude is essential for accurate mapping and tracking in APRS.