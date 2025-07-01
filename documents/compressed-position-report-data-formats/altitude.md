---
order: "9.8"
title: Altitude
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Altitude in APRS compressed position reports is encoded as an optional field, allowing stations to report their height above mean sea level in a compact format.

## How is Altitude Encoded?
- Altitude is encoded using base-91 notation, typically as two characters in the compressed string
- The encoded value represents altitude in feet

## Example
A compressed string with altitude:
```
!/5L!<*e>/'6X
```
The relevant characters encode the altitude value

## Usage Notes
- Decoding requires knowledge of the APRS compressed format specification and base-91 conversion
- Altitude is optional and may not be present in all compressed reports
- Accurate altitude reporting is important for aircraft, balloons, and high-elevation stations

---

Altitude encoding in APRS compressed reports enables efficient transmission of vertical position data.