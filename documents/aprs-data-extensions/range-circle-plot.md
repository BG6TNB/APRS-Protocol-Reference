---
order: "7.4"
title: Range Circle Plot
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

A range circle plot is an optional data extension in APRS used to visually represent the coverage area or range of a station on a map.

## What is a Range Circle Plot?
- A graphical circle centered on a station's reported position
- Indicates the estimated or intended communication range

## Encoding in APRS
- The range value (radius) is typically included as a numeric field, such as "RNG=20km"
- The plot is rendered by APRS software based on the provided center and radius

## Example
```
4903.50N/07201.75W>RNG=20km
```
This represents:
- A range circle with a 20-kilometer radius centered at the given coordinates

## Usage Notes
- Range circles are useful for network planning, event management, and situational awareness
- The actual coverage may vary due to terrain and other factors
- Not all APRS software displays range circles

---

Range circle plots in APRS provide a visual indication of station coverage and connectivity.