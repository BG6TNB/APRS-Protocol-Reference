---
order: '6.10'
title: Altitude
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Altitude in APRS packets indicates the height of a station or object above mean sea level. It is typically included as an optional field in position reports or telemetry data.

## Format
- Altitude is usually expressed in feet
- In standard APRS position reports, altitude is included after the position coordinates, prefixed by '/A='

## Example
```
4903.50N/07201.75W/A=001234
```
This represents:
- Latitude: 49°03.50' N
- Longitude: 72°01.75' W
- Altitude: 1,234 feet above mean sea level

## Usage Notes
- Altitude is optional and may be omitted if not relevant
- Some compressed or Mic-E formats encode altitude differently (see relevant sections)
- Accurate altitude reporting is useful for aircraft, balloons, and high-elevation stations

---

Altitude data in APRS enhances situational awareness, especially for mobile and airborne stations.