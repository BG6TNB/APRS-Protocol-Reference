---
order: "10.4"
title: Destination Address Field Encoding
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Destination address field encoding in Mic-E is a method of packing latitude, message code, and other indicators into the AX.25 destination address in a non-standard but AX.25-compliant way.

## How is the Field Encoded?
- The 7-character field encodes:
  - 6 digits of latitude
  - North/South indicator
  - Longitude offset indicator
  - 3-bit message code
- Each character is shifted to fit the AX.25 address character set

## Example
A destination address field:
```
"S1S1S1"
```
This encodes latitude and message code for the station

## Usage Notes
- Decoding requires reversing the character shift and applying the Mic-E decoding rules
- The encoding logic is defined in the APRS Mic-E specification
- Most APRS software can decode this field automatically

---

Destination address field encoding in Mic-E enables efficient, compact transmission of position and status.