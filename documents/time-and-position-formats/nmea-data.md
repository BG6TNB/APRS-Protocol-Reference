---
order: "6.9"
title: NMEA Data
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

NMEA data refers to standard sentences output by GPS receivers, which can be included in APRS packets to provide position and related information. The most common NMEA sentence used in APRS is the $GPRMC sentence.

## What is NMEA?
- NMEA (National Marine Electronics Association) defines a standard for communication between marine electronics, including GPS receivers
- NMEA sentences are ASCII text strings beginning with '$', followed by a sentence identifier and comma-separated fields

## Usage in APRS
- Some APRS devices and software can transmit raw NMEA sentences as part of the information field
- The $GPRMC sentence provides time, position, speed, and course
- Including NMEA data allows for direct use of GPS output without conversion

## Example
```
$GPRMC,123519,A,4807.038,N,01131.000,E,022.4,084.4,230394,003.1,W*6A
```
This sentence provides:
- Time: 12:35:19 UTC
- Latitude: 48°07.038' N
- Longitude: 11°31.000' E
- Speed: 22.4 knots
- Course: 84.4°
- Date: 23 March 1994

## Compatibility Notes
- Not all APRS software supports raw NMEA sentences
- NMEA data is most useful for direct GPS-to-APRS applications

---

NMEA data in APRS enables seamless integration with GPS receivers and accurate, real-time position reporting.