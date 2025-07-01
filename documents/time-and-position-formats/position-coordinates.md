---
order: "6.5"
title: Position Coordinates
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

APRS position coordinates consist of a latitude and longitude pair, formatted according to APRS conventions. These coordinates specify the precise location of a station, object, or event.

## Standard Format
```
DDMM.mmN/DDDMM.mmE
```
- **Latitude**: Degrees, minutes, and hemisphere ('N' or 'S')
- **Longitude**: Degrees, minutes, and hemisphere ('E' or 'W')
- The '/' character separates latitude and longitude

## Example
```
4903.50N/07201.75W
```
This represents:
- Latitude: 49 degrees, 3.50 minutes north
- Longitude: 72 degrees, 1.75 minutes west

## Usage Notes
- The position coordinate string is fixed-width for easy parsing
- In compressed or alternative formats, the coordinates may be encoded differently (see relevant sections)
- The position may be accompanied by a symbol code to indicate the type of station or object

---

Accurate position coordinates are fundamental to APRS mapping and tracking.