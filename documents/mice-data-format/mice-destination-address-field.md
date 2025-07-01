---
order: "10.3"
title: Mic-E Destination Address Field
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The Mic-E destination address field in APRS is used to encode latitude and a message code in a compact, non-standard way. This field is a key part of the Mic-E data format.

## How is the Destination Address Encoded?
- The 7-character destination address encodes:
  - 6 digits of latitude
  - North/South indicator
  - Longitude offset indicator
  - 3-bit Mic-E message code (standard, custom, or emergency)
- The encoding uses shifted ASCII values to remain AX.25-compliant

## Example
A destination address field:
```
"S1S1S1"
```
This encodes latitude and message code for the station

## Usage Notes
- Decoding requires reversing the ASCII shift and applying the Mic-E decoding rules
- The destination address field is not a standard callsign in Mic-E packets
- Most APRS software can decode Mic-E destination addresses automatically

---

The Mic-E destination address field enables efficient encoding of position and status in APRS packets.