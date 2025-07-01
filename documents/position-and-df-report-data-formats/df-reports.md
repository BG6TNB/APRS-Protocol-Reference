---
order: "8.2"
title: DF Reports
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

DF (Direction Finding) reports are specialized APRS packets used to share information about the direction and strength of a received signal. These reports are valuable for radio foxhunting, interference tracking, and event coordination.

## What is a DF Report?
- A packet containing the observer's position, the bearing to the signal source, signal strength, and often additional data such as quality or range
- Used by stations participating in direction finding activities

## Standard Format
- DF reports typically include fields such as BRG (bearing), DF (signal strength), Q (quality), and RNG (range)
- The format may vary depending on the application and software

## Example
```
4903.50N/07201.75W>DF BRG=045 DF=120 Q=8 RNG=10km
```
This represents:
- Observer's position: 49°03.50' N, 72°01.75' W
- Bearing to signal: 45°
- Signal strength: 120 (unit depends on context)
- Quality: 8 (on a defined scale)
- Range: 10 kilometers

## Usage Notes
- DF reports are essential for collaborative signal tracking and event management
- The meaning of each field should be documented for consistent interpretation
- Not all APRS software supports DF reports

---

DF reports in APRS enable effective direction finding and signal source localization.