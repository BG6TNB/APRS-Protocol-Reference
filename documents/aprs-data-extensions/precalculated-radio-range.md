---
order: "7.5"
title: Pre-Calculated Radio Range
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Pre-calculated radio range is an optional data extension in APRS packets that indicates the estimated communication range of a station. This information can help other operators understand the coverage area of a transmitter.

## What is Pre-Calculated Radio Range?
- An estimate of the maximum distance (in kilometers or miles) that a station's signal can reliably reach
- Calculated based on transmitter power, antenna height, gain, and local terrain

## Encoding in APRS
- The radio range value is typically included as a numeric field in the packet, often following other data extensions
- The format may vary, but is usually a number with an optional unit (e.g., "RNG=50km")

## Example
```
4903.50N/07201.75W>Test RNG=50km
```
This represents:
- Estimated radio range: 50 kilometers

## Usage Notes
- Pre-calculated range is optional and may not be present in all packets
- Accurate range estimation depends on local conditions and station setup
- Useful for network planning and situational awareness

---

Including pre-calculated radio range in APRS packets helps operators assess coverage and connectivity.