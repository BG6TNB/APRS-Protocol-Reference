---
order: "10.21"
title: Mic-E Telemetry Data
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Mic-E telemetry data in APRS allows stations to transmit sensor readings or other measurements alongside position and status information. This feature is useful for reporting environmental, equipment, or operational parameters.

## What is Mic-E Telemetry Data?
- Optional data appended to the Mic-E information field
- Can include sensor values such as voltage, temperature, pressure, or custom measurements
- Encoded in a compact format for efficient transmission

## Encoding in Mic-E
- Telemetry data is appended after the standard position and status fields in the information field
- The format and scaling of telemetry values are defined by the transmitting station

## Example
A Mic-E information field with telemetry:
```
"`l4!>\"Test123,456,789"
```
This encodes position, status, and three telemetry values

## Usage Notes
- The meaning and scaling of telemetry values should be documented for receivers
- Most APRS software can display Mic-E telemetry if properly configured
- Telemetry enhances situational awareness for remote or automated stations

---

Mic-E telemetry data enables real-time remote monitoring in APRS networks.