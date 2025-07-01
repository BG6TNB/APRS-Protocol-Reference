---
order: "10.23"
title: Altitude in the Mic-E Status Text Field
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Altitude in the Mic-E status text field allows a station to report its height above mean sea level as part of the status message. This is useful for aircraft, balloons, and high-elevation stations.

## How is Altitude Encoded?
- Altitude is included as a numeric value in the status text, typically in feet
- The value may be preceded by a label such as "ALT" or simply appear as a number

## Example
A Mic-E status text field with altitude:
```
"Test ALT1234"
```
This indicates an altitude of 1,234 feet

## Usage Notes
- Decoding requires extracting the numeric value from the status text
- The format may vary between implementations
- Accurate altitude reporting is important for situational awareness

---

Altitude in the Mic-E status text field provides vertical position information in APRS packets.