---
order: "7.6"
title: Omni-DF Signal Strength
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Omni-DF (Direction Finding) signal strength is an optional data extension in APRS packets, used to report the received signal strength of a transmitter as measured by an omnidirectional antenna.

## What is Omni-DF Signal Strength?
- A numeric value representing the strength of a received signal
- Used in direction finding and signal tracking applications

## Encoding in APRS
- Signal strength is typically encoded as a numeric value, often in dBm or as a relative scale (e.g., 0–255)
- The value may be included as a field such as "DF=120" or similar

## Example
```
4903.50N/07201.75W>Test DF=120
```
This represents:
- Omni-DF signal strength: 120 (unit depends on context)

## Usage Notes
- Signal strength values are most useful when compared over time or between stations
- The scale and units should be documented for consistent interpretation
- Used in radio foxhunting, interference tracking, and network diagnostics

---

Omni-DF signal strength reporting in APRS supports advanced direction finding and signal analysis.