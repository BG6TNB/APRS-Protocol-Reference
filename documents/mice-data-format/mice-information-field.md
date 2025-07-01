---
order: "10.7"
title: Mic-E Information Field
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The Mic-E information field in APRS encodes longitude, speed, course, status, and optional telemetry data in a compact format. This field is essential for reconstructing the full position and status of a Mic-E station.

## How is the Information Field Encoded?
- Longitude is encoded using a combination of ASCII characters and offset indicators
- Speed and course are encoded in specific bytes
- Status message or telemetry data may be appended

## Example
A Mic-E information field (conceptual):
```
"`l4!>\"Test"
```
This encodes:
- Longitude, speed, course
- Status message: "Test"

## Usage Notes
- Decoding requires knowledge of the Mic-E encoding scheme
- Most APRS software can decode the information field automatically
- The information field, combined with the destination address, provides a complete position and status report

---

The Mic-E information field enables efficient, detailed reporting in APRS packets.