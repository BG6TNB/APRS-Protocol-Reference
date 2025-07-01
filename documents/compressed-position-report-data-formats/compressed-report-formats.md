---
order: "9.11"
title: Compressed Report Formats
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Compressed report formats in APRS refer to the various ways position and related data can be encoded in a compact, bandwidth-efficient manner. These formats are widely used in modern APRS networks.

## Types of Compressed Report Formats
- Standard 13-character compressed position report
- Variants that include additional fields (altitude, course, speed, radio range)
- Specialized formats for telemetry or custom data

## Structure
- Use base-91 encoding for compactness
- Fixed-length strings for easy parsing
- Begin with a data type identifier (e.g., '/')

## Example
A standard compressed report:
```
!/5L!<*e>/'6X
```
This string encodes position, symbol, and possibly other data

## Usage Notes
- Compressed formats are preferred in high-density or bandwidth-limited environments
- Most modern APRS software supports encoding and decoding compressed reports

---

Compressed report formats in APRS enable efficient, reliable data transmission for a wide range of applications.