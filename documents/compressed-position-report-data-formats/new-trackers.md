---
order: "9.9"
title: New Trackers
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

New trackers in APRS refer to modern devices and software that support advanced features, including the use of compressed position report formats. These trackers are designed for efficient, high-density APRS networks.

## What Are New Trackers?
- Devices or software that implement the latest APRS standards
- Support for compressed position reports, additional data fields (altitude, course, speed), and improved power efficiency
- Often include GPS integration, smart beaconing, and telemetry

## Use of Compressed Formats
- New trackers use the 13-character compressed position report format for bandwidth efficiency
- They may include optional fields such as altitude, radio range, and more

## Example
A new tracker packet:
```
!/5L!<*e>/'6X
```
This compressed string encodes position, symbol, and possibly other data

## Compatibility Notes
- New trackers are generally compatible with existing APRS infrastructure
- Some older software may not decode all advanced fields

---

New trackers in APRS enable richer, more efficient data transmission and improved network performance.