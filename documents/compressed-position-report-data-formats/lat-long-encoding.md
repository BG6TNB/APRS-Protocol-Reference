---
order: "9.4"
title: Lat/Long Encoding
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Latitude and longitude encoding in APRS compressed position reports uses base-91 notation to represent geographic coordinates in a compact form.

## How is Lat/Long Encoded?
- Both latitude and longitude are converted to integers, then encoded as four base-91 characters each
- This allows for high precision while minimizing packet length

## Encoding Steps
1. Convert latitude and longitude to a scaled integer value according to the APRS compressed format specification
2. Encode each value as four base-91 characters

## Example
A portion of a compressed string:
```
!/5L!<*e>/'6X
```
The characters after the data type identifier encode latitude and longitude

## Usage Notes
- Decoding requires knowledge of the scaling and base-91 conversion process
- The compressed format provides approximately 1.1 meters of resolution
- Many APRS software packages handle encoding and decoding automatically

---

Lat/long encoding in APRS compressed reports enables efficient, precise transmission of position data.