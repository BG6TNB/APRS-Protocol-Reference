---
order: "7.7"
title: Bearing and Number/Range/Quality
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Bearing, number, range, and quality are optional data extensions in APRS, often used in direction finding (DF) and signal tracking applications.

## What Are These Parameters?
- **Bearing**: The direction to a signal source, measured in degrees (0–359) from the observer's location
- **Number**: An identifier for the DF report or event
- **Range**: The estimated distance to the signal source, in kilometers or miles
- **Quality**: A measure of confidence or accuracy in the DF report, often on a numeric scale

## Encoding in APRS
- These values are typically included as fields in the packet, such as "BRG=045 RNG=10km Q=8"

## Example
```
4903.50N/07201.75W>DF BRG=045 RNG=10km Q=8
```
This represents:
- Bearing: 45°
- Range: 10 kilometers
- Quality: 8 (on a defined scale)

## Usage Notes
- These parameters are especially useful for radio direction finding and event coordination
- The meaning of the quality value should be documented for consistent interpretation
- Not all packets will include all fields; presence depends on the application

---

Bearing, number, range, and quality data in APRS enhance the utility of direction finding and signal tracking.