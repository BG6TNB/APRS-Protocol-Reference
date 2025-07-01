---
order: "7.1"
title: Course and Speed
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Course and speed are common data extensions in APRS position reports, providing additional information about the movement of a station or object.

## What Are Course and Speed?
- **Course**: The direction of travel, measured in degrees (0–359), relative to true north.
- **Speed**: The rate of movement, typically expressed in knots (nautical miles per hour).

## Encoding in APRS
- Course and speed are usually appended to the position coordinates, separated by a slash ('/').
- The format is: `CCC/SSS`, where CCC is the course (three digits) and SSS is the speed (three digits).

## Example
```
4903.50N/07201.75W123/045
```
This represents:
- Latitude: 49°03.50' N
- Longitude: 72°01.75' W
- Course: 123°
- Speed: 45 knots

## Usage Notes
- Course and speed are optional but recommended for mobile stations.
- If not moving, speed may be set to 000.
- Some compressed or alternative formats encode course and speed differently (see relevant sections).

---

Including course and speed in APRS packets enhances situational awareness and tracking accuracy.