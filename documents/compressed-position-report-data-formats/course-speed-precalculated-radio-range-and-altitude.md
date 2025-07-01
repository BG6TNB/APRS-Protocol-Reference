---
order: "9.6"
title: Course/Speed, Pre-Calculated Radio Range and Altitude
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

In APRS compressed position reports, course, speed, pre-calculated radio range, and altitude can be included as additional data fields, providing a richer description of a station's status and capabilities.

## What Are These Fields?
- **Course**: The direction of travel, in degrees (0–359)
- **Speed**: The rate of movement, in knots
- **Pre-Calculated Radio Range**: The estimated communication range, in kilometers or miles
- **Altitude**: The height above mean sea level, in feet

## Encoding in Compressed Reports
- These values are encoded using base-91 notation and occupy specific positions in the 13-character compressed string
- The encoding allows for compact representation of multiple fields

## Example
A compressed string with course, speed, and altitude:
```
!/5L!<*e>/'6X
```
The relevant characters encode the additional fields

## Usage Notes
- Decoding requires knowledge of the APRS compressed format specification
- Not all compressed reports include all fields; presence depends on the packet type and available data
- These fields enhance situational awareness and tracking accuracy

---

Including course, speed, radio range, and altitude in compressed APRS reports provides a comprehensive view of station status.