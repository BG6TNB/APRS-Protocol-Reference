---
order: "10.1"
title: Mic-E Data Format
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The Mic-E data format is a specialized APRS encoding scheme that allows position, status, and other information to be transmitted in a very compact form. It is widely used in mobile APRS trackers and radios.

## What is the Mic-E Data Format?
- Encodes latitude, longitude, speed, course, status, and optional telemetry in the AX.25 destination address and information fields
- Designed for minimal packet length and efficient transmission
- Used by devices such as the TinyTrak, Kenwood radios, and other Mic-E compatible trackers

## Advantages
- Extremely compact: a complete position/status report can be as short as 25 bytes
- Reduces channel congestion and increases update frequency
- Supports status messages and telemetry in addition to position

## Example
A typical Mic-E packet (fields shown conceptually):
```
DEST: "S1S1S1" SRC: "CALL-9" INFO: "`l4!>\"Test"
```
This encodes:
- Latitude and message code in the destination address
- Longitude, speed, course, and status in the information field

## Usage Notes
- Decoding Mic-E packets requires knowledge of the encoding scheme
- Most modern APRS software and radios support Mic-E decoding
- Mic-E format is ideal for mobile and resource-constrained devices

---

The Mic-E data format enables efficient, high-frequency position and status reporting in APRS.

In Mic-E data format, the station's position, course, speed and display symbol, together with an APRS digipeater path and Mic-E Message Code, are packed into the AX.25 Destination Address and Information fields.

The Information field can also optionally contain either Mic-E telemetry data or Mic-E status. The Mic-E Status can contain the station's Maidenhead locator and altitude.

Mic-E packets can be very short. At the minimum, with no callsigns in the Digipeater Addresses field and no optional telemetry data or Mic-E status text, a complete Mic-E packet is just 25 bytes long (excluding FCS and flags).

Mic-E data format is not only used in the Microphone Encoder unit; it is also used in the PIC Encoder and in the Kenwood TH-D7 and TM-D700 radios.
