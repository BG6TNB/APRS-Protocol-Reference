---
order: "7.2"
title: Wind Direction and Wind Speed
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Wind direction and wind speed are common data extensions in APRS, especially in weather reports. They provide information about the current wind conditions at a reporting station.

## What Are Wind Direction and Wind Speed?
- **Wind Direction**: The direction from which the wind is blowing, measured in degrees (0–359), relative to true north.
- **Wind Speed**: The speed of the wind, typically expressed in knots.

## Encoding in APRS
- Wind direction and speed are usually encoded as part of the weather data string.
- The format is: `DDD/SSS`, where DDD is the wind direction (three digits) and SSS is the wind speed (three digits).

## Example
```
_080/005g010t069r000p000P000h50b10150
```
This represents:
- Wind direction: 80°
- Wind speed: 5 knots
- Wind gust: 10 knots (g010)
- Temperature: 69°F (t069)
- Other weather data fields follow

## Usage Notes
- Wind data is essential for weather stations and situational awareness.
- Wind gusts, if present, are indicated by 'g' followed by three digits.
- Units are typically knots, but always check the context or documentation.

---

Wind direction and speed data in APRS enhance the value of weather and environmental reporting.