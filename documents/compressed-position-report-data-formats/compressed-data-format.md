---
order: "9.2"
title: Compressed Data Format
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The compressed data format in APRS is a specialized encoding scheme that allows position and related information to be transmitted in a compact, fixed-length string. This format is designed for bandwidth efficiency and is widely used in APRS for mobile and high-density environments.

## Structure of the Compressed Data Format
- Uses base-91 encoding to represent latitude, longitude, and optional data fields (course, speed, altitude, etc.)
- The compressed string is always 13 characters long
- Begins with a data type identifier (e.g., '/')

## Example
```
!/5L!<*e>/'6X
```
This compressed string encodes:
- Latitude
- Longitude
- Symbol
- (Optionally) course, speed, altitude, and other extensions

## Decoding Notes
- Decoding requires knowledge of base-91 notation and the APRS compressed format specification
- Many APRS software packages can decode and display compressed position reports automatically

---

The compressed data format in APRS enables efficient transmission of rich position data in minimal bandwidth.