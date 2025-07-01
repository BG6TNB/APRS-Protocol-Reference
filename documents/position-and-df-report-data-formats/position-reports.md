---
order: "8.1"
title: Position Reports
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

A position report is a fundamental APRS packet type used to convey the geographic location of a station, object, or event. Position reports are the basis for mapping and tracking in APRS.

## What is a Position Report?
- A packet containing latitude, longitude, and often additional information such as symbol, course, speed, altitude, and comment
- Used by fixed, mobile, and portable stations to share their current or last known position

## Standard Format
```
!4903.50N/07201.75W>
```
- '!' is the data type identifier for a position without timestamp
- Latitude and longitude are in APRS standard format
- The '>' symbol may be followed by a comment or additional data

## Example
```
!4903.50N/07201.75W>Test station at summit
```
This represents:
- Latitude: 49°03.50' N
- Longitude: 72°01.75' W
- Comment: Test station at summit

## Usage Notes
- Position reports may include optional fields such as course, speed, altitude, and symbol
- The data type identifier may vary (e.g., '@' for position with timestamp)
- Accurate position reporting is essential for APRS mapping and situational awareness

---

Position reports are the core of APRS, enabling real-time location sharing and tracking.