---
order: "9.10"
title: Old Trackers
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Old trackers in APRS refer to legacy devices and software that use earlier, less efficient position report formats. These trackers may not support all modern APRS features.

## What Are Old Trackers?
- Devices or software that use the original APRS position report formats (uncompressed or partially compressed)
- Limited support for additional data fields (e.g., altitude, course, speed)
- May lack GPS integration or smart beaconing

## Limitations
- Use more bandwidth due to less efficient encoding
- May not include all available data fields
- Reduced compatibility with some modern APRS features

## Example
An old tracker packet:
```
!4903.50N/07201.75W>
```
This uncompressed string encodes only position and symbol

## Compatibility Notes
- Old trackers are still supported by most APRS infrastructure
- Some advanced features may not be available or decoded

---

Old trackers in APRS provide basic functionality but lack the efficiency and features of modern devices.