---
order: "9.5"
title: Lat/Long Decoding
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Lat/long decoding in APRS compressed position reports is the process of converting the base-91 encoded characters back into standard latitude and longitude values.

## How is Lat/Long Decoded?
- Each set of four base-91 characters is converted back to an integer
- The integer is then scaled according to the APRS compressed format specification to yield latitude or longitude

## Decoding Steps
1. Convert each base-91 character to its numeric value (subtract 33 from ASCII code)
2. Combine the four values to form a single integer
3. Apply the scaling formula to recover the original coordinate

## Example
Given a compressed string:
```
!/5L!<*e>/'6X
```
The relevant characters are decoded to yield latitude and longitude

## Usage Notes
- The process is reversible and preserves high precision (about 1.1 meters)
- Most APRS software can decode compressed position reports automatically

---

Lat/long decoding in APRS compressed reports ensures accurate recovery of position data from compact packets.